import * as BABYLON from '@babylonjs/core';

const createScene = (canvas) => {
    const engine = new BABYLON.Engine(canvas);

    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.Black()

    const sunLight = new BABYLON.DirectionalLight(
        'SunLight',
        new BABYLON.Vector3(1, 0, 0),
        scene
    );

    let camera;
    let sun;

    makeCamera();
    createSun();
    createMercury();
    createVenus();
    createEarth();
    createMars();
    createJupiter();
    createSaturn();
    createUranus();
    createNeptune();

    engine.runRenderLoop(() => {
        scene.render();
        sun.rotation.y = sun.rotation.y + .001;
        console.log(camera.position)
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
        camera.position = new BABYLON.Vector3(-74, 20, -81);
        }

    function createSun() {
        sun = BABYLON.MeshBuilder.CreateSphere('sun', { diameter: 15 }, scene);

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

    function createVenus() {
        const venus = new BABYLON.CreateSphere(
            'venus',
            { diameter: 9.5 },
            scene
        );
        venus.position = new BABYLON.Vector3(846.2, 0, 0);

        const venusMaterial = new BABYLON.StandardMaterial(
            'venusMaterial',
            scene
        );
        venusMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/venus.jpg',
            scene
        );
        venusMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        venusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        venus.material = venusMaterial;
    }

    function createEarth() {
        const earth = new BABYLON.CreateSphere(
            'earth',
            { diameter: 10 },
            scene
        );
        earth.position = new BABYLON.Vector3(1167.7, 0, 0);

        const earthMaterial = new BABYLON.StandardMaterial(
            'earthMaterial',
            scene
        );
        earthMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/earth.jpg',
            scene
        );
        earthMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        earthMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        earth.material = earthMaterial;
    }

    function createMars() {
        const mars = new BABYLON.CreateSphere('mars', { diameter: 5.3 }, scene);
        mars.position = new BABYLON.Vector3(1779.4, 0, 0);

        const marsMaterial = new BABYLON.StandardMaterial(
            'marsMaterial',
            scene
        );
        marsMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/mars.jpg',
            scene
        );
        marsMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        marsMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        mars.material = marsMaterial;
    }

    function createJupiter() {
        const jupiter = new BABYLON.CreateSphere(
            'jupiter',
            { diameter: 10.97 },
            scene
        );
        jupiter.position = new BABYLON.Vector3(6093.1, 0, 0);

        const jupiterMaterial = new BABYLON.StandardMaterial(
            'jupiterMaterial',
            scene
        );
        jupiterMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/jupiter.jpg',
            scene
        );
        jupiterMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        jupiterMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        jupiter.material = jupiterMaterial;
    }

    function createSaturn() {
        const saturn = new BABYLON.CreateSphere(
            'saturn',
            { diameter: 9.14 },
            scene
        );
        saturn.position = new BABYLON.Vector3(11230.3, 0, 0);

        const saturnMaterial = new BABYLON.StandardMaterial(
            'saturnMaterial',
            scene
        );
        saturnMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/saturn.jpg',
            scene
        );
        saturnMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        saturnMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        saturn.material = saturnMaterial;
    }

    function createUranus() {
        const uranus = new BABYLON.CreateSphere(
            'uranus',
            { diameter: 3.98 },
            scene
        );
        uranus.position = new BABYLON.Vector3(22595, 0, 0);

        const uranusMaterial = new BABYLON.StandardMaterial(
            'uranusMaterial',
            scene
        );
        uranusMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/uranus.jpg',
            scene
        );
        uranusMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        uranusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        uranus.material = uranusMaterial;
    }

    function createNeptune() {
        const neptune = new BABYLON.CreateSphere(
            'neptune',
            { diameter: 3.86 },
            scene
        );
        neptune.position = new BABYLON.Vector3(35371.4, 0, 0);

        const neptuneMaterial = new BABYLON.StandardMaterial(
            'neptuneMaterial',
            scene
        );
        neptuneMaterial.diffuseTexture = new BABYLON.Texture(
            'src/textures/neptune.jpg',
            scene
        );
        neptuneMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        neptuneMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        neptune.material = neptuneMaterial;
    }
};

export { createScene };
