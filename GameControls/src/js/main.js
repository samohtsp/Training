import "../css/main.css";
import * as THREE from "three";
import * as sc from "./Scene.js";
import * as cm from "./Camera.js";

import * as rd from "./Renderer.js";

import * as PLR from "./Player.js";
import * as CANNON from "cannon-es";
//import * as st from "./Storage";

import Stats from "three/examples/jsm/libs/stats.module";
import { functionsIn } from "lodash";

// Three variables
export let scene = sc.scene;
let camera = cm.camera;
let renderer = rd.renderer;
const clock = new THREE.Clock();

let stats;

// GameControls variables
let player;

//export let storage = new st.Storage();

// cannon.js variables
export let world;

// To be synced
export let meshes = [];
export let bodies = [];

initThree();
initCannon();
initGameControls();
//renderInfo();
GameLoop();

function initThree() {
  // stats = new Stats();
  // stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  // document.body.appendChild(stats.dom);
}

function initCannon() {
  // Setup world
  world = new CANNON.World();
  world.gravity.set(0, -9.81, 0);
}
function initGridHelper(x, y) {
  // Create a grid with size X x Y
  let size = x;
  let divisions = y;
  let gridHelper = new THREE.GridHelper(size, divisions);
  scene.add(gridHelper);
}

function initCheckerBoard(x, y) {
  // Create a canvas with size x * 100 x y * 100
  var canvas = document.createElement("canvas");
  canvas.width = x * 100;
  canvas.height = y * 100;

  // Get the 2D context
  var context = canvas.getContext("2d");
  // Fill the canvas with a checkerboard pattern
  for (var i = 0; i < canvas.width; i++) {
    for (var j = 0; j < canvas.height; j++) {
      context.fillStyle =
        (Math.floor(i / 100) + Math.floor(j / 100)) % 2 === 0
          ? "#d3d3d3"
          : "#6d6d6d";
      context.fillRect(i, j, 1, 1);

      // Draw a border around the cells
      context.lineWidth = 1;
      context.strokeStyle = "black";
      if (i % 100 === 0 || j % 100 === 0) {
        context.strokeRect(i, j, 100, 100);
      }
    }
  }

  // Create a Three.js Texture from the canvas
  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  // Create a material and apply the texture
  var material = new THREE.MeshBasicMaterial({ map: texture });

  // Create a mesh and return it
  return new THREE.Mesh(new THREE.PlaneGeometry(x, y), material);
}

function initGameControls() {
  //initGridHelper(20, 20);
  player = new PLR.Player({ camera: camera, position: { x: 0, y: 5, z: 0 } });

  bodies.push(player.playerBody);
  world.addBody(player.playerBody);
  meshes.push(player.mesh);
  scene.add(player.mesh);

  const planeMesh = initCheckerBoard(10, 10);
  planeMesh.position.set(0, 0, 0);
  planeMesh.rotateX(Math.PI / 2);

  const planeBody = new CANNON.Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane(),
  });
  planeBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // make it face up

  bodies.push(planeBody);
  world.addBody(planeBody);
  meshes.push(planeMesh);
  scene.add(planeMesh);
}
function renderInfo() {
  console.log("Scene polycount:", renderer.info.render.triangles);
  console.log("Active Drawcalls:", renderer.info.render.calls);
  console.log("Textures in Memory", renderer.info.memory.textures);
  console.log("Geometries in Memory", renderer.info.memory.geometries);
}

// Sync the three.js meshes with the bodies
function synchronisedBodiesMeshes() {
  for (let i = 0; i !== meshes.length; i++) {
    meshes[i].position.copy(bodies[i].position);
    meshes[i].quaternion.copy(bodies[i].quaternion);
  }
}

function GameLoop() {
  // stats.begin();
  //const deltaTime = clock.getDelta();

  //update game
  player.updatePlayer();

  // Step the physics world
  world.fixedStep();
  synchronisedBodiesMeshes();

  renderer.render(scene, camera);

  // stats.update();
  // stats.end();
  requestAnimationFrame(GameLoop);
}
