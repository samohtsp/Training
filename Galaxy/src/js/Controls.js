import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls'
import { cmObj } from './Camera.js';
import { rdObj } from './Renderer.js';

export const ctrlObj = {
    controls:null,
    initControls : ()=>{
        ctrlObj.controls = new PointerLockControls(cmObj.camera,rdObj.renderer.domElement);
        ctrlObj.controls.movementSpeed = 150;
        ctrlObj.controls.lookSpeed = 0.1;

        /*document.addEventListener('wheel', function (e) {
            //console.log('in event listener e =',e.deltaY )
            if (e.deltaY < 0) {
                ctrlObj.controls.moveForward(5)
            }
            else if (e.deltaY > 0) {
                ctrlObj.controls.moveForward(-5)
            }
        })
        document.addEventListener("keyup", function (e) {
            if (e.key == "w") {
                ctrlObj.controls.moveForward(1)
            }
            else if (e.key == "s") {
                ctrlObj.controls.moveForward(-1)
            }
        });
        
        document.addEventListener("keydown", function (e) {
        
        });*/
    },
};
ctrlObj.initControls();