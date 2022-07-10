import * as THREE from 'three';
import * as cm from './Camera.js'
import * as ct from './Controls.js'
import * as rd from './Renderer.js'
import * as ld from './Landscape.js'

export const scene = new THREE.Scene();
const camera = cm.camera
const renderer = rd.renderer

scene.background = new THREE.Color(0x00ffff);
scene.fog = new THREE.Fog(0x00ffff, 2, 80);


renderer.render(scene,camera);

const pointLight_1 = new THREE.PointLight(0xffffff);
pointLight_1.position.set(5, 5, 0);
const pointLight_2 = new THREE.PointLight(0xffffff);
pointLight_2.position.set(-5, 5, 0);
const ambientLight = new THREE.AmbientLight(0xffffff,0.15);
scene.add(pointLight_1,pointLight_2,ambientLight);

//ld.addBlocksToScene(scene)

export function sceneLoop(){
    
    
}
