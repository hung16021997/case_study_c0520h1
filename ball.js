//tạo lớp quả bóng
let Ball = function (radius,dx,dy) {
    this.x = canvas.width/3;
    this.radius = radius;
    this.y = canvas.height-this.radius-42;
    this.dx = dx; //Gia tốc theo phương x
    this.dy = dy; //Gia tốc theo phương y
    this.draw = function() { //vẽ quả bóng
        context.beginPath();
        context.arc(this.x, this.y,this.radius,0,Math.PI*2);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();
    };
    // this.setBall = function () {
    //     this.x = this.x +this.dx;
    //     this.y = this.y + this.dy;
    // };
    this.moveBall = function () { //vẽ quả bóng chuyển động
        this.x += this.dx;
        this.y += this.dy;
        if (this.y < this.radius) {
            this.dy = -this.dy;
        }
        if (this.x < this.radius || this.x>canvas.width-this.radius) {
            this.dx = -this.dx;
        }
    }
};