import * as THREE from "./build/three.module.js";


let camera, scene, renderer;

function init () {
    //camera
    camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        15000
    );

    //scene
    scene = new THREE.Scene();

    //geometry
    const size = 250;
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 50, //輝度
    });

    for(let i = 0; i < 2500; i++) {
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
    }
}
