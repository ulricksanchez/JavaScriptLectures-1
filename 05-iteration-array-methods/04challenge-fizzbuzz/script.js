<<<<<<< HEAD
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
=======
//For Loop
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// while loop

let j = 1;
while (j <= 100) {
  if (j % 5 === 0 && j % 3 === 0) {
    console.log('FizzBuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }
  j++;
}
>>>>>>> upstream/master
