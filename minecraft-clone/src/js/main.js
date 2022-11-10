import "../css/main.css";
import * as THREE from "three";
import * as sc from "./Scene.js";
import * as cm from "./Camera.js";
import * as ct from "./Controls.js";
import * as rd from "./Renderer.js";
import * as ld from "./Landscape.js";
import * as BLK from "./Block.js";
import * as PLR from "./Player.js";
import * as CANNON from "cannon-es";

import Stats from "three/examples/jsm/libs/stats.module";

// Three variables
let scene = sc.scene;
let camera = cm.camera;
let renderer = rd.renderer;
const clock = new THREE.Clock();
let stats;

// Minecraft variables
let blocks = new BLK.Blocks();
let player = new PLR.Player({ camera: camera });
let controls = new ct.Controls({ player: player });

// cannon.js variables
let world;

// To be synced
const meshes = [];
const bodies = [];

initThree();
renderInfo();
initCannon();
GameLoop();

function initThree() {
  stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.dom);

  meshes.push(player.mesh);
  scene.add(player.mesh);

  ld.createLandscape(scene);
}

function initCannon() {
  // Setup world
  world = new CANNON.World();
  world.gravity.set(0, -9.81, 0);

  // Floor
  const floorShape = new CANNON.Plane();
  const floorBody = new CANNON.Body({ mass: 0 });
  floorBody.addShape(floorShape);
  floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  world.addBody(floorBody);

  player.playerBody.position.set(6, 8, 6);
  bodies.push(player.playerBody);
  world.addBody(player.playerBody);
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
  renderer.render(scene, camera);

  stats.update();
  stats.end();
  requestAnimationFrame(GameLoop);
}
