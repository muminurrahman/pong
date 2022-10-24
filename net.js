class Net {
  constructor() {
    this.render = function () {
      stroke("white");
      strokeWeight(6);

      for (let i = 0; i < height; i += 36)
        line(width / 2, i, width / 2, i + 20);

      noStroke();
    }
  }
}