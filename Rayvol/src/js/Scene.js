import * as THREE from 'three';

export const scObj = {
    scene: null,
  initScene : () => {
    scObj.scene = new THREE.Scene();
    scObj.scene.background = new THREE.Color(0x1C0339);
    //scObj.scene.fog = new THREE.Fog(0xffffff, 0, 50);
    const pointLight = new THREE.PointLight(0xffffff);
    const directLight = new THREE.SpotLight(0x04FF00,100)
    pointLight.position.set(0, 30, -100);
    pointLight.lookAt(0,0,0)
    directLight.position.set(0, 0,100);
    directLight.lookAt(0,0,0)
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scObj.scene.add(ambientLight,directLight);
  }
};
scObj.initScene();
let sc = new THREE.Scene();
sc.b