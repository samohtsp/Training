import "../pages/css/main.css";

import * as BLK from "./Block";
import { nanoid } from "nanoid";
import * as CANNON from "cannon-es";

export class Storage {
  constructor() {
    this.blocks = [];
    this.initStore();
  }

  addBlock({ type: typ, position: { x, y, z } }) {
    console.log("added a block");
    this.blocks.push({
      key: nanoid(),
      position: { x, y, z },
      type: typ,
    });
  }

  setTexture() {}
  saveWorld() {}
  resetWorld() {}
  initStore() {}
}

export class BlocksArray {
  constructor({ storage, meshes, bodies, world, scene }) {
    this.storage = storage;
    this.meshes = meshes;
    this.bodies = bodies;
    this.world = world;

    this.scene = scene;
    this.renderList = [];

    this.initBlocks();
  }

  initBlocks() {
    this.useStorage();
  }

  filterByPosition({ blocksArray, position }) {
    //console.log("filter By Position");
    let newArray = blocksArray.filter((block) => {
      if (
        block.position.x === position.x &&
        block.position.y === position.y &&
        block.position.z === position.z
      ) {
        // console.log(Object.values(block));
        return false;
      } else {
        return true;
      }
    });
    return newArray;
  }
  findByPosition({ blocksArray, position }) {
    let object = blocksArray.find((block) => {
      if (
        block.position.x === position.x &&
        block.position.y === position.y &&
        block.position.z === position.z
      ) {
        return true;
      } else {
        return false;
      }
    });
    // console.log("obj " + Object.values(object));
    return object;
  }
  addBlock({ type, position }) {
    console.log("blocksArray ADD");
    // console.log("position 2 " + Object.values(position));
    let block = new BLK.Block({ blockType: type });
    let mesh = block.mesh;
    mesh.position.set(position.x, position.y, position.z);
    const blockShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
    let blockBody = new CANNON.Body({ mass: 0 });
    blockBody.addShape(blockShape);
    blockBody.position.set(position.x, position.y, position.z);
    mesh.isBlock = true;

    this.meshes.push(mesh);
    this.scene.add(mesh);
    this.bodies.push(blockBody);
    this.world.addBody(blockBody);
    return;
  }

  removeBlock({ block, position }) {
    console.log("blocksArray RM");

    let blockBody = this.findByPosition({
      blocksArray: this.bodies,
      position: position,
    });

    let blockMesh = this.scene.getObjectById(block.object.id);

    this.meshes = this.filterByPosition({
      blocksArray: this.meshes,
      position: position,
    });

    this.bodies = this.filterByPosition({
      blocksArray: this.bodies,
      position: position,
    });

    this.storage.blocks = this.filterByPosition({
      blocksArray: this.storage.blocks,
      position: position,
    });

    this.world.removeBody(blockBody);
    this.scene.remove(blockMesh);
    // blockMesh.geometry.dispose();
    // blockMesh.material.dispose();
    // blockMesh = undefined;
    return;
  }
  useStorage() {
    //console.log("storage length " + this.storage.blocks.length);

    this.storage.blocks.forEach((storeBlock) => {
      //console.log("type = " + storeBlock.type);
      let block = new BLK.Block({ blockType: storeBlock.type });
      let mesh = block.mesh;
      mesh.position.set(
        storeBlock.position.x,
        storeBlock.position.y,
        storeBlock.position.z
      );
      const blockShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
      let blockBody = new CANNON.Body({ mass: 0 });
      blockBody.addShape(blockShape);

      blockBody.position.set(
        storeBlock.position.x,
        storeBlock.position.y,
        storeBlock.position.z
      );
      mesh.isBlock = true;
      this.meshes.push(mesh);
      this.bodies.push(blockBody);
      this.world.addBody(blockBody);
      this.scene.add(mesh);
    });
  }
}
