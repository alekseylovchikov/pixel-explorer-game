const keys: Record<string, boolean> = {};

function keydown(event: KeyboardEvent) {
	keys[event.code] = true;
}

function keyup(event: KeyboardEvent) {
	keys[event.code] = false;
}

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

export default keys;
