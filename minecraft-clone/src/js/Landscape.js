import * as THREE from "three";

import * as mn from "./main";

export function createLandscape() {
  //console.log("in landscape");
  for (var xIndex = 0; xIndex < 10; xIndex++) {
    for (var zIndex = 0; zIndex < 10; zIndex++) {
      const z = zIndex;
      const x = xIndex;
      const y = 0;
      const pos = new THREE.Vector3(x, y, z);
      mn.storage.addBlock({ type: "grass", position: pos });
    }
  }
}
