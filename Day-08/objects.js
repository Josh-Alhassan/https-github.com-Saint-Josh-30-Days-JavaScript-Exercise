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

