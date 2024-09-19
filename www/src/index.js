import './styles.css';
import init, { SudokuGame, CellState, Difficulty } from 'rsudoku';

const SIZE = 2000;
const MARGIN = 20;
const AREA = SIZE - 2 * MARGIN;
const CELL_SIZE = AREA / 9;

class SudokuApp {
    constructor() {
        this.game = null;
        this.difficulty = Difficulty.Easy;
        this.canvas = null;
        this.ctx = null;
        this.selectedCell = null;
        this.startTime = null;
        this.timerInterval = null;
    }

    async init() {
        await init();
        this.bindEvents();
        this.startInitialGame();
    }

    bindEvents() {
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', this.pickDifficulty.bind(this));
        });

        document.getElementById('new-game').addEventListener('click', this.newGame.bind(this));
        document.getElementById('clear-game').addEventListener('click', this.clearGame.bind(this));
        document.addEventListener('keydown', this.handleKeyPress.bind(this));

        document.querySelectorAll('.number-btn').forEach(btn => {
            btn.addEventListener('click', this.handleNumberPadClick.bind(this));
        });
    }

    startInitialGame() {
        const activeButton = document.querySelector('.difficulty-btn.active');
        if (activeButton) {
            this.difficulty = parseInt(activeButton.dataset.level);
            this.start();
        } else {
            this.difficulty = Difficulty.Easy;
            this.start();
            this.updateButtons(document.querySelector('.difficulty-btn[data-level="3"]'));
        }
    }

    pickDifficulty(e) {
        this.difficulty = parseInt(e.target.dataset.level);
        this.updateButtons(e.target);
        setTimeout(() => this.start(), 300);
    }

    updateButtons(btn) {
        document.querySelectorAll('.difficulty-btn').forEach(b => {
            b.classList.remove('active');
            b.classList.add('inactive');
        });
        btn.classList.remove('inactive');
        btn.classList.add('active');
    }

    start() {
        this.game = SudokuGame.new(this.difficulty);
        this.setup();
        this.startTimer();
    }

    setup() {
        this.canvas = document.getElementById('sudoku-canvas');
        this.ctx = this.canvas.getContext('2d');

        this.draw();
        this.listenBoard();
    }

    listenBoard() {
        this.canvas.addEventListener('click', this.onCellSelect.bind(this));
        this.canvas.addEventListener('touchstart', this.onCellSelect.bind(this));
    }

    onCellSelect(e) {
        e.preventDefault();
        const { row, col } = this.getCell(e);
        if (row >= 0 && row < 9 && col >= 0 && col < 9) {
            this.selectedCell = { row, col };
            this.draw();
        }
    }

    getCell(e) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;

        let x, y;
        if (e.type === 'touchstart') {
            x = (e.touches[0].clientX - rect.left) * scaleX;
            y = (e.touches[0].clientY - rect.top) * scaleY;
        } else {
            x = (e.clientX - rect.left) * scaleX;
            y = (e.clientY - rect.top) * scaleY;
        }

        const col = Math.floor((x - MARGIN) / CELL_SIZE);
        const row = Math.floor((y - MARGIN) / CELL_SIZE);

        return { row, col };
    }

    handleKeyPress(e) {
        if (this.selectedCell) {
            if (e.key >= '1' && e.key <= '9') {
                const value = parseInt(e.key);
                this.setSelectedCellValue(value);
            } else if (e.key === 'Backspace' || e.key === 'Delete') {
                this.setSelectedCellValue(null);
            }
        }
    }

    handleNumberPadClick(e) {
        if (this.selectedCell) {
            const value = e.target.dataset.value;

            if (value === 'clear') {
                this.clearSelectedCell();
            } else {
                this.setSelectedCellValue(parseInt(value));
            }
        }
    }

    clearSelectedCell() {
        const { row, col } = this.selectedCell;
        this.game.clear_cell(row, col);
        this.draw();
    }

    setSelectedCellValue(value) {
        const { row, col } = this.selectedCell;
        if (this.game.set_cell(row, col, value)) {
            this.draw();
            if (this.game.is_solved()) {
                this.stopTimer();
                const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
                setTimeout(() => {
                    alert(`축하합니다! ${this.formatTime(elapsedTime)}만에 스도쿠를 완성했습니다! 🎉`);
                    this.newGame();
                }, 100);
            }
        }
    }

    draw() {
        this.clear();
        this.fillNums();
        this.drawGrid();
    }

    clear() {
        this.ctx.clearRect(0, 0, SIZE, SIZE);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, SIZE, SIZE);
    }

    fillNums() {
        this.ctx.font = '120px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cell = this.game.get_cell(row, col);
                this.drawNum(row, col, cell);
            }
        }
    }

    drawNum(row, col, cell) {
        const x = MARGIN + col * CELL_SIZE;
        const y = MARGIN + row * CELL_SIZE;

        const state = cell.get_state();
        const isSelected = this.selectedCell && this.selectedCell.row === row && this.selectedCell.col === col;

        // 셀 배경 그리기
        if (state === CellState.Prefilled) {
            this.ctx.fillStyle = '#f3f4f6';
        } else if (isSelected) {
            this.ctx.fillStyle = '#eff6ff';
        } else {
            this.ctx.fillStyle = '#fff';
        }
        this.ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);

        // 숫자 그리기
        if (state === CellState.Invalid) {
            this.ctx.fillStyle = '#ef4444';
        } else if (state === CellState.PlayerFilled) {
            this.ctx.fillStyle = '#3b82f6';
        } else {
            this.ctx.fillStyle = '#000';
        }

        const value = cell.get_value();
        if (value) {
            this.ctx.fillText(value.toString(), x + CELL_SIZE / 2, y + CELL_SIZE / 2);
        }
    }

    drawGrid() {
        this.drawInner();
        this.drawOuter();
    }

    drawInner() {
        this.ctx.strokeStyle = '#1f2937';
        this.ctx.lineWidth = 2;

        for (let i = 0; i <= 9; i++) {
            const pos = MARGIN + i * CELL_SIZE;
            this.line(pos, MARGIN, pos, SIZE - MARGIN);
            this.line(MARGIN, pos, SIZE - MARGIN, pos);
        }
    }

    drawOuter() {
        this.ctx.lineWidth = 8;

        for (let i = 0; i <= 3; i++) {
            const pos = MARGIN + i * (CELL_SIZE * 3);
            this.line(pos, MARGIN, pos, SIZE - MARGIN);
            this.line(MARGIN, pos, SIZE - MARGIN, pos);
        }

        this.ctx.strokeRect(MARGIN, MARGIN, AREA, AREA);
    }

    line(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    newGame() {
        this.selectedCell = null;
        this.stopTimer();
        this.start();
    }

    clearGame() {
        this.game.clear();
        this.draw();
    }

    startTimer() {
        this.startTime = Date.now();
        this.updateTimer();
        this.timerInterval = setInterval(() => this.updateTimer(), 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateTimer() {
        const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = this.formatTime(elapsedTime);
        }
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

const app = new SudokuApp();
app.init();