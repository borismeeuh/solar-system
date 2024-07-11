<template>
    <canvas id="canvas" class="canvas" ref="canvas" />
</template>
<script lang="ts" setup>
// @ts-ignore
import { createScene } from '../scenes/SolarSystem';
import { ref, watch } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);

watch(canvas, () => {
    if (canvas.value) {
        createScene(canvas.value);
    }
});
</script>
<style>
body {
    overflow: hidden;
}

.canvas {
    width: 100vw;
    height: 100vh;
    outline: none;
}
</style>