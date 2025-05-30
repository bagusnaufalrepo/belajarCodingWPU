// Menyimpan Canvas

const mycanvas = document.querySelector('#mycanvas');

/// atur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// tentukkan context

const c = mycanvas.getContext('2d');

// Manipulasi Canvas

// Membyat Rectangle
// c.fillStyle = 'pink';
// c.strokeStyle = '#999';
// c.lineWidth = '5';

// c.rect(50, 50, 300, 300);
// c.fill();
// c.stroke();

// Membuat lingkaran / Circle / Arc
let x = 300;
let y = 200;
let speedx = 5;
let speedy = 5;
let radius = 150;
function draw() {
window.requestAnimationFrame(draw);
c.clearRect(0, 0, innerWidth, innerHeight);
c.fillStyle = 'lightgreen';
c.beginPath();
c.arc(x, y, radius, 0, 2 * Math.PI);
c.fill();
c.stroke();

if ( x + radius > innerWidth || x - radius < 0 ) {
    speedx =- speedx;
}

if ( y + radius > innerHeight || y - radius < 0 ) {
    speedy =- speedy;
}
x+=speedx;
y+=speedy;
}

draw();

// Membuat Path (Segitiga)
// c.fillStyle = 'lightblue';
// c.beginPath();
// c.moveTo(900, 50);
// c.lineTo(1050, 350);
// c.lineTo(750, 350);
// c.closePath();
// c.fill();
// c.stroke();