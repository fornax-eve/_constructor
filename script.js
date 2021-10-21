'use strict'
const body = document.querySelector('body');
const input1 = body.firstElementChild;

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    let im;

    this.createMethod = function () {
        if (this.selector[0] == '.') {
            im = document.createElement('div');
            console.log(im)
            im.classList.add(input1.value.slice(1));
            body.append(im)
            im.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur consequuntur.'
        } else if (this.selector[0] == '#') {
            im = document.createElement('p');
            body.append(im)
            im.id = (input1.value.slice(1));
            im.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias distinctio ducimus.'
        }
        im.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg};        font-size: ${this.fontSize}px;`;
    }
}

const func = function () {
    const newElement = new DomElement(input1.value, 100, 200, 'CadetBlue', 12);
    console.log(newElement)
    newElement.createMethod();
}

input1.addEventListener('change', func)
