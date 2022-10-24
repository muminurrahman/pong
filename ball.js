class Ball {
  constructor(xVelocity, yVelocity) {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 10;
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;

    this.render = function () {
      fill("green");
      ellipse(this.x, this.y, this.r * 2);
    }

    this.move = function () {
      this.x += this.xVelocity;
      this.y += this.yVelocity;
    }

    this.bounce = function () {
      let diff, angle;

      if (this.y - this.r < 0 || this.y + this.r > height)
        this.yVelocity = -this.yVelocity;

      if (this.x + this.r > player1.x - player1.w / 2 &&
        this.x - this.r < player1.x + player1.w / 2 &&
        this.y + this.r > player1.y - player1.h / 2 &&
        this.y - this.r < player1.y + player1.h / 2) {

        if (this.x > player1.x) {
          diff = this.y - (player1.y - player1.h / 2);
          angle = map(diff, 0, player2.h, radians(-45), radians(45));
          this.xVelocity = 12 * cos(angle);
          this.yVelocity = 12 * sin(angle);
          this.x = player1.x + player1.w / 2 + this.r;
        }
      }

      if (this.x + this.r > player2.x - player2.w / 2 &&
        this.x - this.r < player2.x + player2.w / 2 &&
        this.y + this.r > player2.y - player2.h / 2 &&
        this.y - this.r < player2.y + player2.h / 2) {

        if (this.x < player2.x) {
          diff = this.y - (player2.y - player2.h / 2);
          angle = map(diff, 0, player2.h, radians(225), radians(135));
          this.xVelocity = 12 * cos(angle);
          this.yVelocity = 12 * sin(angle);
          this.x = player2.x - player2.w / 2 - this.r;
        }
      }
    }
  }
}