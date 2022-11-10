//import HtmlWebpackPlugin from 'html-webpack-plugin';
import _ from 'lodash';
import '../css/main.css';
import "../html/home.html";


function component() {
  require.context('../assets', true, /\.(png|svg|jpg|jpeg|gif)$/)
  const element = document.createElement('canvas');
  //const favicon = document.createElement('link');
  //document.head.append(favicon);
  /*favicon.id = 'ico';
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href= 'https://img.icons8.com/color/48/000000/minecraft-pickaxe.png';*/
  //console.log(texture);
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