import * as BABYLON from '@babylonjs/core';

const createScene = (canvas) => {
    const engine = new BABYLON.Engine(canvas);
    const scene = new BABYLON.Scene(engine);

    const sunLight = new BABYLON.DirectionalLight("SunLight", new BABYLON.Vector3(1, 0, 0), scene);

    makeCamera()
    createSun()

    const mercury = BABYLON.MeshBuilder.CreateSphere(
        'mercury',
        { diameter: 0.38 },
        scene
    );
    mercury.position = new BABYLON.Vector3(0, 0, 0);

    const mercuryMaterial = new BABYLON.StandardMaterial(
        'mercuryMaterial',
        scene
    );
    mercuryMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    mercuryMaterial.diffuseTexture = new BABYLON.Texture(
        'src/textures/mercury.jpg',
        scene
    );
    mercury.material = mercuryMaterial;

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener('resize', () => {
        engine.resize();
    });

    function makeCamera() {
        const camera = new BABYLON.ArcRotateCamera(
            'camera1',
            BABYLON.Tools.ToRadians(0),
            BABYLON.Tools.ToRadians(0),
            20,
            new BABYLON.Vector3(0, 0, 0),
            scene
        );
        camera.attachControl(canvas.value, true);
        camera.radius = 250;
        camera.wheelPrecision = 1;
    }

    function createSun() {
        const sun = BABYLON.MeshBuilder.CreateSphere(
            'sun',
            { diameter: 109 },
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
};

export { createScene };
