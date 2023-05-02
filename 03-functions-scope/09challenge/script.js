// Challenge 1

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
