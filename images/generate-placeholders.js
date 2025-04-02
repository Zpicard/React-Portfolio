import fs from 'fs';
import { createCanvas } from 'canvas';

const projects = [
  { name: 'project1', title: 'Full Stack Web App' },
  { name: 'project2', title: 'Data Visualization' },
  { name: 'project3', title: 'ML Model' },
  { name: 'code1', title: 'Code Snippet 1' },
  { name: 'code3', title: 'Code Snippet 3' },
];

const width = 800;
const height = 600;

projects.forEach(project => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#2c3e50');
  gradient.addColorStop(1, '#3498db');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(project.title, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/images/${project.name}.jpg`, buffer);
}); 