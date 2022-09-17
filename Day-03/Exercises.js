/* Question 7: 
        Use the Date object to do the following activities
*/
// i. What is the year today?
const yearToday = new Date()
console.log('The year today is: ' + yearToday.getFullYear())

// ii. What is the month today as a number?
const monthToday = new Date()
console.log('The month today is: '+ (monthToday.getMonth() + 1))

// iii. What is the date today?
const dateToday = new Date()
console.log("Today's date is: " + dateToday.getDate())

// iv. What is the day today as a number?
const dayToday = new Date()
console.log('The day today is: '+ dayToday.getDay())

// v. What is the hours now?
const hoursNow = new Date()
console.log('It is the '+ hoursNow.getHours() + 'th' + ' hour of the day');

// vi. What is the minutes now?
const minutesNow = new Date()
console.log('It is ' + minutesNow.getMinutes() + 'mins past time')

// vii. Find out the number of seconds elasped from January 1, 1970 to now
const timeElasped = new Date()
console.log('Time elasped from Jan 1, 1970 till now is ' + timeElasped.getTime())

// Exercise 2: Level 2
/* 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle
*/
// const base = prompt('Enter base: ')
// const height = prompt('Enter height: ')
// const areaOfTriangle = (0.5 * base * height);

// console.log('The area of the triangle is: ' + areaOfTriangle)

/*
2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
*/

// const sideA = prompt('Enter side a: ')
// const sideB = prompt('Enter side b: ')
// const sideC = prompt('Enter side c: ')
// const perimeter = (sideA + sideB + sideC)
// console.log('The perimeter of the triangle is: ' + perimeter)

// Exercise 3 - Level 2
/*
Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/
const length = prompt('Enter a length value')
const width = prompt('Enter a width value')

const areaFomula = length * width;
const perimeterFomula = (2 * (length + width));

console.log('area of rectangle: ' + areaFomula, 'Perimeter of a rectangle: ' + perimeterFomula)