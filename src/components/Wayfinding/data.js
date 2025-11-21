const width = 841;
const height = 573;

// Function to generate random points with adjusted intensity
function generateRandomPoints(width, height, numPoints = 500) {
  const points = [];
  
  for (let i = 0; i < numPoints; i++) {
    // Random x position within the canvas width
    const x = Math.floor(Math.random() * width);

    // Random y position within the canvas height
    const y = Math.floor(Math.random() * height);

    // Adjust intensity based on the position
    let intensity;
    
    // For points near the bottom-left corner, assign intensity around 700
    if (x < width / 1.5 && y > height * 2 / 3) {
      intensity = Math.floor(Math.random() * (800 - 600 + 1)) + 700; // Range around 700
    } else {
      // For other points, assign intensity around 400
      intensity = Math.floor(Math.random() * (500 - 300 + 1)) + 300; // Range around 400
    }

    // Add point to the array
    points.push([x, y, intensity]);
  }

  return points;
}

// Generate data with points filling the canvas
export default generateRandomPoints;
