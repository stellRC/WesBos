const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

const btnTopLeft = document.getElementById('style__top-left')
const btnBottomLeft = document.getElementById('style__bottom-left')
const btnTopRight = document.getElementById('style__top-right')
const btnBottomRight = document.getElementById('style__bottom-right')
const btnBrushLeft = document.getElementById('brush-left')
const btnBrushRight = document.getElementById('brush-right')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';

// different options on MDN
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// global composite operator; blend colors as draw
// ctx.globalCompositeOperation = 'source-over';

function newStyleOne() {
    ctx.globalCompositeOperation = 'source-over';
}

function newStyleTwo() {
    ctx.globalCompositeOperation = 'destination-out';
}

function newStyleThree() {
    ctx.globalCompositeOperation = 'color-dodge';
}

function newStyleFour() {
    ctx.globalCompositeOperation = 'multiply';
}

// function brushLeft() {
//     ctx.lineJoin = 'miter';
// }

// function brushRight() {
//     ctx.lineJoin = 'square';
// }
// only draws when cursor is down rather than just moving mouse
let isDrawing = false;


// Need starting and ending points for lines 
let lastX = 0;
let lastY = 0;
let hue = 0;
// building up
let direction = true;

function draw(e) {
    if (!isDrawing) return; 
    // stops function from running when they are not mouse down

    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // Start From
    ctx.moveTo(lastX, lastY);
    // Move to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    // increments hue, leads to changing color
    // reset hue color
    if(hue >= 360) {
        hue = 0;
    }
    // flip direction of line width depending on if greater than 100 or less than 1
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        // flip direction
        direction = !direction;
    }
    // increment line width depending on direction of line width
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
   
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // updates last x and last y so not one continuous line 

})

// btnBrushRight.addEventListener('click', brushRight)
// btnBrushLeft.addEventListener('click', brushLeft)
btnTopRight.addEventListener('click', newStyleThree)
btnBottomRight.addEventListener('click', newStyleFour)
btnBottomLeft.addEventListener('click', newStyleTwo)
btnTopLeft.addEventListener('click', newStyleOne)
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);