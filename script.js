/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 8;
    console.log('ok: ' + this.left);
  }
  this.moveBottom = function () {
    this.top += 8;
    console.log('ok: ' + this.top);
  }
  this.moveLeft = function () {
    this.left -= 8;
    console.log('ok: ' + this.left);
  }
  this.moveTop = function () {
    this.top -= 8;
  }
}

let hero = new Hero('Cheems-PNG.png', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top == 20){
    hero.moveRight();
  } else if (hero.left >= window.innerWidth - hero.size && hero.top < 750 - hero.size) {
    hero.moveBottom();
  } else if (hero.top >= 750 - hero.size && hero.left > 30) {
    hero.moveLeft();
  } else if (hero.left <= 30) {
    hero.moveTop();
  }
    document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 18)
}

start();