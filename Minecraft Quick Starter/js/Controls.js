import '../css/main.css';
import * as THREE from 'three';
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls'
import * as cm from './Camera.js'
import * as rd from './Renderer.js'

const camera = cm.camera
const renderer = rd.renderer
const moveSpeed = 5
export const controls = new PointerLockControls(camera,renderer.domElement);
controls.movementSpeed = 150;
controls.lookSpeed = 0.1;


