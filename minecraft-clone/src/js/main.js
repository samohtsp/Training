import "../css/main.css";
import * as THREE from "three";
import * as sc from "./Scene.js";
import * as cm from "./Camera.js";

import * as rd from "./Renderer.js";
import * as ld from "./Landscape.js";
import * as PLR from "./Player.js";
import * as CANNON from "cannon-es";
import * as st from "./Storage";

import Stats from "three/examples/jsm/libs/stats.module";

// Three variables
export let scene = sc.scene;
let camera = cm.camera;
let renderer = rd.renderer;
const clock = new THREE.Clock();

let stats;

// Minecraft variables
export let blocks;
let player;

export let storage = new st.Storage();

// cannon.js variables
export let world;

// To be synced
export let meshes = [];
export let bodies = [];

initThree();
initCannon();
initMinecraft();
renderInfo();
GameLoop();

function initThree() {
  stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.dom);
}

function initCannon() {
  // Setup world
  world = new CANNON.World();
  world.gravity.set(0, -9.81, 0);
}

function initMinecraft() {
  ld.createLandscape();

  blocks = new st.BlocksArray({
    storage: storage,
    meshes: meshes,
    bodies: bodies,
    world: world,
    scene: scene,
  });

  player = new PLR.Player({ camera: camera });

  player.playerBody.position.set(6, 8, 6);
  bodies.push(player.playerBody);
  world.addBody(player.playerBody);
  meshes.push(player.mesh);
  scene.add(player.mesh);
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
  stats.begin();
  const deltaTime = clock.getDelta();

  //update game
  player.updatePlayer();

  // Step the physics world
  world.fixedStep();
  synchronisedBodiesMeshes();

  // Render three.js
  //blocks.renderList.forEach((mesh) => {
  //  scene.add(mesh);
  //});
  renderer.render(scene, camera);

  stats.update();
  stats.end();
  requestAnimationFrame(GameLoop);
}
