use rand::seq::SliceRandom;
use rand::Rng;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy, PartialEq)]
pub enum CellState {
    Empty,
    Prefilled,
    PlayerFilled,
    Invalid,
}

#[wasm_bindgen]
#[derive(Clone, Copy)]
pub struct Cell {
    state: CellState,
    value: Option<u8>,
}

#[wasm_bindgen]
impl Cell {
    pub fn new(state: CellState, value: Option<u8>) -> Self {
        Cell { state, value }
    }

    pub fn get_state(&self) -> CellState {
        self.state
    }

    pub fn get_value(&self) -> Option<u8> {
        self.value
    }

    pub fn is_empty(&self) -> bool {
        self.value.is_none()
    }
}

#[wasm_bindgen]
pub struct SudokuGame {
    board: Vec<Vec<Cell>>,
}

#[wasm_bindgen]
impl SudokuGame {
    pub fn new(difficulty: u8) -> Self {
        let mut game = SudokuGame {
            board: vec![vec![Cell::new(CellState::Empty, None); 9]; 9],
        };
        game.create_puzzle(difficulty);
        game
    }

    pub fn get_cell(&self, row: usize, col: usize) -> Cell {
        self.board[row][col]
    }

    pub fn set_cell(&mut self, row: usize, col: usize, value: Option<u8>) -> bool {
        match self.board[row][col].state {
            CellState::Empty | CellState::PlayerFilled | CellState::Invalid => match value {
                None => {
                    self.board[row][col] = Cell::new(CellState::Empty, None);
                    true
                }
                Some(v) if v <= 9 => {
                    if self.is_valid_move(row, col, v) {
                        self.board[row][col] = Cell::new(CellState::PlayerFilled, Some(v));
                    } else {
                        self.board[row][col] = Cell::new(CellState::Invalid, Some(v));
                    }
                    true
                }
                _ => false,
            },
            CellState::Prefilled => false,
        }
    }

    pub fn is_solved(&self) -> bool {
        for row in 0..9 {
            for col in 0..9 {
                if self.board[row][col].is_empty()
                    || self.board[row][col].state == CellState::Invalid
                {
                    return false;
                }
            }
        }
        true
    }

    pub fn is_cell_prefilled(&self, row: usize, col: usize) -> bool {
        self.board[row][col].state == CellState::Prefilled
    }

    fn is_valid_move(&self, row: usize, col: usize, num: u8) -> bool {
        // Check row
        if self.board[row].iter().any(|cell| cell.value == Some(num)) {
            return false;
        }

        // Check column
        if (0..9).any(|i| self.board[i][col].value == Some(num)) {
            return false;
        }

        // Check 3x3 box
        let box_row = row - row % 3;
        let box_col = col - col % 3;
        for i in 0..3 {
            for j in 0..3 {
                if self.board[box_row + i][box_col + j].value == Some(num) {
                    return false;
                }
            }
        }

        true
    }

    fn create_puzzle(&mut self, difficulty: u8) {
        let mut rng = rand::thread_rng();
        let mut numbers: Vec<u8> = (1..=9).collect();
        numbers.shuffle(&mut rng);

        // Fill diagonal boxes
        for i in (0..9).step_by(3) {
            self.fill_box(i, i, &numbers);
        }

        // Fill the rest
        self.solve();

        // Remove numbers based on difficulty
        let cells_to_remove = match difficulty {
            1 => rng.gen_range(31..=41), // Very Easy
            2 => rng.gen_range(41..=51), // Easy
            3 => rng.gen_range(47..=52), // Medium
            4 => rng.gen_range(53..=56), // Hard
            5 => rng.gen_range(57..=59), // Very Hard
            _ => rng.gen_range(41..=51), // Default to Easy
        };

        let mut positions: Vec<(usize, usize)> =
            (0..9).flat_map(|i| (0..9).map(move |j| (i, j))).collect();
        positions.shuffle(&mut rng);

        for (row, col) in positions.iter().take(cells_to_remove) {
            self.board[*row][*col] = Cell::new(CellState::Empty, None);
        }
    }

    fn fill_box(&mut self, row: usize, col: usize, numbers: &[u8]) {
        let mut nums = numbers.to_vec();
        nums.shuffle(&mut rand::thread_rng());
        for i in 0..3 {
            for j in 0..3 {
                self.board[row + i][col + j] =
                    Cell::new(CellState::Prefilled, Some(nums[i * 3 + j]));
            }
        }
    }

    fn solve(&mut self) -> bool {
        for row in 0..9 {
            for col in 0..9 {
                if self.board[row][col].is_empty() {
                    for num in 1..=9 {
                        if self.is_valid_move(row, col, num) {
                            self.board[row][col] = Cell::new(CellState::Prefilled, Some(num));
                            if self.solve() {
                                return true;
                            }
                            self.board[row][col] = Cell::new(CellState::Empty, None);
                        }
                    }
                    return false;
                }
            }
        }
        true
    }
}
