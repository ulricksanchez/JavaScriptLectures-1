// Challenge 1
<<<<<<< HEAD

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)}\xB0C`);

// Challenge 2

const minMax = (numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers),
});

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3

(function (area) {
  const length = 10;
  const width = 5;
  console.log(
    'The area of a rectangle with a length of ' +
      length +
      ' and a width of ' +
      width +
      ' is ' +
      length * width +
      '.'
  );
})();
=======
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;// }

const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCelsius(35)} \xB0C `);

//Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { min, max };
}

console.log(minMax([2, 31, 4, 5, 6]));

//Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(72, 11);
>>>>>>> upstream/master
