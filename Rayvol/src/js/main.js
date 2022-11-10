import * as THREE from 'three';
import {ResponsiveRender} from'./Responsive.js'

import Stats from 'three/examples/jsm/libs/stats.module'
import { cmObj } from './Camera.js';
import { rdObj } from './Renderer.js';
import { scObj } from './Scene.js';
import { ctrlObj } from './Controls.js';
import { generateGalaxy } from './Galaxy.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { DoubleSide } from 'three';
import Planet from './Planet.js'
//import { cloud } from './Nebula.js';

//var geometry  = new THREE.SphereBufferGeometry(1,20,20);
//const material = new THREE.MeshStandardMaterial( { color:0xffffff } );
var planet =  new Planet(scObj.scene);
//console.log(planet.mesh.position)
//planet.mesh.position.set(20,0,0);
//scObj.scene.add(planet);

//const clock = new THREE.Clock();

var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
//document.body.appendChild(stats.dom);

const controls = new OrbitControls( cmObj.camera, rdObj.renderer.domElement );

const galaxy = generateGalaxy();
scObj.scene.add(galaxy);
function GameLoop () {

    stats.begin();
    //planet.update()
    //ctrlObj.controls.update(clock.getDelta());
    
    rdObj.renderer.render(scObj.scene, cmObj.camera);
    galaxy.rotateY(0.0001);
    controls.update();
    stats.end();
    requestAnimationFrame(GameLoop);
};

requestAnimationFrame( GameLoop );

