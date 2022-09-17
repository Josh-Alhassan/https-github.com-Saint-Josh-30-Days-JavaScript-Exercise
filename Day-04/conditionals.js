console.log('hello to DAy 04')

// If Statement
/* Example 1 */
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}

/* Example 2 */
let isRaining = true;
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

// If Else statement
let negativeNum = -3
if ( negativeNum > 0 ) {
  console.log(`${negativeNum} is a positive number`)
} else {
  console.log(`${negativeNum} is a negative number`)
}

isRaining = false
if (isRaining) {
  console.log('You need a rain coat')
} else {
  console.log('No need for a rain coat')
}

// if else if-else
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny' ) {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat')
}

// Switch Statement
weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket')
    break
  case 'sunny':
    console.log('Go out freely')
    break
  default:
    console.log('No need for rain coat')
}

// more examples
let dayUserInput = prompt('What day is today')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day ')
}

num = prompt('Enter number')
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Number is zero');
    break;
  case num < 0:
    console.log('Number is negative')
    break;
  default:
    console.log('Entered value was not a number')
}

// Ternary Operator
isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')