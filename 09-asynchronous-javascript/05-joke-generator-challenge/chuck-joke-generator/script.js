// const jokeBtn = document.querySelector('#joke-btn');
// const jokeText = document.querySelector('#joke');

// jokeBtn.addEventListener('click', generateJoke);

// function generateJoke() {
//   const xhr = new XMLHttpRequest();
//   const url = 'https://api.chucknorris.io/jokes/random';

//   xhr.open('GET', url, true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const jokeData = JSON.parse(this.responseText);
//       jokeText.innerHTML = jokeData.value;
//     } else {
//       jokeText.innerHTML = 'Oops! Something went wrong.';
//     }
//   };

//   xhr.onerror = function () {
//     jokeText.innerHTML = 'Oops! Something went wrong.';
//   };

//   xhr.send();
// }

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
