<template>
  <div class="container top-10" ref="container">
    <div>
      <img class="w-full h-full absolute top-0 left-0 z-[99999]" src="@/assets/leap/test/333.png" alt="">
      <img class="w-full h-full absolute top-0 left-0 z-[999999]" src="@/assets/leap/test/44.png" alt="">
      <img class="w-full h-full absolute top-0 left-0 z-[99]" src="@/assets/leap/test/222.png" alt="">
      <img class="w-full h-full absolute top-0 left-0 z-[999]" src="@/assets/leap/test/22.png" alt="">
      <img class="w-full h-full absolute top-0 left-0 z-[999]" src="@/assets/leap/test/11.png" alt="">

      <!-- Use dynamically calculated canvas size -->
      <canvas ref="canvas" class="opacity-[40%] absolute left-0 top-0 z-[9999]"></canvas>
      <div class="w-[7.66rem] h-[3.75rem]  absolute top-0 left-[-6.2rem] z-[9999999]">
        <img class="w-full h-full" src="@/assets/leap/test/logo.svg" alt="">
      </div>
      <div class="w-[45.58rem] h-[3.6rem] absolute top-0 left-[-6rem] z-[99999]">
        <img class="w-full h-full  " src="@/assets/leap/test/11111.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import { ref, onMounted, onBeforeUnmount } from 'vue';
import simpleheat from './simpleheat'; // Import simpleheat
import generateRandomPoints from './data'; // Import the data generation function

export default {
  name: 'HeatmapDemo',
  setup() {
    const canvas = ref(null);
    const container = ref(null); // Ref for the parent container
    const radius = ref(42); // Default radius
    const blur = ref(25);   // Default blur
    const heatmapData = ref([]); // Initially empty data

    let heatmap;
    let dataInterval;

    // Resize the canvas whenever the parent container's size changes
    const resizeCanvas = () => {
      if (container.value && canvas.value) {
        const { width, height } = container.value.getBoundingClientRect();
        canvas.value.width = width;
        canvas.value.height = height;

        // Reinitialize heatmap with the new dimensions
        heatmap = simpleheat(canvas.value).data(generateRandomPoints(width, height)).max(1500);
        heatmap.radius(radius.value, blur.value);

        // Redraw heatmap after reinitialization
        requestAnimationFrame(drawHeatmap);
      }
    };

    // Watch for container size changes and update canvas and heatmapData
    onMounted(() => {
      console.log("___-----------")
      resizeCanvas(); // Set initial canvas size and heatmap data
      window.addEventListener('resize', resizeCanvas); // Add event listener for resizing

      // Set the initial heatmap data
      heatmap = simpleheat(canvas.value).data(generateRandomPoints(canvas.value.width, canvas.value.height)).max(1500);
      heatmap.radius(radius.value, blur.value);
      requestAnimationFrame(drawHeatmap);

      // Update the heatmap data every 2 seconds
      dataInterval = setInterval(() => {
        // Update heatmap data with new random points every 2 seconds
        const { width, height } = canvas.value.getBoundingClientRect();
        heatmapData.value = generateRandomPoints(width, height); // Use dynamic width/height
        heatmap.data(heatmapData.value); // Update the heatmap data
        requestAnimationFrame(drawHeatmap);
      }, 2000); // 2000ms (2 seconds)
    });

    // Draw the heatmap on the canvas
    function drawHeatmap() {
      if (canvas.value && heatmap) {
        const ctx = canvas.value.getContext('2d');

        // Set the canvas background color to #236f88
        ctx.fillStyle = '#236f88';
        ctx.fillRect(0, 0, canvas.value.width, canvas.value.height); // Fill the canvas with the background color

        console.time('draw');
        heatmap.draw();
        console.timeEnd('draw');
      }
    }

    // Cleanup on component unmount
    onBeforeUnmount(() => {
      clearInterval(dataInterval); // Stop updating data when component is destroyed
      window.removeEventListener('resize', resizeCanvas); // Remove event listener on unmount
    });

    return {
      canvas,
      radius,
      blur,
      container
    };
  }
};
</script>

<style scoped>
body {
  text-align: center;
  font: 16px/1.4 "Helvetica Neue", Arial, sans-serif;
}

.container {
  width: 70.08rem;
  height: 47.75rem;
  margin: 0 auto;
  position: relative;
}

.options {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  line-height: 1;
}

.options input {
  width: 200px;
}

.options label {
  width: 60px;
  float: left;
  text-align: right;
  margin-right: 10px;
  color: #555;
}
</style>
