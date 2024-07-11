import {
    Engine,
    Scene,
    FreeCamera,
    Vector3,
    MeshBuilder,
    StandardMaterial,
    Color3,
    HemisphericLight,
    ArcRotateCamera,
    UniversalCamera,
    Tools
} from '@babylonjs/core';

const createScene = (canvas) => {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera(
        'camera1',
        Tools.ToRadians(45),
        Tools.ToRadians(45),
        20,
        new Vector3(0, 0, 0),
        scene
    );
    const sun = MeshBuilder.CreateSphere('sun', { diameter: 10 }, scene);

    camera.setTarget(sun.position);
    camera.attachControl(canvas.value, true);

    const material = new StandardMaterial('box-material', scene);

    new HemisphericLight('light', Vector3.Up(), scene);

    material.diffuseColor = Color3.Blue();
    sun.material = material;

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener('resize', () => {
        engine.resize();
    });
};

export { createScene };
