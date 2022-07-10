import '../css/main.css';
import * as THREE from 'three';
import * as sc from './Scene.js'
import * as cm from './Camera.js'
import * as ct from './Controls.js'
import * as rd from './Renderer.js'
import * as ld from './Landscape.js'
import * as mg from './MapGeneration.js'
import * as pn from './PerlinNoise.js'
import Stats from 'three/examples/jsm/libs/stats.module'

const scene = sc.scene
const camera = cm.camera
const renderer = rd.renderer
const controls = ct.controls;
const clock = new THREE.Clock();

var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
window.addEventListener('resize', onWindowResize);

document.addEventListener('wheel', function (e) {
    //console.log('in event listener e =',e.deltaY )
    if (e.deltaY < 0) {
        controls.moveForward()
    }
    else if (e.deltaY > 0) {
        control.moveForward(-5)
    }
    ld.updateLandscape(scene)
    renderInfo()
})

document.addEventListener("keyup", function (e) {
    if (e.key == "w") {
        control.moveForward(1)
    }
    else if (e.key == "s") {
        control.moveForward(-1)
    }
});

document.addEventListener("keydown", function (e) {

});

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    controls.handleResize();

}

function renderInfo() {
    console.log("Scene polycount:", renderer.info.render.triangles)
    console.log("Active Drawcalls:", renderer.info.render.calls)
    console.log("Textures in Memory", renderer.info.memory.textures)
    console.log("Geometries in Memory", renderer.info.memory.geometries)
}
ld.createLandscape(scene)
ld.updateLandscape(scene)

function GameLoop() {

    stats.begin();

    sc.sceneLoop();
    //mg.movePlane()
    //cm.camPosChanged()
    //if(cm.moved){
    //ld.updateLandscape(scene)
    //    cm.loadCameraPosition()
    //}
    controls.update(clock.getDelta());
    renderer.render(scene, camera);

    stats.end();
    requestAnimationFrame(GameLoop);
};
//requestAnimationFrame( GameLoop );