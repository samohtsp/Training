import '../css/main.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight),0.1,1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(2, 0.5, 50, 50);
const material = new THREE.MeshStandardMaterial({color:'cyan', wireframe: false});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const geometryCube = new THREE.BoxGeometry(1,1,1,1,1,1);
const materiaCubel = new THREE.MeshStandardMaterial({color:'orange', wireframe: false});
const cube = new THREE.Mesh(geometryCube, materiaCubel);

scene.add(cube);

camera.position.z = 5;



const pointLight_1 = new THREE.PointLight(0xffffff);
pointLight_1.position.set(5, 5, 0);
const pointLight_2 = new THREE.PointLight(0xffffff);
pointLight_2.position.set(-5, 5, 0);
const ambientLight = new THREE.AmbientLight(0xffffff,0.15);
scene.add(pointLight_1,pointLight_2,ambientLight);

//const lightHelper = new THREE.PointLightHelper(pointLight_1)
const gridHelper = new THREE.GridHelper(100,100)
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

const animate = function () {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    cube.rotation.x -= 0.02;
    cube.rotation.y -= 0.02;

    controls.update()
    renderer.render(scene, camera);
};
animate();