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
titleInConsole('Function with a Parameter')
