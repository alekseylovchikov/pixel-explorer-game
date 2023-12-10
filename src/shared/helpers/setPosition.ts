import { app, PIXI } from 'src/app/init';

const setPosition = (gameObject: PIXI.Sprite) => {
	gameObject.anchor.set(0.5);

	gameObject.x = app.screen.width / 2;
	gameObject.y = app.screen.height / 2;
};

export default setPosition;
