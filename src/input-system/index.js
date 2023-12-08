const keys = {};

function keydown(event) {
  keys[event.code] = true;
}

function keyup(event) {
  keys[event.code] = false;
}

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

export default keys;
