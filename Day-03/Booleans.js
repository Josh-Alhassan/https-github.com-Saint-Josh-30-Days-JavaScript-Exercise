import '../index.js';

console.log(' ')
console.log('======> DAY 03 <=======')
console.log('BOOLEANS');

// Examples of Boolean
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let trueValue = 4 > 3
let falseValue = 4 < 3

console.log(trueValue, falseValue)

// Undefined
let firstName
console.log(firstName)

// Null
let empty = null
console.log(empty)

// Operators
// Assignment operators
firstName = 'Alhassan';
let country = 'Nigeria';

// Arithmetic Operators
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerof = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerof)

const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// Comparison operators
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Logical Operators
// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
// const check = 4 > 3 && 10 < 5         // true && false -> false
// const check = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example

// const check = 4 > 3 || 10 > 5         // true  || true -> true
// const check = 4 > 3 || 10 < 5         // true  || false -> true
// const check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

// let check = 4 > 3                     // true
// let check = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true

// Increment Operator
// 1. Pre-increment
let count = 0
console.log(++count) // 1
console.log(count) // 1

// 2. Post Increment
let count_one = 0;
console.log(count++) // 0
console.log(count) // 1

// Decrement operator
// 1. Pre-decrement
let decrementCount = 0
console.log(--decrementCount) // 1
console.log(decrementCount) // 1

// 2. Post decrement
let decrementCount_one = 0;
console.log(decrementCount_one--) // 0
console.log(decrementCount_one) // 1


// Ternary Operators
let isRainingNow = true
isRainingNow
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

// Date Object
const now = new Date()
console.log(now) 
// We can access any date time information from the date object using the get methods

// Extracting "full year" from the time object
const fullYear = new Date();
console.log(fullYear.getFullYear())

// Getting months
const month = new Date()
console.log(month.getMonth()) // It returns a September, month (0-11)

// Getting date
const get_Date = new Date();
console.log(get_Date.getDate()) // because it is the 6th day of the month

// Getting Day
const nowDate = new Date()
console.log(nowDate.getDay())

// Getting hours
const nowHours = new Date()
console.log(nowHours.getHours())

// Getting minutes
const minutes = new Date()
console.log(minutes.getMinutes())

// Getting time
const nowTime = new Date()
console.log(nowTime.getTime())

// Using Date.now()
const allSeconds = Date.now()
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)

// Formating Date values to human readable format
const todaysDate = new Date()
const year = todaysDate.getFullYear()
const currentMonth = todaysDate.getMonth() + 1;
const date = todaysDate.getDate()
const hours = todaysDate.getHours()
const minute = todaysDate.getMinutes()

console.log(`${date}/${currentMonth}/${year} ${hours}:${minute}`)