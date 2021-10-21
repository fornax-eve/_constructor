'use strict'

const DomElement = function (position, height, width, bg, fontSize) {
    this.position = position;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
    DomElement.prototype.createMethod = function () {
        let im = document.createElement('div');
        im.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg};        font-size: ${this.fontSize}px; position: ${this.position}`;
        return im;
    }

    DomElement.prototype.onKey = function (event) {
        const div = document.querySelector('div');
        let coords = div.getBoundingClientRect();
        const change = 10;
        switch (event.key) {
            case 'ArrowUp':
                div.style.top = coords.top - change + 'px';
                break;
            case 'ArrowRight':
                div.style.left = coords.left + change + 'px';
                break;
            case 'ArrowLeft':
                div.style.left = coords.left - change + 'px';
                break;
            case 'ArrowDown':
                div.style.top = coords.top + change + 'px';
                break;
        }
    }

const func = function () {
    const newElement = new DomElement('absolute', 100, 100, 'CadetBlue', 12);
    document.body.appendChild(newElement.createMethod());
    document.addEventListener('keydown', newElement.onKey)
}

document.addEventListener('DOMContentLoaded', func)
