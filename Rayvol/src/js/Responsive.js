import { cmObj } from './Camera.js';
import { rdObj } from './Renderer.js';
//
//Sizes
//
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    cmObj.camera.aspect = sizes.width / sizes.height;
    cmObj.camera.updateProjectionMatrix();

    // Update renderer
    rdObj.renderer.setSize(sizes.width, sizes.height);
    rdObj.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
