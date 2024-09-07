use crate::cell::{Cell, CellState};
use crate::core::{count_solutions, generate_sudoku, is_valid};
use rand::seq::SliceRandom;
use rand::Rng;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy)]
pub enum Difficulty {
    VeryEasy = 1,
    Easy = 2,
    Medium = 3,
    Hard = 4,
    VeryHard = 5,
}

impl Difficulty {
    pub fn from_u8(value: u8) -> Difficulty {
        match value {
            1 => Difficulty::VeryEasy,
            2 => Difficulty::Easy,
            3 => Difficulty::Medium,
            4 => Difficulty::Hard,
            5 => Difficulty::VeryHard,
            _ => Difficulty::Easy, // Default to Easy
        }
    }

    fn get_hint_count(&self, rng: &mut impl Rng) -> usize {
        match self {
            Difficulty::VeryEasy => rng.gen_range(51..=60),
            Difficulty::Easy => rng.gen_range(41..=50),
            Difficulty::Medium => rng.gen_range(31..=40),
            Difficulty::Hard => rng.gen_range(24..=30),
            Difficulty::VeryHard => rng.gen_range(17..=23),
        }
    }
}

#[wasm_bindgen]
pub struct SudokuGame {
    board: [[Cell; 9]; 9],
}

#[wasm_bindgen]
impl SudokuGame {
    pub fn new(difficulty: Difficulty) -> Self {
        let board = generate_sudoku();
        let mut game = SudokuGame { board };
        game.create(difficulty);
        game
    }

    pub fn get_cell(&self, row: usize, col: usize) -> Cell {
        self.board[row][col]
    }

    pub fn set_cell(&mut self, row: usize, col: usize, value: Option<u8>) -> bool {
        match self.board[row][col].get_state() {
            CellState::Empty | CellState::PlayerFilled | CellState::Invalid => match value {
                None => {
                    self.board[row][col].clear();
                    true
                }
                Some(v) if v <= 9 => {
                    if is_valid(&self.board, row, col, v) {
                        self.board[row][col].set(CellState::PlayerFilled, Some(v));
                    } else {
                        self.board[row][col].set(CellState::Invalid, Some(v));
                    }
                    true
                }
                _ => false,
            },
            CellState::Prefilled => false,
        }
    }

    pub fn is_solved(&self) -> bool {
        !self
            .board
            .iter()
            .flatten()
            .any(|cell| cell.is_empty() || cell.get_state() == CellState::Invalid)
    }

    pub fn clear(&mut self) {
        self.board
            .iter_mut()
            .flatten()
            .filter(|cell| {
                matches!(
                    cell.get_state(),
                    CellState::PlayerFilled | CellState::Invalid
                )
            })
            .for_each(|cell| cell.clear());
    }

    pub fn is_cell_prefilled(&self, row: usize, col: usize) -> bool {
        self.board[row][col].get_state() == CellState::Prefilled
    }

    fn create(&mut self, difficulty: Difficulty) {
        let mut rng = rand::thread_rng();
        let hint_count = difficulty.get_hint_count(&mut rng);

        let mut board_positions: Vec<(usize, usize)> =
            (0..9).flat_map(|r| (0..9).map(move |c| (r, c))).collect();
        board_positions.shuffle(&mut rng);

        // 칸을 제거하면서 유일해를 가지는지 검증
        for &(row, col) in &board_positions {
            if self.count_filled_cells() <= hint_count {
                break;
            }

            let temp = self.board[row][col].get_value();
            self.board[row][col].clear();

            if !self.has_unique_solution() {
                self.board[row][col].set(CellState::Prefilled, temp);
            }
        }
    }

    fn count_filled_cells(&self) -> usize {
        self.board
            .iter()
            .flatten()
            .filter(|cell| !cell.is_empty())
            .count()
    }

    fn has_unique_solution(&mut self) -> bool {
        let mut board_copy = self.board;
        let count = count_solutions(&mut board_copy);

        count == 1
    }
}
