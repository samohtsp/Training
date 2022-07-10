import * as THREE from 'three';

export const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'), powerPreference: "high-performance"
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
