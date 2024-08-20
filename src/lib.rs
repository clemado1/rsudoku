use rand::prelude::SliceRandom;
use rand::Rng;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct SudokuGame {
    board: [[u8; 9]; 9],
    solution: [[u8; 9]; 9],
}

#[wasm_bindgen]
impl SudokuGame {
    pub fn new(difficulty: u8) -> Self {
        let mut game = SudokuGame {
            board: [[0; 9]; 9],
            solution: [[0; 9]; 9],
        };
        game.generate_solution();
        game.create_puzzle(difficulty);
        game
    }

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
                    self.solution = [[0; 9]; 9];
                    self.generate_solution();
                    return;
                }
            }
        }
    }

    fn create_puzzle(&mut self, difficulty: u8) {
        self.board = self.solution;
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
            self.board[row][col] = 0;
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

    pub fn get_cell(&self, row: usize, col: usize) -> u8 {
        self.board[row][col]
    }

    pub fn set_cell(&mut self, row: usize, col: usize, value: u8) -> bool {
        if self.board[row][col] == 0 && value >= 1 && value <= 9 {
            self.board[row][col] = value;
            true
        } else {
            false
        }
    }

    pub fn is_solved(&self) -> bool {
        self.board == self.solution
    }
}
