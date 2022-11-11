import _ from "lodash";
import "../css/main.css";

require.context("../assets", true, /\.(png|svg|jpg|jpeg|gif)$/);

function canvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "bg";
  return canvas;
}

function cursor() {
  const cursor = document.createElement("div");
  cursor.className = "absolute centered cursor";
  cursor.textContent = " ";
  return cursor;
}

document.body.appendChild(canvas());
document.body.appendChild(cursor());
