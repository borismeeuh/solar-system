import * as BABYLON from '@babylonjs/core';

const createScene = (canvas) => {
    const engine = new BABYLON.Engine(canvas);
    const scene = new BABYLON.Scene(engine);
    const sunLight = new BABYLON.DirectionalLight(
        'SunLight',
        new BABYLON.Vector3(1, 0, 0),
        scene
    );

    let camera;

    makeCamera();
    createSun();
    createMercury();

    engine.runRenderLoop(() => {
        scene.render();
        console.log(camera.position);
    });

    window.addEventListener('resize', () => {
        engine.resize();
    });

    function makeCamera() {
        camera = new BABYLON.ArcRotateCamera(
            'camera1',
            BABYLON.Tools.ToRadians(90),
            BABYLON.Tools.ToRadians(90),
            20,
            new BABYLON.Vector3(0, 0, 0),
            scene
        );
        camera.attachControl(canvas.value, true);
        camera.radius = 25;
        camera.wheelPrecision = 5;
        camera.position = new BABYLON.Vector3(-23.76, 0.06, 8.06);
    }

    function createSun() {
        const sun = BABYLON.MeshBuilder.CreateSphere(
            'sun',
            { diameter: 10.9 },
            scene
        );

        const sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene);
        sunMaterial.emissiveColor = new BABYLON.Color3(1, 0.5, 0);
        sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        sunMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/sun.jpg',
            scene
        );
        sun.material = sunMaterial;

        let sunlight = new BABYLON.GlowLayer('sunlight', scene);
        sunlight.intensity = 0.4;
    }

    function createMercury() {
        const mercury = BABYLON.MeshBuilder.CreateSphere(
            'mercury',
            { diameter: 3.8 },
            scene
        );
        mercury.position = new BABYLON.Vector3(454.1, 0, 0);
        const mercuryMaterial = new BABYLON.StandardMaterial(
            'mercuryMaterial',
            scene
        );
        mercuryMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/mercury.jpg',
            scene
        );
        mercuryMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        mercuryMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        mercury.material = mercuryMaterial;
    }
};

export { createScene };
