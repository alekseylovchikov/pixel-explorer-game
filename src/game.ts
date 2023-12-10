import player from 'src/entities/player';
import { app, PIXI } from 'src/app/init';
import coinTexture from 'src/entities/coin';
import keys from 'src/input-system';
import constants from 'src/settings/constants';
import 'src/styles/index.css';

function isColliding(sprite1: PIXI.Sprite, sprite2: PIXI.Sprite) {
	const bounds1 = sprite1.getBounds();
	const bounds2 = sprite2.getBounds();

	return (
		bounds1.x < bounds2.x + bounds2.width &&
		bounds1.x + bounds1.width > bounds2.x &&
		bounds1.y < bounds2.y + bounds2.height &&
		bounds1.y + bounds1.height > bounds2.y
	);
}

app.ticker.add(() => {
	if (keys.ArrowRight) {
		player.x += constants.PLAYER_SPEED;
	}
	if (keys.ArrowLeft) {
		player.x -= constants.PLAYER_SPEED;
	}

	player.x = Math.max(
		0 + player.width,
		Math.min(app.screen.width - player.width, player.x),
	);

	for (const child of app.stage.children) {
		if (child instanceof PIXI.Sprite && child.texture === coinTexture) {
			if (isColliding(player, child)) {
				app.stage.removeChild(child);
			}
		}
	}
});

document.body.appendChild(app.view as HTMLCanvasElement);
