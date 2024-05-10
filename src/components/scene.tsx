import * as THREE from "three";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";

const Scene = () => {
  const mount = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mount.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      120,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const camPos = new THREE.Vector3(0, -2, 0.25);
    camera.position.set(camPos.x, camPos.y, camPos.z);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Enable shadows in the renderer
    renderer.shadowMap.enabled = true;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enabled = false;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x060342, 10);
    scene.add(ambientLight);

    // Add directional light
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(0, -3, 5);
    dirLight.castShadow = true; // default false
    scene.add(dirLight);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera
    );
    outlinePass.edgeStrength = 7.5; // The strength of the edges
    outlinePass.edgeGlow = 0.5; // The amount of glow
    outlinePass.edgeThickness = 0.75; // The thickness of the edges
    outlinePass.visibleEdgeColor.set("#9370db"); // The color of the visible edges
    outlinePass.hiddenEdgeColor.set("#ffffff"); // The color of the hidden edges
    composer.addPass(outlinePass);

    const clock = new THREE.Clock();
    let mixer: THREE.AnimationMixer;
    const loader = new GLTFLoader();
    loader.load(
      "/models/Name/name.gltf",
      function (gltf) {
        gltf.scene.rotation.set(1.5708, 0, 0);
        scene.add(gltf.scene);

        gltf.scene.traverse(function (object) {
          if (object instanceof THREE.Mesh) {
            object.material = new THREE.MeshPhongMaterial({
              color: 0x2929ff,
              transparent: true,
              opacity: 1,
            });
            outlinePass.selectedObjects.push(object);
          }
        });

        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.setLoop(THREE.LoopOnce, 1);
          action.clampWhenFinished = true;
          action.play();
        });
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    const animate = function () {
      requestAnimationFrame(animate);

      composer.render();

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
    };

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mount.current) {
      mount.current.appendChild(renderer.domElement);
    }

    if (currentMount) {
      currentMount.appendChild(renderer.domElement);
    }

    animate();

    return () => {
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="pointer-events-none" ref={mount} />;
};

export default Scene;
