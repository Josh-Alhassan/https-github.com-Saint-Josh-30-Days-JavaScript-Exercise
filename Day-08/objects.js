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

// Window global object
titleInConsole('Window global object')

a = 'JavaScript'
b = 10
 
function letsLearnScope () {
  console.log(a, b)

  if (true) {
    console.log(a, b)
  }
}

console.log(a, b) // Accessible
letsLearnScope() // Accessible

// Global Scope
spaceInConsole()
titleInConsole('=== Global Scope ===')

/*
  A global scope available anywhere in this file
*/
let c = 'JavaScript'; 
let d = 10;

function letsLearnGlobalScope() {
  console.log(a, b) // accessible

  if (true) {
    let c = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnGlobalScope()
console.log(a, b)

// Local Scope
spaceInConsole()
titleInConsole('=== Local Scope ===')

let localLanguage = 'JavaScipt';
let localNum = 10;

// Function scope
function letsLearnLocalScope() {
  console.log(localLanguage, localNum, ': Line 65')
  let value = false
  // Blcok scope
  if (true) {
    /*
    We can access variables from the function and outside the function but variables declared inside the 'if' will not be accessed outside the 'if' block
    */
   let localLanguage = 'Python'
   let localNum = 20;
   let numTwo = 30;
   let numThree = 40;
   value = !value
   console.log(localLanguage, localNum, numTwo, numThree, value, ': Line 77') 
  }
  // we cannot access numTwo because 'numTwo' scope is only the 'if-block'
  console.log(localLanguage, localNum, value, ': Line 60, 61')
}
letsLearnLocalScope()
console.log(localLanguage, localNum, ': line 60, 61')

// ES6
function letsLearnScopeEs6() {
  const gravity = 9.81;
  console.log(gravity)
}

// console.log(gravity) - uncaught Reference Error: Gravity not defined
letsLearnScopeEs6()

if (true) {
  const gravity = 9.81;
  console.log(gravity)
}
// console.log(gravity) - uncaught Reference Error: Gravity not defined

for (let i = 0; i < 3; i++) {
  console.log(i) // 0, 1, 2
}

// ### OBJECTS
spaceInConsole()
titleInConsole('=== OBJECTS ===')
// Creating empty Object
const person = {}
console.log(person)

// Creating an object with values
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle)

const personObject = {
  fistName: 'Joshua',
  lastName: 'Alhassan',
  age: 24,
  country: 'Nigeria',
  city: 'Lokoja',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
  ],
  isMarried: false,
  getFullName: function() {
    return `${this.fistName} ${this.lastName}`
  },
  'phone number': '+2348153776515'
}
console.log(personObject)

// Getting values from an object
titleInConsole('Gettig values from Object using dot notation')
console.log(personObject.fistName)
console.log(personObject.lastName)
console.log(personObject.age)
console.log(personObject.location)

titleInConsole('Accessing Values using square bracket')
console.log(personObject['fistName'])
console.log(personObject['lastName'])
console.log(personObject['age'])
console.log(personObject['phone number'])