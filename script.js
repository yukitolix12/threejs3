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
}
