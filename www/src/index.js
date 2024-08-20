import './styles.css';
import init, { SudokuGame } from 'rsudoku';

let game;
let difficulty;

async function run() {
    await init();
    renderDifficultySelector();
}

function renderDifficultySelector() {

    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            difficulty = parseInt(e.target.dataset.level);

            // Remove active class from all buttons
            document.querySelectorAll('.difficulty-btn').forEach(b => {
                b.classList.add('inactive');
                b.classList.remove('active');
            });

            // Add active class to clicked button
            e.target.classList.remove('inactive');
            e.target.classList.add('active');

            setTimeout(() => startGame(difficulty), 300);
        });
    });
}

function startGame(difficulty) {
    game = SudokuGame.new(difficulty);
    renderGame();
}

function renderGame() {
    const canvas = document.getElementById('sudoku-canvas');

    redrawCanvas();

    canvas.addEventListener('click', handleCanvasClick);

    document.getElementById('check-solution').addEventListener('click', () => {
        if (game.is_solved()) {
            alert('정답입니다! 🎉');
        } else {
            alert('틀렸어요😿 다시 시도해보세요!');
        }
    });

    document.getElementById('new-game').addEventListener('click', () => {
        setTimeout(() => startGame(difficulty), 300);
    });
}

run();

function drawGrid(ctx) {
    const gridSize = 2000;
    const margin = 10;  // 여백 추가
    const actualSize = gridSize - 2 * margin;

    // 3x3 박스 내부 선
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 2;

    for (let i = 0; i <= 9; i++) {
        const position = margin + i * (actualSize / 9);

        // 세로선
        ctx.beginPath();
        ctx.moveTo(position, margin);
        ctx.lineTo(position, gridSize - margin);
        ctx.stroke();

        // 가로선
        ctx.beginPath();
        ctx.moveTo(margin, position);
        ctx.lineTo(gridSize - margin, position);
        ctx.stroke();
    }

    // 3x3 박스 구분선
    ctx.lineWidth = 8;

    for (let i = 0; i <= 3; i++) {
        const position = margin + i * (actualSize / 3);

        // 세로 굵은 선
        ctx.beginPath();
        ctx.moveTo(position, margin);
        ctx.lineTo(position, gridSize - margin);
        ctx.stroke();

        // 가로 굵은 선
        ctx.beginPath();
        ctx.moveTo(margin, position);
        ctx.lineTo(gridSize - margin, position);
        ctx.stroke();
    }

    // 바깥 테두리
    ctx.lineWidth = 8;
    ctx.strokeRect(margin, margin, actualSize, actualSize);
}

function fillNumbers(ctx) {
    const cellSize = 2000 / 9;
    const padding = 2; // 셀 테두리와의 간격

    ctx.font = '120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = game.get_cell(row, col);
            if (value !== 0) {
                ctx.fillStyle = '#f9fafb';
                ctx.fillRect(
                    col * cellSize + padding,
                    row * cellSize + padding,
                    cellSize - 2 * padding,
                    cellSize - 2 * padding
                );

                // Draw the number
                ctx.fillStyle = '#000';
                ctx.fillText(value.toString(), col * cellSize + cellSize / 2, row * cellSize + cellSize / 2);
            }
        }
    }
}

function handleCanvasClick(event) {
    const canvas = event.target;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    const margin = 10;
    const actualSize = 2000 - 2 * margin;
    const cellSize = actualSize / 9;

    const col = Math.floor((x - margin) / cellSize);
    const row = Math.floor((y - margin) / cellSize);

    if (row >= 0 && row < 9 && col >= 0 && col < 9 && game.get_cell(row, col) === 0) {
        const value = prompt('Enter a number (1-9):');
        if (value && value >= 1 && value <= 9) {
            game.set_cell(row, col, parseInt(value));
            redrawCanvas();
        }
    }
}

function redrawCanvas() {
    const canvas = document.getElementById('sudoku-canvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, 2000, 2000);

    // Fill the background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 2000, 2000);

    // Draw numbers
    fillNumbers(ctx);

    // Draw grid
    drawGrid(ctx);
}