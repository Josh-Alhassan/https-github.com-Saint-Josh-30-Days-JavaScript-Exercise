import '../index.js';

console.log(' ');
console.log('#########################');
console.log('Hello Day 2');
console.log('#########################');

/*
  Primitive Data types are immutable (non-modifiable)
*/
let word = 'JavaScript';
console.log(word);

// Throws error
// word[0] = 'Y';
console.log(word);

// Primitive Data types are compared by its values
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo);

// Next Check
let js = 'JavaScript';
let py = 'Python';
console.log(js == py);

// Next Check
let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);

/*
  Non-Primitive Data Types are mutable or modifiable. They cannot be compared by value
*/

// Arrays are mutable
let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);

// ** Rule of Thumb Non-primitive data types (functions, array, or Objects) cannot be compared by value
let numArrOne = [1, 2, 3];
let numArrTwo = [1, 2, 3];
console.log(numArrOne == numArrTwo); //False

let userOne = {
  name: 'Joshua',
  role: 'Student',
  country: 'Nigeria',
};

let userTwo = {
  name: 'Joshua',
  role: 'Student',
  country: 'Nigeria',
};
console.log(userOne == userTwo); // false

// Two object are only strictly equal if they refer to the same underlying object
userTwo = userOne;
console.log(userOne == userTwo); // true

/*
  NUMBERS - are integers and decimal values which can do all arithmetic operations
*/

// Declaring Number Data type
let age = 24;
const gravity = 9.81;
let mass = 72;
const PI = 3.14;
const boildingPoint = 100;
const bodyTemp = 37;

console.log(age, gravity, mass, PI, boildingPoint, bodyTemp);

// Math Objects
const mathPI = Math.round(PI);
console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

/*
  The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...
*/
let randomNum = Math.random(); // generates 0 to 0.999...
console.log(randomNum);

let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // this gives between 0 and 10


/*
  STRING - Strings are texts, which are under single , double, back-tick quote.
*/

// Declaring different variables of different data types
let space = ' '
let firstName = 'Joshua'
let lastName = 'Alhassan'
let country = 'Nigeria'
let city = 'Lokoja'
let language = 'JavaScript'
let job = 'student'
let strAge = 24


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + strAge + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)

// If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line.

const paragraph = "My name is Joshua Alhassan. I live in Nigeria, Kogi State.\
I am a student and I love learning. I am learning JavaScript, React, Redux, \
Learning JavaScript now is one of the most rewarding and inspiring moment.\
Now, we are in 2020. I am enjoying learning the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// Escape Sequence in Strings
console.log('I am enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// ##############
// String Method
// ##############

// 1. length
let strJS = 'JavaScript';
console.log(strJS.length);

// 2. Accessing Characters in a string
let firstLetter = strJS[0];
console.log(firstLetter);

let lastIndex = strJS.length - 1;
console.log(lastIndex);
console.log(strJS[lastIndex]);

// 3. toUpperCase()
console.log(strJS.toUpperCase());
let strFirstName = 'Joshua';
console.log(strFirstName.toUpperCase());

// 4. toLowerCase()
let strCountry = 'Nigeria';
console.log(strCountry.toLowerCase())
console.log(strFirstName.toLowerCase());

// 5. substr()
console.log(strJS.substr(4,6));
console.log(strCountry.substr(4,10));

// 6. substring()
console.log(strJS.substring(0,4));

// 7. split()
let strSentence = '30 Days of JavaScript';

console.log(strSentence.split());
console.log(strSentence.split(' '));

let strCountries = ' Nigeria, Ghana, Cameroon, South Africa';
console.log(strCountries.split());
console.log(strCountries.split(', '))

// 8. trim()
let trmString = '   30 Days of JavaScript   ';
console.log(trmString);
console.log(trmString.trim(' '))

// 9. includes()
console.log(strSentence.includes('Days'))
console.log(strSentence.includes('days')) // .includes() is case sentitive
console.log(strSentence.includes('Script'))

console.log(strCountry.includes('Nig'));

// 10. replace()
// string.replace(oldsubstring, newsubstring)
console.log(strSentence.replace('JavaScript', 'React'));

// 11. charAt(index)
console.log(strSentence.charAt(0));
console.log(strSentence.charAt(lastIndex))

// 12. charAtCode(index) Returns ASCII NUMBER of the value
console.log(strSentence.charCodeAt(3))

// 13. indexOf()
console.log(strSentence.indexOf('J'))

// 14. lastIndexOf()
console.log(strSentence.lastIndexOf('JavaScript'));

// 15. concat(substring, substring, substring)
let strNum = "50";
console.log(strNum.concat("Days", "of", "JavaScript"));

// 16. startsWith() - returns boolean
// syntax
// string.startWith(substring);

let startString = 'Love is the best thing in this world';

console.log(startString.startsWith('Love')) // Case sensitive

// 17. endsWith()
console.log(startString.endsWith('world'))
console.log(startString.endsWith('World'));

// 18. Search() - Returns index of the first match
console.log(startString.search('in'))
console.log(startString.search(/Love/gi)) 

// 19. match()
let loveJs = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(loveJs.match('love'));

let pattern = /love/gi //g - means to search in the whole text, i - case sensitive
console.log(loveJs.match(pattern))   // ["love", "love", "love"]

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// 20. repeat() - takes a number as arg and return the repeated version of the string

// string.repeat(n);
let love = 'love ';
console.log(love.repeat(10))


/*
  Checking Data Types and Casting - 
  Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
*/

// Changing Data Type (Casting)
// string to int
let numCasting = '10'
let numInt = Number(num)

console.log(numCasting)
console.log(numInt) // 10

// String to float
// parseFloat()
// Number()
// Plus sign(+)

let numCastFloat = '9.81'
let numFloat = +numCastFloat

console.log(numFloat) // 9.81