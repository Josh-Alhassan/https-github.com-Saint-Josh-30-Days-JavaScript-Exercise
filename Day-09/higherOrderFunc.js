// Callback
const callback = (n) => {
  return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3)) 

// Returning function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}

console.log(higherOrder(2)(3)(10))

const numbers = [1,2,3,4,5];

const sumArray = arr => {
  let sum = 0;
  arr.forEach(function(element) {
    sum += element
  })
  return sum
}

console.log(sumArray(numbers))

// Functional Programming
// forEach()
console.log('')
console.log('Functional Programming')
console.log('forEach() method')
let sum = 0;
const numbersInFunctionalProgramming = [1,2,3,4,5];
numbersInFunctionalProgramming.forEach(function(num) {
  console.log(num)
})

numbersInFunctionalProgramming.forEach(function(num) {
  sum += num
})
console.log(sum)

console.log(' ')
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(function(element) {
  console.log(element.toUpperCase())
})

// map()
console.log(' ')
console.log('Map() method')

const numbersquare = numbersInFunctionalProgramming.map((num) => num * num)
console.log(numbersquare)

const names = ['Alhassan', 'Joshua', 'Auto villa', 'Jeremiah'];
const namesToUpperCase = names.map((names) => {
  return names.toUpperCase()
})
console.log(namesToUpperCase)

const countriesFirstThreeLetters = countries.map((country) => {
  return country.toUpperCase().slice(0, 3)
})
console.log(countriesFirstThreeLetters)
