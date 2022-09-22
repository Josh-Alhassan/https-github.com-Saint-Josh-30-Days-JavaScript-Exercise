// ====> UTILITY FUNCTIONS <====

// Space in the console function
function spaceInConsole() {
  console.log(' ')
}

// Title in console function
function titleInConsole(title) {
  let response = title;
  console.log(response)
}

// ====> END OF UTILITY FUNCTIONS <====

// function without parameter,  a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed 

// Funtion to print full name
function printFullName() {
  let firstName = 'Alhassan'
  let lastName = 'Joshua'
  let space = ' '
  let fullName = firstName + space + lastName
  console.log(fullName)
}
// calling / invoking a function
printFullName()

// Function to return full name using return keyword
function returnFullName() {
  let firstName = 'Joshua';
  let lastName = 'Alhassan';
  let space = ' ';
  let fullName = firstName + space + lastName;
  return fullName
}
// invoking / calling a function
console.log(returnFullName())

// Function to return the sum of two numbers
function sumTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne + numTwo;
  return total
}
// invoking / calling a function
console.log(sumTwoNumbers())

// ====> Function with a parameter <====
spaceInConsole()
titleInConsole('===> Function with a Parameter <===')

// function that returns area of a circle
function areaOfCircle(radius) {
  let area = Math.PI * radius * radius;
  return area;
}

console.log(areaOfCircle(10))

// Function with two parameters
titleInConsole('Function with 2 parameters')
function summationOfTwoNumbers(num1, num2) {
  let summation = num1 + num2;
  return summation
}
console.log(summationOfTwoNumbers(10, 33))

// function that accepts 2 inputs and display fullName
function showFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(showFullName('Joshua', 'Alhassan'))

spaceInConsole()
titleInConsole('Function with many parameters')
// function that takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum
}

const numbers = [1,2,3,4,5];
console.log(sumArrayValues(numbers))

// Unlimited number of parameters in regular function
spaceInConsole()
titleInConsole('Unlimited number of parameters in regular function')
function sumAllNumsTest() {
  console.log(arguments)
}
sumAllNumsTest(1, 2, 3, 4)

// function declaration
function summAllNums() {
  let sum = 0;
  // loop through arguements
  for(let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum
}

console.log(summAllNums(1, 2, 3, 4))
console.log(summAllNums(10, 20, 13, 40, 10))
console.log(summAllNums(15, 20, 30, 25, 10, 33, 40))

// unlimited number of parameters in arrow functions
spaceInConsole()
titleInConsole('Unlimited number of parameters in arrow function')