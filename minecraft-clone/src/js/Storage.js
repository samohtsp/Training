import "../css/main.css";
import * as THREE from "three";

import * as BLK from "./Block";
import { nanoid } from "nanoid";
import * as CANNON from "cannon-es";

export class Storage {
  constructor() {
    this.blocks = [
      {
        key: nanoid(),
        position: { x: 1, y: 1, z: 1 },
        type: "water",
      },
    ];
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
  removeBlock() {}
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
      const blockBody = new CANNON.Body({ mass: 0 });
      blockBody.addShape(blockShape);

      blockBody.position.set(
        storeBlock.position.x,
        storeBlock.position.y,
        storeBlock.position.z
      );

      this.meshes.push(mesh);
      this.bodies.push(blockBody);
      this.world.addBody(blockBody);
      this.scene.add(mesh);
    });
  }
}
