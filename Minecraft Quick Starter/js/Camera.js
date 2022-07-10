import * as THREE from 'three';

export var camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight),0.1,1000);
var oldPosition = new THREE.Vector3(0)
oldPosition.set(camera.position.x,camera.position.y,camera.position.z)

camera.position.setX(25);
camera.position.setZ(75);
camera.position.setY(10);

//console.log('cam pos',camera.position)
//console.log('cam old pos',oldPosition)
export var moved = false
export function loadCameraPosition(){
    //console.log('in loadCameraPosition')
    oldPosition.set(camera.position.x,camera.position.y,camera.position.z)
}
export function camPosChanged(){
    //console.log('in updateCam')
    //console.log('cam pos',camera.position)
    //console.log('cam old pos',oldPosition)
    //console.log('equals',(oldPosition.equals(camera.position)))
    if(oldPosition.equals(camera.position)){
        //console.log('camera update')
        moved = false
    }
    else{
        //console.log('no camera update')
        moved = true
    }
}