class Paddle {
  constructor(x, col) {
    this.x = x;
    this.y = height / 2;
    this.w = 20;
    this.h = 100;
    this.col = col;

    this.render = function () {
      fill(this.col);
      rect(this.x, this.y, this.w, this.h);
    }

    this.move = function (dir) {
      this.y += dir;

      if (this.y - this.h / 2 <= 0)
        this.y = this.h / 2;
      else if (this.y + this.h / 2 >= height)
        this.y = height - this.h / 2;
    }
  }
}