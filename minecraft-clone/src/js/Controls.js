import "../css/main.css";
import * as THREE from "three";

import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

export class Controls {
  constructor({ player }) {
    this.player = player;

    this.keyActionMap = {
      0: "leftClick",
      2: "rightClick",
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
    this.mouse = new THREE.Vector2(0, 0);
    this.raycaster = new THREE.Raycaster();
    this.initControls();
  }
  initControls() {
    document.addEventListener("keydown", (event) => {
      this.handleKeyDown(event);
    });
    document.addEventListener("keyup", (event) => {
      this.handleKeyUp(event);
    });
    document.addEventListener("mousedown", (event) => {
      //console.log(event);
      if (this.fpv.isLocked) {
        this.handleMouseDown(event);
      } else {
        this.fpv.lock();
      }
    });
    document.addEventListener("mouseup", (event) => {
      //console.log(event);

      this.handleMouseUp(event);
    });
    this.fpv.addEventListener("lock", () => {
      //menu.style.display = "none";
      //console.log("locked");
    });
    this.fpv.addEventListener("unlock", () => {
      //menu.style.display = "block";
      //console.log("unlocked");
    });

    // if (navigator.keyboard) {
    //   const keyboard = navigator.keyboard;
    //   keyboard.getLayoutMap().then((keyboardLayoutMap) => {
    //     //const upKey = keyboardLayoutMap.get("KeyW");
    //     keyboardLayoutMap.forEach((key) => {
    //       console.log(key);
    //     });
    //     console.log(Object.keys(keyboardLayoutMap));
    //     console.log(Object.values(keyboardLayoutMap));
    //     window.alert(`Press ${upKey} to move up.`);
    //   });
    // } else {
    //   // Do something else.
    // }
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
  handleMouseDown(event) {
    //event.preventDefault();

    const action = this.actionByKey(event.button);
    //console.log(action);
    if (action) {
      this.player.actionMap[action] = true;
    }
  }
  handleMouseUp(event) {
    //event.preventDefault();
    const action = this.actionByKey(event.button);
    //console.log(action);
    if (action) {
      this.player.actionMap[action] = false;
    }
  }
}
