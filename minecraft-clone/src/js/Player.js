import * as THREE from "three";
import * as CANNON from "cannon-es";
import { forEach } from "lodash";

export class Player {
  //var moveBackward, moveForward, moveRight, moveLeft, jump = useKeyboard()

  plrGeom = new THREE.BoxGeometry();
  plrMat = new THREE.MeshBasicMaterial();
  mesh = new THREE.Mesh(this.plrGeom, this.plrMat);

  constructor({ camera, controls, mesh }) {
    this.actionMap = {
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
    this.controls = controls;

    this.mesh = new THREE.Mesh(this.plrGeom, this.plrMat);
    this.mass = 1;
    this.movementSpeed = 2.5;
    this.jumpForce = 3;
    this.playerShape = new CANNON.Box(new CANNON.Vec3(1, 1, 1));
    this.playerBody = new CANNON.Body({ mass: this.mass });
    this.playerBody.addShape(this.playerShape);

    //this.updatePlayer();
  }
  updatePosition() {
    //console.log('player pos update =', this.mesh.position);
    this.camera.position.copy(this.mesh.position);
  }
  updatePlayer() {
    this.updatePosition();
    this.useAction();
  }
  useAction() {
    Object.keys(this.actionMap).forEach((action) => {
      if (this.actionMap[action]) {
        console.log("useAction " + action);
        //this.setMovement(action);
      }
    });
    if (this.actionMap["jump"] && Math.abs(this.playerBody.velocity.y) < 0.05) {
      this.playerBody.velocity.set(0, this.jumpForce, 0);
    }
    const direction = new THREE.Vector3();

    const frontVector = new THREE.Vector3(
      0,
      0,
      (this.actionMap["moveBackward"] ? 1 : 0) -
        (this.actionMap["moveForward"] ? 1 : 0)
    );

    const sideVector = new THREE.Vector3(
      (this.actionMap["moveLeft"] ? 1 : 0) -
        (this.actionMap["moveRight"] ? 1 : 0),
      0,
      0
    );
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(this.movementSpeed)
      .applyEuler(this.camera.rotation);

    this.playerBody.velocity.x = direction.x;
    this.playerBody.velocity.z = direction.z;
  }
}
