use crate::cell::{Cell, CellState};
use crate::core::{count_solutions, generate_sudoku};
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
            Difficulty::VeryEasy => rng.gen_range(53..=60),
            Difficulty::Easy => rng.gen_range(44..=52),
            Difficulty::Medium => rng.gen_range(35..=43),
            Difficulty::Hard => rng.gen_range(26..=34),
            Difficulty::VeryHard => rng.gen_range(17..=25),
        }
    }
}

#[wasm_bindgen]
pub struct SudokuGame {
    board: [[Cell; 9]; 9],
    solution: [[u8; 9]; 9],
}

#[wasm_bindgen]
impl SudokuGame {
    pub fn new(difficulty: Difficulty) -> Self {
        let board = generate_sudoku();
        let solution = board.map(|row| row.map(|cell| cell.get_value().unwrap_or(0)));

        let mut game = SudokuGame { board, solution };
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
                    if self.is_correct(row, col, Some(v)) {
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

    pub fn clear_cell(&mut self, row: usize, col: usize) -> bool {
        match self.board[row][col].get_state() {
            CellState::Empty | CellState::PlayerFilled | CellState::Invalid => {
                self.board[row][col].clear();
                true
            }
            CellState::Prefilled => false,
        }
    }

    pub fn is_solved(&self) -> bool {
        self.board.iter().enumerate().all(|(row, cells)| {
            cells
                .iter()
                .enumerate()
                .all(|(col, cell)| self.is_correct(row, col, cell.get_value()))
        })
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

    fn is_correct(&self, row: usize, col: usize, value: Option<u8>) -> bool {
        value.is_some_and(|v| self.solution[row][col] == v)
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_new_game_with_difficulty() {
        let difficulties = [
            Difficulty::VeryEasy,
            Difficulty::Easy,
            Difficulty::Medium,
            Difficulty::Hard,
            Difficulty::VeryHard,
        ];

        for &difficulty in &difficulties {
            let game = SudokuGame::new(difficulty);
            let filled_count = game.count_filled_cells();

            match difficulty {
                Difficulty::VeryEasy => assert!(filled_count >= 53 && filled_count <= 60),
                Difficulty::Easy => assert!(filled_count >= 44 && filled_count <= 52),
                Difficulty::Medium => assert!(filled_count >= 35 && filled_count <= 43),
                Difficulty::Hard => assert!(filled_count >= 26 && filled_count <= 34),
                Difficulty::VeryHard => assert!(filled_count >= 17 && filled_count <= 25),
            }
        }
    }

    #[test]
    fn test_set_cell() {
        let mut game = SudokuGame::new(Difficulty::Easy);

        // Find an empty cell
        let (empty_row, empty_col) = (0..9)
            .flat_map(|row| (0..9).map(move |col| (row, col)))
            .find(|&(row, col)| game.get_cell(row, col).is_empty())
            .unwrap();

        let answer = game.solution[empty_row][empty_col];

        // Set a valid but not collect value
        assert!(
            game.set_cell(empty_row, empty_col, Some(answer + 1)),
            "Should be able to set a valid value"
        );
        assert_eq!(
            game.get_cell(empty_row, empty_col).get_value(),
            Some(answer + 1),
            "Cell should contain the set value"
        );
        assert_eq!(
            game.get_cell(empty_row, empty_col).get_state(),
            CellState::Invalid,
            "Cell should be Invalid state"
        );

        // Set a valid and collect value
        assert!(
            game.set_cell(empty_row, empty_col, Some(answer)),
            "Should be able to set a valid value"
        );
        assert_eq!(
            game.get_cell(empty_row, empty_col).get_value(),
            Some(answer),
            "Cell should contain the set value"
        );
        assert_eq!(
            game.get_cell(empty_row, empty_col).get_state(),
            CellState::PlayerFilled,
            "Cell should be PlayerFilled state"
        );

        // Set an unacceptable value
        assert!(
            !game.set_cell(empty_row, empty_col, Some(10)),
            "Should return false for value grater than 9"
        );
        assert_eq!(
            game.get_cell(empty_row, empty_col).get_value(),
            Some(answer),
            "Cell should not be changed"
        );
    }

    #[test]
    fn test_is_solved() {
        let mut game = SudokuGame::new(Difficulty::Easy);

        // Fill all cells with the correct solution
        for row in 0..9 {
            for col in 0..9 {
                game.set_cell(row, col, Some(game.solution[row][col]));
            }
        }

        assert!(game.is_solved(), "Game should be solved");

        // Find a player filled cell
        let (row, col) = (0..9)
            .flat_map(|row| (0..9).map(move |col| (row, col)))
            .find(|&(row, col)| game.get_cell(row, col).get_state() == CellState::PlayerFilled)
            .unwrap();

        // Change one cell to an incorrect value
        let incorrect_value = if game.solution[row][col] < 9 {
            game.solution[row][col] + 1
        } else {
            game.solution[row][col] - 1
        };
        game.set_cell(row, col, Some(incorrect_value));

        assert!(!game.is_solved(), "Game should not be solved");
    }

    #[test]
    fn test_clear() {
        let mut game = SudokuGame::new(Difficulty::Easy);

        // Fill some cells
        for row in 0..9 {
            for col in 0..9 {
                if game.get_cell(row, col).is_empty() {
                    game.set_cell(row, col, Some(1));
                    break;
                }
            }
        }

        game.clear();

        let playerfilled_count = (0..9)
            .flat_map(|row| (0..9).map(move |col| (row, col)))
            .filter(|&(row, col)| game.get_cell(row, col).get_state() == CellState::PlayerFilled)
            .count();

        assert_eq!(playerfilled_count, 0, "Player-filled Cell should not exist");
    }
}
