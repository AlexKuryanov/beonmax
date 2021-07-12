'use strict';
class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv(text) {
    let div = document.createElement('div');
    document.body.append(div);
    div.textContent = text;

    const textCss = () => {
      div.style.height = this.height;
      div.style.width = this.width;
      div.style.backgroundColor = this.bg;
      div.style.fontSize = this.fontSize;
      div.style.textAlign = this.textAlign;
    };
    textCss();
  }
}

let newDiv = new Options('200px', '500px', 'lightgreen', '16px', 'center');
newDiv.createDiv('created first div');
let secondDiv = new Options('300px', '400px', 'pink', '28px', 'right');
secondDiv.createDiv('created second div');