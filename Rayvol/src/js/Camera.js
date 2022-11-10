import * as THREE from 'three';

export const cmObj = {
    camera : null,
    initCamera : () => {
        cmObj.camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight),0.1,1000);
        cmObj.camera.position.set( 0, 0.2 , 0.8 );
        cmObj.camera.lookAt(new THREE.Vector3(-0.8,0,0));
    }
};
cmObj.initCamera();
