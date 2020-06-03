let Gach = function(x,y,weight,height) {
    this.x = x;
    this.y = y;
    this.width = weight;
    this.height = height;
    this.between = 30;
    this.toadoX = 0;//đặt riêng 1 toạ độ X,Y mới để vẽ các khối gạch
    this.toadoY = 0;
    this.draw = function (context,x,y) {
        context.beginPath();
        context.rect(x, y, this.width, this.height);
        context.fillStyle = 'green';
        context.fill();
        context.closePath();
    };
    this.setX = function (a) {
        this.toadoX = this.x + a*(this.width + this.between);
    };
    this.getX = function () {
        return this.toadoX;
    };
    this.setY = function (a) {
        this.toadoY = this.y + a*(this.height + this.between);
    };
    this.getY = function () {
        return this.toadoY;
    };
};




