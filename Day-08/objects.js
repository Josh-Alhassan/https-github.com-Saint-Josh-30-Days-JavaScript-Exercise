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
titleInConsole('Global Scope')

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