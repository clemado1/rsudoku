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
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
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
    board: [[Cell; 9]; 9],
}

#[wasm_bindgen]
impl SudokuGame {
    pub fn new(difficulty: u8) -> Self {
        let board = create_initial_board();
        let mut game = SudokuGame { board };

        game.create(difficulty);
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
                    if is_valid(&self.board, row, col, v) {
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
        !self
            .board
            .iter()
            .flatten()
            .any(|cell| cell.is_empty() || cell.state == CellState::Invalid)
    }

    pub fn is_cell_prefilled(&self, row: usize, col: usize) -> bool {
        self.board[row][col].state == CellState::Prefilled
    }

    fn create(&mut self, difficulty: u8) {
        let mut rng = rand::thread_rng();

        // 난이도에 따라 Prefilled 칸 수 결정
        let hint_count_by_difficulty = match difficulty {
            1 => rng.gen_range(51..=60), // Very Easy
            2 => rng.gen_range(41..=50), // Easy
            3 => rng.gen_range(31..=40), // Medium
            4 => rng.gen_range(24..=30), // Hard
            5 => rng.gen_range(17..=23), // Very Hard
            _ => rng.gen_range(30..=40), // Default to Easy
        };

        let mut board_positions: Vec<(usize, usize)> =
            (0..9).flat_map(|r| (0..9).map(move |c| (r, c))).collect();
        board_positions.shuffle(&mut rng);

        // 칸을 제거하면서 유일해를 가지는지 검증
        for &(row, col) in &board_positions {
            if self.count_filled_cells() <= hint_count_by_difficulty {
                break;
            }

            let temp = self.board[row][col].value;
            self.board[row][col] = Cell::new(CellState::Empty, None);

            if !self.has_unique_solution() {
                self.board[row][col] = Cell::new(CellState::Prefilled, temp);
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

    fn has_unique_solution(&self) -> bool {
        let mut count_solutions = 0;
        let mut board_copy = self.board.clone();
        solve_recursively(&mut board_copy, &mut count_solutions);

        count_solutions == 1
    }
}

fn create_initial_board() -> [[Cell; 9]; 9] {
    let mut board = [[Cell::new(CellState::Empty, None); 9]; 9];

    // 대각선 방향 3x3 박스 생성
    for i in (0..9).step_by(3) {
        fill_box(&mut board, i, i);
    }

    // 나머지 생성
    fill_recursively(&mut board);

    board
}

fn is_valid(board: &[[Cell; 9]; 9], row: usize, col: usize, num: u8) -> bool {
    // Check row
    if board[row].iter().any(|cell| cell.value == Some(num)) {
        return false;
    }

    // Check column
    if (0..9).any(|i| board[i][col].value == Some(num)) {
        return false;
    }

    // Check 3x3 box
    let box_row = row - row % 3;
    let box_col = col - col % 3;
    for i in 0..3 {
        for j in 0..3 {
            if board[box_row + i][box_col + j].value == Some(num) {
                return false;
            }
        }
    }

    true
}

fn fill_box(board: &mut [[Cell; 9]; 9], row: usize, col: usize) {
    let mut rng = rand::thread_rng();
    let mut numbers: Vec<u8> = (1..=9).collect();
    numbers.shuffle(&mut rng);

    for i in 0..3 {
        for j in 0..3 {
            board[row + i][col + j] = Cell::new(CellState::Prefilled, Some(numbers[i * 3 + j]));
        }
    }
}

fn fill_recursively(board: &mut [[Cell; 9]; 9]) -> bool {
    if let Some((row, col)) = find_empty_cell(board) {
        // 1부터 9까지 숫자 시도
        for num in 1..=9 {
            if !is_valid(board, row, col, num) {
                continue;
            }

            board[row][col] = Cell::new(CellState::Prefilled, Some(num));
            // 재귀로 다음 Cell 호출
            if fill_recursively(board) {
                return true;
            }
            // 실패 시
            board[row][col] = Cell::new(CellState::Empty, None);
        }
        false
    } else {
        true
    }
}

fn find_empty_cell(board: &[[Cell; 9]; 9]) -> Option<(usize, usize)> {
    for row in 0..9 {
        for col in 0..9 {
            if board[row][col].is_empty() {
                return Some((row, col));
            }
        }
    }
    None
}

fn solve_recursively(board: &mut [[Cell; 9]; 9], count_solutions: &mut i32) -> bool {
    if let Some((row, col)) = find_empty_cell(board) {
        for num in 1..=9 {
            if !is_valid(board, row, col, num) {
                continue;
            }

            board[row][col] = Cell::new(CellState::PlayerFilled, Some(num));
            // 재귀로 다음 Cell 호출
            if solve_recursively(board, count_solutions) {
                *count_solutions += 1;
                if *count_solutions >= 2 {
                    board[row][col] = Cell::new(CellState::Empty, None);
                    return true;
                }
            }
            // 다음 풀이를 위해 빈칸으로 설정
            board[row][col] = Cell::new(CellState::Empty, None);
        }
        false
    } else {
        true
    }
}
