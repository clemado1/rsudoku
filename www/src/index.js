import './styles.css';
import init, { SudokuGame } from 'rsudoku';

async function run() {
    await init();
    const game = SudokuGame.new();
    const grid = document.getElementById('sudoku-grid');

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.className = 'sudoku-cell';
            const value = game.get_cell(i, j);
            if (value === 0) {
                const input = document.createElement('input');
                input.type = 'text';
                input.pattern = '[1-9]';
                input.addEventListener('change', (e) => {
                    const value = parseInt(e.target.value);
                    if (value >= 1 && value <= 9) {
                        game.set_cell(i, j, value);
                    }
                });
                cell.appendChild(input);
            } else {
                cell.textContent = value;
            }
            grid.appendChild(cell);
        }
    }

    document.getElementById('check-solution').addEventListener('click', () => {
        if (game.is_solved()) {
            alert('정답입니다! 🎉');
        } else {
            alert('틀렸어요😿 다시 시도해보세요!');
        }
    });
}

run();
