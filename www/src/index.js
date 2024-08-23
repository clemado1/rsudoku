import './styles.css';
import init, { SudokuGame } from 'rsudoku';

const SIZE = 2000;
const MARGIN = 10;
const AREA = SIZE - 2 * MARGIN;
const CELL = AREA / 9;

class SudokuApp {
    constructor() {
        this.game = null;
        this.level = null;
        this.canvas = null;
        this.ctx = null;
    }

    async init() {
        await init();
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', this.pickLevel.bind(this));
        });

        document.getElementById('check-solution').addEventListener('click', this.check.bind(this));
        document.getElementById('new-game').addEventListener('click', this.newGame.bind(this));
    }

    pickLevel(e) {
        this.level = parseInt(e.target.dataset.level);
        this.updateButtons(e.target);
        setTimeout(() => this.start(), 300);
    }

    updateButtons(btn) {
        document.querySelectorAll('.difficulty-btn').forEach(b => {
            b.classList.add('inactive');
            b.classList.remove('active');
        });
        btn.classList.remove('inactive');
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
        this.canvas.addEventListener('click', this.onInput.bind(this));
        this.canvas.addEventListener('touchstart', this.onInput.bind(this));
    }

    onInput(e) {
        e.preventDefault();
        const { row, col } = this.getCell(e);
        if (row >= 0 && row < 9 && col >= 0 && col < 9) {
            this.showPad(row, col, e);
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

    showPad(row, col, e) {
        const pad = document.getElementById('number-pad');
        const rect = this.canvas.getBoundingClientRect();
        const { left, top } = this.padPos(row, col, rect);

        pad.style.top = `${top}px`;
        pad.style.left = `${left}px`;
        pad.classList.remove('inactive');

        this.setupPad(row, col, pad);
    }

    padPos(row, col, rect) {
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const padW = 140;
        const padH = 140;

        let left = (MARGIN + col * CELL) / scaleX;
        let top = (MARGIN + (row + 1) * CELL) / scaleY;

        if (left + padW > rect.width) left = rect.width - padW;
        if (top + padH > rect.height) top = (MARGIN + row * CELL) / scaleY - padH;

        return { left, top };
    }

    setupPad(row, col, pad) {
        const btns = pad.querySelectorAll('button');
        btns.forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                this.setCell(row, col, btn);
                this.hidePad(pad);
            };
        });

        setTimeout(() => {
            document.addEventListener('click', this.hidePad.bind(this, pad));
        }, 0);
    }

    hidePad(pad, e) {
        if (e && (pad.contains(e.target) || e.target.closest('#sudoku-canvas'))) return;
        pad.classList.add('inactive');
        document.removeEventListener('click', this.hidePad);
    }

    setCell(row, col, btn) {
        const val = parseInt(btn.getAttribute('data-value'));
        this.game.set_cell(row, col, val);
        this.draw();
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
                const val = this.game.get_cell(row, col);
                if (val !== 0) this.drawNum(row, col, val);
            }
        }
    }

    drawNum(row, col, val) {
        const pad = 2;
        this.ctx.fillStyle = '#f9fafb';
        this.ctx.fillRect(
            col * CELL + pad,
            row * CELL + pad,
            CELL - 2 * pad,
            CELL - 2 * pad
        );

        this.ctx.fillStyle = '#000';
        this.ctx.fillText(val.toString(), col * CELL + CELL / 2, row * CELL + CELL / 2);
    }

    drawGrid() {
        this.drawInner();
        this.drawOuter();
    }

    drawInner() {
        this.ctx.strokeStyle = '#1f2937';
        this.ctx.lineWidth = 2;

        for (let i = 0; i <= 9; i++) {
            const pos = MARGIN + i * (AREA / 9);
            this.line(pos, MARGIN, pos, SIZE - MARGIN);
            this.line(MARGIN, pos, SIZE - MARGIN, pos);
        }
    }

    drawOuter() {
        this.ctx.lineWidth = 8;

        for (let i = 0; i <= 3; i++) {
            const pos = MARGIN + i * (AREA / 3);
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

    check() {
        if (this.game.is_solved()) {
            alert('정답입니다! 🎉');
        } else {
            alert('틀렸어요😿 다시 시도해보세요!');
        }
    }

    newGame() {
        setTimeout(() => this.start(), 300);
    }
}

const app = new SudokuApp();
app.init();