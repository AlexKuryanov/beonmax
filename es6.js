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
    document.body.append(div); // append-adds several elements, 
    div.textContent = text; //  appendChild only one

    const textCss = () => {
      div.style.height = this.height; // can write in one line with incap
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

// teachers code
/* class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv() {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = param;
	}
}

const item = new Options(300, 350, "red", 14, "center");

item.createDiv();*/