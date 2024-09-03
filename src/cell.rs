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
