import * as BABYLON from '@babylonjs/core';

const createScene = (canvas) => {
    const engine = new BABYLON.Engine(canvas);
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera(
        'camera1',
        BABYLON.Tools.ToRadians(45),
        BABYLON.Tools.ToRadians(45),
        20,
        new BABYLON.Vector3(0, 0, 0),
        scene
    );
    camera.attachControl(canvas.value, true);

    const sun = BABYLON.MeshBuilder.CreateSphere(
        'sun',
        { diameter: 10 },
        scene
    );

    const sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene);
    sunMaterial.emissiveColor = new BABYLON.Color3(1, .5, 0)
    sunMaterial.diffuseTexture = new BABYLON.Texture(
        'src/textures/sun.jpg',
        scene
    );
    sun.material = sunMaterial;

    let sunlight = new BABYLON.GlowLayer("sunlight", scene);
    sunlight.intensity = 0.4;

    camera.setTarget(sun.position);




    
    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener('resize', () => {
        engine.resize();
    });
};

export { createScene };
