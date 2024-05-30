<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canva = ref();

onMounted(() => {
    let camera: THREE.Camera,
        scene: THREE.Object3D<THREE.Object3DEventMap>,
        renderer: THREE.WebGLRenderer,
        cube: THREE.Object3D<THREE.Object3DEventMap>,
        controls;
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 28;

    // Hacker cube with border
    let geometry = new THREE.BoxGeometry(20, 20, 20, 20, 20, 20);
    let edges = new THREE.EdgesGeometry(geometry);
    let line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }),
    );
    cube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ wireframe: true }));
    cube.add(line);
    scene.add(cube);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
    });
    renderer.setSize(280, 320);
    canva.value.appendChild(renderer.domElement);

    // Make cube rotate when drag only horizontally
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;

    let ambientLight = new THREE.AmbientLight(0xffffff); // soft white light
    ambientLight.castShadow = true;

    scene.add(ambientLight);

    animate();

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
});
</script>

<template>
    <div ref="canva"></div>
</template>
