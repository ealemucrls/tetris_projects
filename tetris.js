class Tetris {

    constructor(imageX, imageY, template) {
        this.imageY = imageY;
        this.imageX = imageX;
        this.template = template;
        this.x = squareCountX / 2;
        this.y = 0;

        document.addEventListener('keydown', function(event) {
            switch(event.key){
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'ArrowRight': 
                    this.moveRight();
                    break;
                case 'ArrowDown':
                    this.moveDown();
                    break;
                case 'ArrowUp':
                    let rotateblock = rotate(this.template);
                    break;
            }
        });
    }
    


    checkBottom() {
        let block = 0;
        for (let i = 0; i < this.template.Length; i++) {
            for (let j = 0; j < this.template[i].Length; j++) {
                if (this.template[i][j] == block) {
                    if (this.y + 1 >= squareCountY) {
                        return false;
                    }
                    else {
                        if (i + 1 < this.template && template[i + 1][j] != block) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }

    checkLeft() {
        let block = 0;
        for (let i = 0; i < this.template.Length; i++) {
            for (let j = 0; j < this.template[i].Length; j++) {
                if (this.template[i][j] == block) {
                    if (this.x - 1 > squareCountX) {
                        return false;
                    }
                    else {
                        if (template[i][j - 1] != block) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
    
    checkRight() {
        let block = 0
        for (let i = 0; i < this.template.length; i++) {
            for (let j = 0; j < this.template.length; j++) {
                if (this.template[i][j] == 0) {
                    if (this.x + 1 > squareCountX) {
                        return false;
                    }
                    else {
                        if (template[i][j + 1] != block) {
                            return false;
                        }
                    }
                }

            }
        }
    }

    moveDown() {
        if (this.checkBottom()) {
            this.y++;
        }
    }

    moveLeft() {
        if (this.checkLeft()) {
            this.x--;
        }
    }

    moveRight() {
        if (this.checkRight()) {
            this.x++;
        }
    }
}

function rotate(matrix){
    const n = matrix.length;

    let rotatearray = Array(n);
    for(let i = 0; i < n ; i++){
        rotatearray[i] = Array(n);
    }

    for(i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            rotatearray[j][n - i - 1] = matrix[i][j];
        }
    }

    return rotatearray;
}

const pixelSize = 24;
const size = 40;
const speed = 5;
const frames = 24;
const canvas = document.getElementById("frame");
const image = document.getElementById("tiles");
console.log(canvas);
const nblock = document.getElementById("nextblock");
const ctx = canvas.getContext("2d");
const width = 12;
const height = 21; 
const squareCountX = canvas.width / size;
const squareCountY = canvas.height / size;

const tiles = [
    new Tetris(0, 120, [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
    ]),

    new Tetris(0, 120, [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
    ]),

    new Tetris(0, 90, [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
    ]),

    new Tetris(0, 60, [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
    ]),

    new Tetris(0, 60, [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
    ]),

    new Tetris(0, 30, [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ]),

    new Tetris(0, 20, [
        [1, 1],
        [1, 1],
    ])
]

let randomblock = () => {
    return Object.create(tiles[Math.floor(Math.random() * tiles.length)]);
}

let startGame;
let Feild;
let Finish;
let currentBlock = randomblock();
let nextBlock = randomblock();
let points = 0;
let isGameStart = true;
let color = "black";
let white = "white";

let game = () => {

    setInterval(draw, 1000 / frames);
    setInterval();
   
};

let drawRect = (x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
};

let drawBoard = () => {
    drawRect(0, 0, canvas.width, canvas.height, "black");
    for(let i = 0; i < squareCountX + 1; i++){
        drawRect(i * size, 0, 1, canvas.height, white);
    }
    for(let i = 0; i < squareCountY + 1; i++){
        drawRect(0, i * size, canvas.width, 1, white);
    }
};

let drawBlock = () => {
    for(let i = 0; i < currentBlock.template.length; i++){
        for(let j = 0; j < currentBlock.template[i].length; j++){
            if(currentBlock.template[i][j] == 1){
                drawRect((j + 1), (i + 1), size, size, 'red');
            }
        }
    }
}
let draw = () => {
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawBoard();
    randomblock();
    drawBlock();
    
    if(isGameStart){
    
        
    }
};

let update = () => {
    for(let i = 0; template.length; i++){
        for(let j = 0; template[i].length; j++){
            if(template[0][j] == 1){
                isGameStart = false;
            }
        }
    }
};

let clearLines = () => {
    let totalblocksinline = 0;
    for(let i = 0; i < squareCountY; i++){
        for(let j = 0; j < squareCountX; j++){
            if(Feild[i][j] == 1){
                totalblocksinline++;
            }
            if(totalblocksinline.equals(squareCountX)){
                for(let k = i; k > 0; k--){
                    Feild[i][k] == 0;
                    points += 250;
                }
            }
        }
    }
}

