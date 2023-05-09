// https://www.toptal.com/developers/keycode

const keyInput = document.getElementById('key1');
const keyInput2 = document.getElementById('key2');
const keyInput3 = document.getElementById('key3');

const onKeyDown = (e) => {
  console.log('e.key');
  document.querySelector('s') = e.key;
};

keyInput.addEventListener('keypress', onKeyDown);
