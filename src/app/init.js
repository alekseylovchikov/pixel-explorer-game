import * as PIXI from 'pixi.js';

const canvas = document.getElementById('canvas');

const app = new PIXI.Application({
  view: canvas,
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});

export { app, PIXI };
