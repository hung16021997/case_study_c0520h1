let thamsoThanh = {
    marginTop: 30,
    width: 70,
    height: 12,
    speed: 25,
};
let ThanhDoBall = function () {
    this.w = thamsoThanh.width;
    this.h = thamsoThanh.height;
    this.x = canvas.width/3-this.w/2;
    this.y = canvas.height - this.h - thamsoThanh.marginTop;
    this.speed = thamsoThanh.speed;
    this.drawThanh = function() { //vẽ thanh đỡ
        context.beginPath();
        context.rect(this.x, this.y, this.w, this.h);
        context.fillStyle = 'gray';
        context.fill();
        context.closePath();
    };
    this.moveLeft = function () { //thanh di chuyển sang trái
        this.x -= this.speed;
        if (this.x<0) {
            this.x = 0;
        }
    };
    this.moveRight = function () { //thanh di chuyen sang phải
        this.x += this.speed;
        if (this.x> canvas.width - this.w) {
            this.x= canvas.width - this.w;
        }
    };
    this.doBall = function (ball) {
        if (ball.x + ball.radius >= this.x && ball.x + ball.radius <= this.x + this.w
            && ball.y + ball.radius >= this.y && ball.y - ball.radius <= this.y + this.h) {
            ball.dy = -ball.dy;
        }
    }
};

