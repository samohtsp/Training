import * as THREE from 'three';

/*const loader = new THREE.TextureLoader();

var texture = loader.load( 'smoke.png');

const cloudGeo = new THREE.PlaneBufferGeometry( 300, 300 );

const cloudMaterial = new THREE.MeshLambertMaterial( { 
    alphaMap : texture,
    transparent : true ,
    side: DoubleSide,
    color :0xffffff
} );

let cloudParticles = []
for(let p=0; p<50; p++) {
    let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
    //cloud.castShadow = true;
    //cloud.scale.set(300,300,1); //THREE.Vector3(500,500,0);
    
    cloud.position.set(0, 0, 0);
    if(p>0){cloud.rotation.x = cloudParticles[p-1].rotation.x++;}
    else{cloud.rotation.x = 1.1};
    //cloud.rotation.z = Math.random()*2*Math.PI;
    cloud.material.opacity = 0.75;
    cloudParticles.push(cloud);
    scObj.scene.add(cloud);
    cloudParticles.push(cloud);
};
cloudParticles.forEach( p => {
    p.rotation.z -= 0.001;
    } )*/

