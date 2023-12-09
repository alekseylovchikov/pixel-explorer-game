import { app, PIXI } from 'src/app/init';

const coinTexture = PIXI.Texture.from(
  'https://art.pixilart.com/b0af26d6f43b802.png',
);

const y = app.screen.height / 2;

const coinPositions = [
  { x: 100, y },
  { x: 200, y },
  { x: 300, y },
  { x: 400, y },
  { x: 500, y },
  { x: 600, y },
  { x: 700, y },
];

coinPositions.forEach((pos) => {
  const coin = new PIXI.Sprite(coinTexture);

  coin.width = 20;
  coin.height = 20;

  coin.x = pos.x;
  coin.y = pos.y;

  app.stage.addChild(coin);
});

export default coinTexture;
