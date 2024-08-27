import './styles.css';
import init, { SudokuGame } from 'rsudoku';

const SIZE = 2000;
const MARGIN = 10;
const AREA = SIZE - 2 * MARGIN;
const CELL = AREA / 9;

const CellState = {
    Empty: 0,
    Prefilled: 1,
    PlayerFilled: 2,
    Invalid: 3
};

Object.freeze(CellState);

class SudokuApp {
    constructor() {
        this.game = null;
        this.level = null;
        this.canvas = null;
        this.ctx = null;
        this.selectedCell = null;
    }

    async init() {
        await init({});
        this.bindEvents();
        this.startInitialGame();
    }

    bindEvents() {
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', this.pickLevel.bind(this));
        });

        document.getElementById('new-game').addEventListener('click', this.newGame.bind(this));
        document.addEventListener('keydown', this.handleKeyPress.bind(this));

        // 숫자 패드 이벤트 리스너 추가
        document.querySelectorAll('.number-btn').forEach(btn => {
            btn.addEventListener('click', this.handleNumberPadClick.bind(this));
        });
    }

    startInitialGame() {
        const activeButton = document.querySelector('.difficulty-btn.active');
        if (activeButton) {
            this.level = parseInt(activeButton.dataset.level);
            this.start();
        } else {
            // 활성화된 버튼이 없으면 기본값
            this.level = 2;
            this.start();
            this.updateButtons(document.querySelector('.difficulty-btn[data-level="2"]'));
        }
    }

    pickLevel(e) {
        this.level = parseInt(e.target.dataset.level);
        this.updateButtons(e.target);
        setTimeout(() => this.start(), 300);
    }

    updateButtons(btn) {
        document.querySelectorAll('.difficulty-btn').forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
    }

    start() {
        this.game = SudokuGame.new(this.level);
        this.setup();
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

        const col = Math.floor((x - MARGIN) / CELL);
        const row = Math.floor((y - MARGIN) / CELL);

        return { row, col };
    }

    handleKeyPress(e) {
        if (this.selectedCell) {
            const { row, col } = this.selectedCell;
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
                this.setSelectedCellValue(null);
            } else {
                this.setSelectedCellValue(parseInt(value));
            }
        }
    }

    setSelectedCellValue(value) {
        const { row, col } = this.selectedCell;
        if (this.game.set_cell(row, col, value)) {
            this.draw();
            if (this.game.is_solved()) {
                setTimeout(() => {
                    alert('축하합니다! 스도쿠를 완성했습니다! 🎉');
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
        const x = MARGIN + col * CELL;
        const y = MARGIN + row * CELL;

        const isPrefilled = cell.get_state() === CellState.Prefilled;
        const isPlayerFilled = cell.get_state() === CellState.PlayerFilled;
        const isInvalid = cell.get_state() === CellState.Invalid;
        const isSelected = this.selectedCell && this.selectedCell.row === row && this.selectedCell.col === col;

        // 셀 배경 그리기
        if (isPrefilled) {
            this.ctx.fillStyle = '#f3f4f6';
        } else if (isSelected) {
            this.ctx.fillStyle = '#eff6ff';
        } else {
            this.ctx.fillStyle = '#fff';
        }
        this.ctx.fillRect(x, y, CELL, CELL);

        // 숫자 그리기
        if (isInvalid) {
            this.ctx.fillStyle = '#ef4444';
        } else if (isPlayerFilled) {
            this.ctx.fillStyle = '#3b82f6';
        } else {
            this.ctx.fillStyle = '#000';
        }

        const value = cell.get_value();
        if (value !== undefined) {
            this.ctx.fillText(value.toString(), x + CELL / 2, y + CELL / 2);
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
            const pos = MARGIN + i * CELL;
            this.line(pos, MARGIN, pos, SIZE - MARGIN);
            this.line(MARGIN, pos, SIZE - MARGIN, pos);
        }
    }

    drawOuter() {
        this.ctx.lineWidth = 8;

        for (let i = 0; i <= 3; i++) {
            const pos = MARGIN + i * (CELL * 3);
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
        this.start();
    }
}

const app = new SudokuApp();
app.init();