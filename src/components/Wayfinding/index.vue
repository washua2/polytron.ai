<template>
  <div class="container1" ref="container">
    <div>
      <!-- Use dynamically calculated canvas size -->
      <canvas ref="canvas" class="opacity-[100%] absolute left-0 top-0 z-[9999]" v-show="isSwitch"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch, defineProps } from 'vue';
import simpleheat from './simpleheat'; // Import simpleheat
import generateRandomPoints from './data'; // Import the data generation function

export default {
  name: 'HeatmapDemo',
  props: {
    isSwitch: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
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

        const baseDesignWidth = 1336;
        const screenWidth = window.screen.width;

        // 屏幕分辨率缩放（相对 1080p）
        const resolutionScale = screenWidth / 1920;

        // 容器缩放比
        const scaleFactor = width / (baseDesignWidth * resolutionScale);

        // ⭐ radius & blur 同时用两个缩放因子
        const finalRadius = 42 * scaleFactor * resolutionScale;
        const finalBlur = 25 * scaleFactor * resolutionScale;

        radius.value = finalRadius;
        blur.value = finalBlur;

        heatmap = simpleheat(canvas.value)
          .data(generateRandomPoints(width, height))
          .max(15000);

        heatmap.radius(radius.value, blur.value);

        requestAnimationFrame(drawHeatmap);
      }
    };


    // Watch for changes to isSwitch
    watch(() => props.isSwitch, (newValue) => {
      if (newValue) {
        // Start updating the heatmap when isSwitch is true
        startUpdatingHeatmap();
      } else {
        // Stop updating the heatmap when isSwitch is false
        stopUpdatingHeatmap();
      }
    });

    // Start the heatmap updates
    const startUpdatingHeatmap = () => {
      dataInterval = setInterval(() => {
        // Update heatmap data with new random points every 2 seconds
        const { width, height } = canvas.value.getBoundingClientRect();
        heatmapData.value = generateRandomPoints(width, height); // Use dynamic width/height
        heatmap.data(heatmapData.value); // Update the heatmap data
        requestAnimationFrame(drawHeatmap);
      }, 2000); // 2000ms (2 seconds)
    };

    // Stop the heatmap updates
    const stopUpdatingHeatmap = () => {
      clearInterval(dataInterval); // Clear the interval to stop updates
    };

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
      stopUpdatingHeatmap(); // Stop updating data when component is destroyed
      window.removeEventListener('resize', resizeCanvas); // Remove event listener on unmount
    });

    // Initial setup
    onMounted(() => {
      resizeCanvas(); // Set initial canvas size and heatmap data
      window.addEventListener('resize', resizeCanvas); // Add event listener for resizing

      // Set the initial heatmap data
      heatmap = simpleheat(canvas.value).data(generateRandomPoints(canvas.value.width, canvas.value.height)).max(1500);
      heatmap.radius(radius.value, blur.value);
      requestAnimationFrame(drawHeatmap);

      // Start heatmap updates if isSwitch is true
      if (props.isSwitch) {
        startUpdatingHeatmap();
      }
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
.container1 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
