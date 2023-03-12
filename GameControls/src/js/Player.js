import * as THREE from "three";
import * as CANNON from "cannon-es";
import * as ct from "./Controls.js";
import * as sc from "./Scene.js";
//import * as mn from "./main";

export class Player {
  plrGeom = new THREE.SphereGeometry(1.5);
  plrMat = new THREE.MeshBasicMaterial();
  mesh = new THREE.Mesh(this.plrGeom, this.plrMat);

  constructor({ camera, mesh, position }) {
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
    this.position = new THREE.Vector3(position.x, position.y, position.z);
    this.mesh = new THREE.Mesh(this.plrGeom, this.plrMat);
    this.mass = 70;
    this.movementSpeed = 4.5;
    this.jumpForce = 5;
    this.playerShape = new CANNON.Sphere(1.5);
    this.playerBody = new CANNON.Body({ mass: this.mass });
    this.playerBody.addShape(this.playerShape);
    this.playerBody.position.copy(this.position);
    this.camera.position.copy(this.position);

    //this.updatePlayer();
  }

  updatePlayer() {
    this.updatePosition();
    this.useAction();
  }
  updatePosition() {
    this.camera.position.copy(this.mesh.position);
  }
  getIntersectObj() {
    this.controls.raycaster.setFromCamera(this.controls.mouse, this.camera);
    let intersects = this.controls.raycaster.intersectObjects(
      sc.scene.children
    );
    if (intersects.length > 0) {
      return intersects[0];
    } else {
      return undefined;
    }
  }

  useAction() {
    if (this.actionMap["jump"] && Math.abs(this.playerBody.velocity.y) < 0.05) {
      this.playerBody.velocity.set(0, this.jumpForce, 0);
    }
    if (this.actionMap["rightClick"]) {
      let intersectObj = this.getIntersectObj();
      if (intersectObj !== undefined) {
      }
    }
    if (this.actionMap["leftClick"]) {
      let intersectObj = this.getIntersectObj();
      if (intersectObj !== undefined) {
      }
    }

    let direction = new THREE.Vector3();
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
    //this.controls.fpv.getDirection(direction);
    direction.applyEuler(this.camera.rotation);

    this.playerBody.velocity.set(
      direction.x,
      this.playerBody.velocity.y,
      direction.z
    );
  }
}
