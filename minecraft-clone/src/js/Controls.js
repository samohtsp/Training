import "../css/main.css";
import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

export class Controls {
  constructor({ player }) {
    this.player = player;

    this.keyActionMap = {
      KeyW: "moveForward",
      KeyS: "moveBackward",
      KeyA: "moveLeft",
      KeyD: "moveRight",
      Space: "jump",
      Digit1: "texture1",
      Digit2: "texture3",
      Digit3: "texture4",
      Digit4: "texture5",
    };
    this.fpv = new PointerLockControls(
      this.player.camera,
      document.getElementById("bg")
    );
    this.initControls();
  }

  initControls() {
    document.addEventListener("keydown", (event) => {
      this.handleKeyDown(event);
    });
    document.addEventListener("keyup", (event) => {
      this.handleKeyUp(event);
    });
    document.addEventListener("click", () => {
      console.log("click");
      this.fpv.lock();
    });
    this.fpv.addEventListener("lock", () => {
      //menu.style.display = "none";
      console.log("locked");
    });

    this.fpv.addEventListener("unlock", () => {
      //menu.style.display = "block";
      console.log("unlocked");
    });
  }

  actionByKey(key) {
    return this.keyActionMap[key];
  }

  handleKeyDown(event) {
    const action = this.actionByKey(event.code);
    //console.log("keyDown " + event);
    if (action) {
      this.player.actionMap[action] = true;
    }
    //console.log("actions keyDown", this.player.actionMap);
  }

  handleKeyUp(event) {
    const action = this.actionByKey(event.code);
    //console.log(event);
    if (action) {
      this.player.actionMap[action] = false;
    }
    //console.log("actions ", this.player.actionMap);
  }
}
