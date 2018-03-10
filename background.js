function color(red, green, blue) {
  this.value = '#ffffff';
  this.red = red;
  this.green = green;
  this.blue = blue;
  var self = this;
  this.toString = function() {
    self.red = toInt(self.red); self.green = toInt(self.green); self.blue = toInt(self.blue);
    self.red %= 255; self.green %= 255; self.blue %= 255;
    self.value = '#' + self.red.toString(16) + self.green.toString(16) + self.blue.toString(16);
  }
}

function toInt(n){ return Math.round(Number(n)); };


var color1 = new color(130, 33, 55);
var color2 = new color(150, 33, 55);
var body = document.getElementById("gradient")
var random = document.getElementById("random");

function setGradient() {
  body.style.background = 
  "linear-gradient(to right, " 
  + color1.value
  + ","
  + color2.value
  + ")";
  
}
window.onload = setGradient;

function randomBackground() {
  color1.value = getRandomRGB();
  color2.value = getRandomRGB();
  setGradient();
}

function getRandomRGB() {
  var rgbValue = ['#'];
  rgbValue.push(getRandomHex().toString(16));
  rgbValue.push(getRandomHex().toString(16));
  rgbValue.push(getRandomHex().toString(16));
  return rgbValue.join('');
}

function getRandomHex() {
  min = Math.ceil(0);
  max = Math.floor(255);
  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

function incrementColor(obj, color) {
  obj[color]++;
}
console.log(color1, color2);

function sinFuncFac() {
  let sinArr = [];
  for (let i = 0.0; i < 1; i += 0.005) {
    sinArr.push((Math.sin(i*2*Math.PI)+1)/2);
  }
  console.log('sin function mapped');
  return sinArr;
}
sinFunction = sinFuncFac();
let sinCount = 0;
color1.rStart = 50;
function smoothColor() {
  sinCount++;
  if (sinCount >= sinFunction.length) { sinCount = 0; }
  color1.blue = 250 - toInt((sinFunction[sinCount] * 150));
  color2.green = 50 + toInt((sinFunction[sinCount] * 200));
  // color1.red = color1.red + toInt((sinFunction[sinCount] * 50));
  color1.toString();
  color2.toString();
  // console.log(sinCount, 'color1:', color1.red, color1.green, color1.blue, 'color2:',  color2.red, color2.green, color2.blue); 
  setGradient();
  // console.log(sinCount);
  // requestAnimationFrame(smoothColor);
}
// smoothColor();
setInterval(smoothColor, 50);