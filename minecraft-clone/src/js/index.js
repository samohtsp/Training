import _ from "lodash";
import "../css/main.css";

require.context("../assets", true, /\.(png|svg|jpg|jpeg|gif)$/);
// Needed for Hot Module Replacement
if (typeof module.hot !== "undefined") {
  module.hot.accept(); // eslint-disable-line no-undef
}

function canvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "bg";
  return canvas;
}

function cursor() {
  const cursor = document.createElement("div");
  const HorBar = document.createElement("div");
  const VertTopBar = document.createElement("div");
  const VertBotBar = document.createElement("div");

  cursor.className = "absolute centered cursor";
  VertTopBar.className = "bar vertical top";
  VertBotBar.className = "bar vertical bot";
  HorBar.className = "bar horizontal";

  cursor.appendChild(VertTopBar);
  cursor.appendChild(VertBotBar);
  cursor.appendChild(HorBar);

  return cursor;
}

document.body.appendChild(canvas());
document.body.appendChild(cursor());
