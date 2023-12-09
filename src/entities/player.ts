import { app, PIXI } from 'src/app/init';
import helpers from 'src/shared/helpers';

const player = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');

helpers.setPosition(player);

app.stage.addChild(player);

export default player;
