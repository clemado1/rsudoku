use rand::seq::SliceRandom;
use rand::Rng;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy, PartialEq)]
pub enum CellState {
    Empty,
    Prefilled,
    PlayerFilled,
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
    solution: Vec<Vec<u8>>,
}

#[wasm_bindgen]
impl SudokuGame {
    pub fn new(difficulty: u8) -> Self {
        let mut game = SudokuGame {
            board: vec![vec![Cell::new(CellState::Empty, None); 9]; 9],
            solution: vec![vec![0; 9]; 9],
        };
        game.generate_solution();
        game.create_puzzle(difficulty);
        game
    }

    pub fn get_cell(&self, row: usize, col: usize) -> Cell {
        self.board[row][col]
    }

    pub fn set_cell(&mut self, row: usize, col: usize, value: Option<u8>) -> bool {
        match self.board[row][col].state {
            CellState::Empty | CellState::PlayerFilled => match value {
                None => {
                    self.board[row][col] = Cell::new(CellState::Empty, None);
                    true
                }
                Some(v) if v <= 9 => {
                    self.board[row][col] = Cell::new(CellState::PlayerFilled, Some(v));
                    true
                }
                _ => false,
            },
            CellState::Prefilled => false,
        }
    }

    pub fn is_solved(&self) -> bool {
        self.board.iter().enumerate().all(|(i, row)| {
            row.iter()
                .enumerate()
                .all(|(j, cell)| cell.value.map_or(false, |v| v == self.solution[i][j]))
        })
    }

    pub fn is_cell_prefilled(&self, row: usize, col: usize) -> bool {
        self.board[row][col].state == CellState::Prefilled
    }

    pub fn check_cell(&self, row: usize, col: usize) -> bool {
        self.board[row][col]
            .value
            .map_or(false, |v| v == self.solution[row][col])
    }

    pub fn get_hint(&self, row: usize, col: usize) -> Option<u8> {
        if self.board[row][col].state == CellState::Empty {
            Some(self.solution[row][col])
        } else {
            None
        }
    }
}

// Private methods
impl SudokuGame {
    fn generate_solution(&mut self) {
        let mut rng = rand::thread_rng();

        for i in 0..9 {
            for j in 0..9 {
                let mut options = vec![1, 2, 3, 4, 5, 6, 7, 8, 9];
                options.shuffle(&mut rng);

                for &num in &options {
                    if self.is_valid(i, j, num) {
                        self.solution[i][j] = num;
                        break;
                    }
                }

                if self.solution[i][j] == 0 {
                    self.solution = vec![vec![0; 9]; 9];
                    self.generate_solution();
                    return;
                }
            }
        }
    }

    fn create_puzzle(&mut self, difficulty: u8) {
        self.board = self
            .solution
            .iter()
            .map(|row| {
                row.iter()
                    .map(|&val| Cell::new(CellState::Prefilled, Some(val)))
                    .collect()
            })
            .collect();

        let mut rng = rand::thread_rng();
        let cells_to_remove = match difficulty {
            1 => 20 + rng.gen_range(0..=10),
            2 => 30 + rng.gen_range(0..=10),
            3 => 40 + rng.gen_range(0..=10),
            4 => 50 + rng.gen_range(0..=10),
            5 => 60 + rng.gen_range(0..=10),
            _ => 40 + rng.gen_range(0..=20),
        };

        for _ in 0..cells_to_remove {
            let row = rng.gen_range(0..9);
            let col = rng.gen_range(0..9);
            self.board[row][col] = Cell::new(CellState::Empty, None);
        }
    }

    fn is_valid(&self, row: usize, col: usize, num: u8) -> bool {
        // Check row
        if self.solution[row].contains(&num) {
            return false;
        }

        // Check column
        if (0..9).any(|i| self.solution[i][col] == num) {
            return false;
        }

        // Check 3x3 box
        let box_row = row - row % 3;
        let box_col = col - col % 3;
        for i in 0..3 {
            for j in 0..3 {
                if self.solution[box_row + i][box_col + j] == num {
                    return false;
                }
            }
        }

        true
    }
}
