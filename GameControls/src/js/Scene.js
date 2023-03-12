import * as THREE from "three";
import * as cm from "./Camera.js";
import * as rd from "./Renderer.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { Sky } from "three/addons/objects/Sky.js";

export const scene = new THREE.Scene();
const camera = cm.camera;
const renderer = rd.renderer;

let sky, sun;

init();

function initSky() {
  // Add Sky
  sky = new Sky();
  sky.scale.setScalar(450000);
  scene.add(sky);

  sun = new THREE.Vector3();

  /// GUI

  const effectController = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 2,
    azimuth: 180,
    exposure: renderer.toneMappingExposure,
  };

  function guiChanged() {
    const uniforms = sky.material.uniforms;
    uniforms["turbidity"].value = effectController.turbidity;
    uniforms["rayleigh"].value = effectController.rayleigh;
    uniforms["mieCoefficient"].value = effectController.mieCoefficient;
    uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

    const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
    const theta = THREE.MathUtils.degToRad(effectController.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);

    uniforms["sunPosition"].value.copy(sun);

    renderer.toneMappingExposure = effectController.exposure;
  }

  // const gui = new GUI();

  // gui.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
  // gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
  // gui
  //   .add(effectController, "mieCoefficient", 0.0, 0.1, 0.001)
  //   .onChange(guiChanged);
  // gui
  //   .add(effectController, "mieDirectionalG", 0.0, 1, 0.001)
  //   .onChange(guiChanged);
  // gui.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);
  // gui.add(effectController, "azimuth", -180, 180, 0.1).onChange(guiChanged);
  // gui.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);
  // gui.visible = false;
  guiChanged();
}

function init() {
  const pointLight_1 = new THREE.PointLight(0xffffff);
  pointLight_1.position.set(5, 5, 0);
  const pointLight_2 = new THREE.PointLight(0xffffff);
  pointLight_2.position.set(-5, 5, 0);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
  scene.background = new THREE.Color(0xd4f5f9);
  scene.add(pointLight_1, pointLight_2, ambientLight);

  renderer.render(scene, camera);

  //initSky();
}
