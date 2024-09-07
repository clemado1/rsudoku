use crate::cell::{Cell, CellState};
use rand::seq::SliceRandom;

pub fn generate_sudoku() -> [[Cell; 9]; 9] {
    let mut board = [[Cell::new(CellState::Empty, None); 9]; 9];

    // 대각선 방향 3x3 박스 생성
    for i in (0..9).step_by(3) {
        fill_box(&mut board, i, i);
    }

    // 나머지 생성
    fill_recursively(&mut board);

    board
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

pub fn is_valid(board: &[[Cell; 9]; 9], row: usize, col: usize, num: u8) -> bool {
    // Check row
    if board[row].iter().any(|cell| cell.get_value() == Some(num)) {
        return false;
    }

    // Check column
    if (0..9).any(|i| board[i][col].get_value() == Some(num)) {
        return false;
    }

    // Check 3x3 box
    let box_row = row - row % 3;
    let box_col = col - col % 3;
    for i in 0..3 {
        for j in 0..3 {
            if board[box_row + i][box_col + j].get_value() == Some(num) {
                return false;
            }
        }
    }

    true
}

pub fn solve(board: &mut [[Cell; 9]; 9], count_solutions: &mut i32) -> bool {
    if let Some((row, col)) = find_empty_cell(board) {
        for num in 1..=9 {
            if !is_valid(board, row, col, num) {
                continue;
            }

            board[row][col] = Cell::new(CellState::PlayerFilled, Some(num));
            // 재귀로 다음 Cell 호출
            if solve(board, count_solutions) {
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

#[cfg(test)]
mod tests {
    use super::*;

    // 유일해를 가지는 스도쿠
    const UNIQUE_SUDOKU: [[u8; 9]; 9] = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];

    // 여러 해를 가지는 스도쿠
    const MULTI_SOLUTION_SUDOKU: [[u8; 9]; 9] = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 0, 0],
    ];

    // 해가 없는 스도쿠
    const NO_SOLUTION_SUDOKU: [[u8; 9]; 9] = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 5, 0, 0],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];

    fn create_cell_board(numbers: [[u8; 9]; 9]) -> [[Cell; 9]; 9] {
        let mut board = [[Cell::new(CellState::Empty, None); 9]; 9];
        for (i, row) in numbers.iter().enumerate() {
            for (j, &num) in row.iter().enumerate() {
                if num > 0 {
                    board[i][j] = Cell::new(CellState::Prefilled, Some(num));
                }
            }
        }
        board
    }

    #[test]
    fn test_generate_sudoku() {
        let board = generate_sudoku();
        assert_eq!(find_empty_cell(&board), None);
    }

    #[test]
    fn test_is_valid() {
        let board = create_cell_board(UNIQUE_SUDOKU);

        // 유효한 값 입력
        assert!(is_valid(&board, 0, 2, 4));
        assert!(is_valid(&board, 1, 1, 2));

        // 유효하지 않은 값 입력
        // 같은 행 중복 확인
        assert!(!is_valid(&board, 0, 0, 5));
        // 같은 열 중복 확인
        assert!(!is_valid(&board, 0, 1, 3));
        // 같은 박스 중복 확인
        assert!(!is_valid(&board, 0, 3, 5));
    }

    #[test]
    fn test_solution() {
        let mut count_solutions = 0;
        let mut board = create_cell_board(UNIQUE_SUDOKU);

        solve(&mut board, &mut count_solutions);

        assert_eq!(count_solutions, 1);
    }

    #[test]
    fn test_multi_solution() {
        let mut count_solutions = 0;
        let mut board = create_cell_board(MULTI_SOLUTION_SUDOKU);

        solve(&mut board, &mut count_solutions);

        assert_eq!(count_solutions, 2);
    }

    #[test]
    fn test_no_solution() {
        let mut count_solutions = 0;
        let mut board = create_cell_board(NO_SOLUTION_SUDOKU);

        solve(&mut board, &mut count_solutions);

        assert_eq!(count_solutions, 0);
    }

    #[test]
    fn test_find_empty_cell() {
        let board = create_cell_board(UNIQUE_SUDOKU);
        assert_eq!(find_empty_cell(&board), Some((0, 2)));

        // 임의의 값 모두 입력
        let mut filled_board = create_cell_board(UNIQUE_SUDOKU);
        for row in 0..9 {
            for col in 0..9 {
                if filled_board[row][col].is_empty() {
                    filled_board[row][col] = Cell::new(CellState::PlayerFilled, Some(1));
                }
            }
        }
        // 빈 칸이 없을 때
        assert_eq!(find_empty_cell(&filled_board), None);
    }
}
