import * as THREE from "three";
import * as BLK from "./Block.js";
import * as cm from "./Camera.js";
import * as ct from "./Controls.js";
import * as CANNON from "cannon-es";
import * as mn from "./main";

const camera = cm.camera;

var chunkSize = 10;
const landscape = [];

export function addBlocks(scene) {
  var blocks = new BLK.Blocks();
  var cube = blocks.grass.mesh;

  //const [x,y,z]= Array(3).fill().landscape(()=>THREE.MathUtils.randFloatSpread( 100 ) );

  cube.position.set(0, 0, 0);
  console.log(cube);
  scene.add(cube);
}
function LandscapeSetup(scene) {
  for (var xIndex = 0; xIndex < 10; xIndex++) {
    for (var zIndex = 0; zIndex < 10; zIndex++) {
      var blocks = new BLK.Blocks();
      var block = blocks.grass.mesh;
      var z = zIndex * 5;
      var x = xIndex * 5;
      var y = 0;
      block.position.set(x, y, z);
      scene.add(block);
    }
  }
}
function diplayBlocksAroundCamera() {
  console.log("in PlaceBlocksAroundCamera");
  //console.log('camera.position ',position)
  const diplayableLandscape = Array();
  var cameraBlock = findBlockUnderCam();
  var firstBlockPosition = findFirstBlockInDisplay(cameraBlock);

  //console.log('cameraBlock ',cameraBlock)
  //console.log('firstBlockPosition ',firstBlockPosition)

  for (var xIndex = 0; xIndex < 10; xIndex++) {
    for (var zIndex = 0; zIndex < 15; zIndex++) {
      var z = firstBlockPosition.z + zIndex;
      var x = firstBlockPosition.x + xIndex;
      //var y = 0

      //landscape[x][z].visible = true
      diplayableLandscape.push(x, z);
    }
  }
  return diplayableLandscape;
}
function findBlockUnderCam() {
  //console.log('in centerLandscape')
  const position = camera.position;

  var posX = parseInt(position.x / 5);
  var posZ = parseInt(position.z / 5);

  var posBlock = { x: posX, z: posZ };
  return posBlock;
}
function findFirstBlockInDisplay(posBlockCam) {
  //console.log('in centerLandscape')

  var posX = posBlockCam.x - 5;
  var posZ = posBlockCam.z - 15;

  var posBlock = { x: posX, z: posZ };
  return posBlock;
}

export function addBlocksToScene(addList) {
  addList.forEach((block) => {
    block.visible = true;
  });
}

export function removeBlocksFromScene() {
  landscape.forEach((position) => {
    position.forEach((block) => {
      block.visible = false;
    });
  });
}

export function compareLandscapes(diplayableLandscape) {
  var blockToKeep = Array();
  var blockToDelete = Array();
  var blockToAdd = Array();

  blockToKeep = getIntersection(landscape, diplayableLandscape);
  blockToDelete = getExclusionA(landscape, blockToKeep);
  blockToAdd = getUnion(diplayableLandscape, blockToKeep);
  return { rmList: blockToDelete, addList: blockToAdd };
}

export function createLandscape(scene) {
  console.log("in landscape");
  for (var xIndex = 0; xIndex < 10; xIndex++) {
    landscape[xIndex] = Array();
    for (var zIndex = 0; zIndex < 10; zIndex++) {
      const blocks = new BLK.Blocks();
      const block = blocks.grass.mesh;
      const z = zIndex;
      const x = xIndex;
      const y = 0;
      block.position.set(x, y, z);
      const blockShape = new CANNON.Box(new CANNON.Vec3(1, 1, 1));
      const blockBody = new CANNON.Body({ mass: 0 });
      blockBody.position.set(x, y, z);
      mn.meshes.push(block);
      blockBody.addShape(blockShape);
      mn.bodies.push(blockBody);
      mn.world.addBody(blockBody);
      scene.add(block);
    }
  }
}

export function updateLandscape() {
  //console.log('in updateLandscape')
  removeBlocksFromScene();
  diplayBlocksAroundCamera();
  //var printableLandscape = diplayBlocksAroundCamera(scene)
  //var blocks = compareLandscapes(printableLandscape)
  //removeBlocksFromScene(scene, blocks.rmList)
  //addBlocksToScene(scene, blocks.addList)
}
