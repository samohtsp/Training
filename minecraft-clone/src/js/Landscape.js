import * as THREE from "three";
import * as BLK from "./Block.js";
import * as cm from "./Camera.js";
import * as ct from "./Controls.js";

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
  //console.log('in landscape')
  for (var xIndex = 0; xIndex < 10; xIndex++) {
    landscape[xIndex] = Array();
    for (var zIndex = 0; zIndex < 10; zIndex++) {
      const blocks = new BLK.Blocks();
      var block = blocks.grass.mesh;
      var z = zIndex;
      var x = xIndex;
      var y = 0;
      block.position.set(x, y, z);
      landscape[xIndex][zIndex] = block;
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

function getUnion(a, b) {
  var union = new Set();
  var alength = a.length;
  var blength = b.length;

  for (let i = 0; i < alength; i++) {
    union.add(a[i]);
  }
  for (let i = 0; i < blength; i++) {
    union.add(b[i]);
  }
  return Array.from(union);
}

function getIntersection(a, b) {
  var intersection = new Set();
  var alength = a.length;
  var blength = b.length;

  if (alength < blength) {
    var tempo = b;
    b = a;
    a = tempo;
  }
  for (let i = 0; i < alength; i++) {
    for (let j = 0; j < blength; j++) {
      if (a[i] == b[j]) {
        intersection.add(a[i]);
      }
    }
  }
  return Array.from(intersection);
}

function getExclusionA(a, b) {
  var exclusionA = new Set(a);
  var alength = a.length;
  var blength = b.length;

  if (alength < blength) {
    var tempo = b;
    b = a;
    a = tempo;
  }
  for (let i = 0; i < alength; i++) {
    for (let j = 0; j < blength; j++) {
      if (a[i] == b[j]) {
        exclusionA.delete(a[i]);
      }
    }
  }
  return Array.from(exclusionA);
}
