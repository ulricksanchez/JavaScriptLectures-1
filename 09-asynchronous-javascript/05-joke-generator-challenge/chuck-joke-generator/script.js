const button = document.querySelector('#joke-btn');
const joke = document.querySelector('#joke');

button.addEventListener('click', generateJoke);

function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('Get', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      joke.innerHTML = data.value;
    } else {
      joke.innerHTML = 'Error loading joke';
    }
  };

  xhr.send();
}

document.addEventListener('DOMContentLoaded', generateJoke);
