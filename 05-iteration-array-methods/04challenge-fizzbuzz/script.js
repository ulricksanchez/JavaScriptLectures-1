for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log('Number ' + i + ': Fizz');
  } else if (i % 3 !== 0 && i % 5 === 0) {
    console.log('Number ' + i + ': Buzz');
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log('Number ' + i + ': FizzBuzz');
  } else {
    console.log('Number ' + i);
  }
}
