import * as THREE from "three";
import * as CANNON from "cannon-es";
import * as ct from "./Controls.js";
import * as sc from "./Scene.js";
import * as mn from "./main";

export class Player {
  plrGeom = new THREE.SphereGeometry(1.5);
  plrMat = new THREE.MeshBasicMaterial();
  mesh = new THREE.Mesh(this.plrGeom, this.plrMat);

  constructor({ camera, mesh }) {
    this.actionMap = {
      leftClick: false,
      rightClick: false,
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      jump: false,
      texture1: false,
      texture3: false,
      texture4: false,
      texture5: false,
    };

    this.camera = camera;
    this.controls = new ct.Controls({ player: this });

    this.mesh = new THREE.Mesh(this.plrGeom, this.plrMat);
    this.mass = 1;
    this.movementSpeed = 4;
    this.jumpForce = 5;
    this.playerShape = new CANNON.Sphere(1.5);
    this.playerBody = new CANNON.Body({ mass: this.mass });
    this.playerBody.addShape(this.playerShape);

    //this.updatePlayer();
  }

  updatePlayer() {
    this.updatePosition();
    this.useAction();
  }
  updatePosition() {
    //console.log('player pos update =', this.mesh.position);
    this.camera.position.copy(this.mesh.position);
  }
  useAction() {
    if (this.actionMap["jump"] && Math.abs(this.playerBody.velocity.y) < 0.05) {
      this.playerBody.velocity.set(0, this.jumpForce, 0);
    }
    if (this.actionMap["rightClick"]) {
      this.controls.raycaster.setFromCamera(this.controls.mouse, this.camera);
      let intersects = this.controls.raycaster.intersectObjects(
        sc.scene.children
      );
      if (intersects.length > 0) {
        this.placeBlock(intersects[0], "cobblestone");
      }
      mn.blocks.useStorage();
    }
    if (this.actionMap["leftClick"]) {
      this.controls.raycaster.setFromCamera(this.controls.mouse, this.camera);
      let intersects = this.controls.raycaster.intersectObjects(
        sc.scene.children
      );

      if (intersects.length > 0) {
        this.removeBlock(intersects[0]);
      }
    }
    const direction = new THREE.Vector3();

    const frontVector = new THREE.Vector3(
      0,
      0,
      (this.actionMap["moveBackward"] ? 1 : 0) -
        (this.actionMap["moveForward"] ? 1 : 0)
    );

    const sideVector = new THREE.Vector3(
      (this.actionMap["moveRight"] ? 1 : 0) -
        (this.actionMap["moveLeft"] ? 1 : 0),
      0,
      0
    );

    direction.addVectors(frontVector, sideVector);
    direction.normalize();
    direction.multiplyScalar(this.movementSpeed);
    direction.applyEuler(this.camera.rotation);

    this.playerBody.velocity.set(
      direction.x,
      this.playerBody.velocity.y,
      direction.z
    );
  }
  placeBlock(block, blockType) {
    let position = block.object.position;
    let normal = block.face.normal;

    position.addVectors(position, normal);
    mn.storage.addBlock({
      type: blockType,
      position: position,
    });
  }
  removeBlock(block) {
    mn.storage.removeBlock();
  }
}
