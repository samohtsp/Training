import * as THREE from 'three';

export const rdObj = {
  canvas : document.getElementById('bg'),
  renderer : null,
  initRd : () => {
    rdObj.renderer = new THREE.WebGLRenderer({canvas: rdObj.canvas , powerPreference: "high-performance" })
    rdObj.renderer.setPixelRatio(window.devicePixelRatio)
    rdObj.renderer.setSize(window.innerWidth, window.innerHeight)
  }
};
rdObj.initRd();