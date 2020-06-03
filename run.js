
let ball = new Ball(8,3,3);
let gach = new Gach(20,40,60,20);
let thanhDo = new ThanhDoBall();
//vẽ các khối gạch
let toadoGach = [];
for (i=0;i<4;i++) {
    toadoGach[i] = [];
    for (j=0;j<7;j++) {
        gach.setX(j);
        gach.setY(i);
        toadoGach[i].push({
            x: gach.getX(),
            y: gach.getY(),
            statusgach: false
        });
    }
}
function drawKhoigach() {
    for (i=0;i<4;i++) {
        for (j=0;j<7;j++) {
            if (!toadoGach[i][j].statusgach) {
                gach.draw(context,toadoGach[i][j].x,toadoGach[i][j].y);
            }
        }
    }
}
//bóng đập gạch
let score = 0;
function BallvaGach() {
    for (i=0;i<4;i++) {
        for (j=0;j<7;j++) {
            if (!toadoGach[i][j].statusgach) {
                if (ball.x + ball.radius >= toadoGach[i][j].x && ball.x + ball.radius <= toadoGach[i][j].x + gach.width &&
                    ball.y + ball.radius >= toadoGach[i][j].y && ball.y - ball.radius <= toadoGach[i][j].y + gach.height) {
                    ball.dy = -ball.dy;
                    toadoGach[i][j].statusgach = true;
                    score++;
                }
            }
        }
    }
}
//điều khiển bằng phím
function keyDown(event) {
    switch (event.keyCode) {
        case 37:
            thanhDo.moveLeft();
            break;
        case 39:
            thanhDo.moveRight();
            break;
        case 32:
            pause();
            break;
        case 13:
            resume();
    }
}
document.addEventListener('keydown',keyDown);
let checkGameOver = false;
function endGame(ball) {
    if (ball.y + ball.radius >= canvas.height) {
        checkGameOver = true;
        alert('GAME OVER!');
    }
}
function gamewin() {
    document.getElementById("diem").innerHTML = score;
    if (score >= 28) {
        alert('YOU WIN');
        checkGameOver = true;
    }
}
function reset() {
    window.location.reload();
}
function pause() {
    ball.dx = 0;
    ball.dy = 0;
    thanhDo.speed = 0;
}function resume() {
    ball.dx = 3;
    ball.dy = 3;
    thanhDo.speed = thamsoThanh.speed;
}
function playGame() {
    if (!checkGameOver) {
        context.clearRect(0,0,canvas.width,canvas.height);
        ball.draw();
        ball.moveBall();
        thanhDo.drawThanh();
        thanhDo.doBall(ball);
        drawKhoigach();
        BallvaGach();
        endGame(ball);
        gamewin();
        requestAnimationFrame(playGame);
    }
}