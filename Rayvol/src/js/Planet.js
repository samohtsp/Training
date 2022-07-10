import * as THREE from 'three';

var geometry  = new THREE.SphereBufferGeometry(1,20,20);
const material = new THREE.MeshStandardMaterial( { color:0xffffff } );
var planet =  new THREE.Mesh(geometry, material );
planet.position.set(0,0,0);
scObj.scene.add(planet);