use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq)]
pub enum CellState {
    Empty,
    Prefilled,
    PlayerFilled,
    Invalid,
}

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
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

    pub fn clear(&mut self) {
        self.state = CellState::Empty;
        self.value = None;
    }

    pub fn set(&mut self, state: CellState, value: Option<u8>) {
        self.state = state;
        self.value = value;
    }

    pub fn is_empty(&self) -> bool {
        self.value.is_none()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_cell_new() {
        let cell = Cell::new(CellState::Empty, None);
        assert_eq!(cell.get_state(), CellState::Empty);
        assert_eq!(cell.get_value(), None);

        let cell = Cell::new(CellState::Prefilled, Some(5));
        assert_eq!(cell.get_state(), CellState::Prefilled);
        assert_eq!(cell.get_value(), Some(5));
    }

    #[test]
    fn test_cell_clear() {
        let mut cell = Cell::new(CellState::PlayerFilled, Some(3));
        cell.clear();
        assert_eq!(cell.get_state(), CellState::Empty);
        assert_eq!(cell.get_value(), None);
    }

    #[test]
    fn test_cell_set() {
        let mut cell = Cell::new(CellState::Empty, None);
        cell.set(CellState::PlayerFilled, Some(7));
        assert_eq!(cell.get_state(), CellState::PlayerFilled);
        assert_eq!(cell.get_value(), Some(7));
    }

    #[test]
    fn test_cell_is_empty() {
        let cell = Cell::new(CellState::Empty, None);
        assert!(cell.is_empty());

        let cell = Cell::new(CellState::Prefilled, Some(4));
        assert!(!cell.is_empty());
    }
}
