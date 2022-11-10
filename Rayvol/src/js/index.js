import _ from 'lodash';
import '../css/main.css';
import '../assets/img/smoke.png';
import '../assets/img/discg.png';
import '../assets/img/disc.png';
import '../assets/img/shinyPB.png';
import "../html/home.html";

function component() {
  const element = document.createElement('canvas');
  // const btn = document.createElement('button');
  // Lodash, now imported by this script
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.id ='bg'
  // element.classList.add('hello');
  //btn.innerHTML = 'Click me and check the console!';
  //btn.onclick = printMe;
  //element.appendChild(btn);
  return element;
}

document.body.appendChild(component());