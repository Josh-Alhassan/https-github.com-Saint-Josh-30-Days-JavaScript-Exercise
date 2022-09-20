// Space in the console function
function spaceInConsole() {
  console.log(' ')
}

// for Loop
// Incrementing
for (let i = 0; i <=5; i++) {
  console.log('increment ' + i)
}

console.log(' ')
console.log('#####for Loop Decrement ######')
// decrementing
for (let i = 5; i >= 0; i--) {
  console.log('dcrement ' + i)
}

console.log(' ')
console.log('Multiplication Table with for Loop')

for (let i = 0; i <=5; i++) {
  console.log(`${i} * ${i} = ${i * i}`)
}

// Entering Items to a new array of strings
console.log(' ')
console.log('Pusing Array items into an empty Array')
const countries = ['FinLand', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = [];

for(let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

// Adding all elements in the array
console.log(' ')
console.log('Adding all elements in an array')

const numbers = [1,2,3,4,5];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i])
  sum = sum + numbers[i]
}
console.log('Total number of element in array: ' +sum)

// Creating a new array based on the existing one
console.log(' ')
console.log('Creating a new Array based on the existing one')
const newNumbers = [1,2,3,4,5];
const newArrNew = []

for(let i = 0; i < newNumbers.length; i++) {
  newArrNew.push(newNumbers[i] **2)
}

console.log(newArrNew)

// ===> WHILE LOOP <====
console.log(' ')
console.log('===> WHILE LOOP <===')

let i = 0
while(i <= 9) {
  console.log(i)
  i++
}

// For of Loop
console.log(' ')
console.log('===> for of loop <===')

const forOfNumbers = [1,2,3,4,5];
for (const num of forOfNumbers) {
  console.log('Value from for-of-loop: ', num, (num * num))
}

// Adding all numbers of the array
console.log(' ')
console.log('Adding all numbers of the Arr')

let forOfSum = 0;
for (num of forOfNumbers) {
  forOfSum = forOfSum + num
}
console.log('Sum of Number Array is: ',forOfSum)

console.log(' ')
console.log('Looping through web tech stacks')
const webTechs = ['HTML', 'CSS', 'JavaSript', 'React', 'Redux', 'Node']

for(stack of webTechs) {
  console.log(stack.toUpperCase())
}

spaceInConsole()
console.log('Getting only the first letter of each element')
for(tech of webTechs) {
  console.log(tech[0])
}

spaceInConsole()
console.log('Inserting Elements into new Array')
console.log('OLD ARRAY: ', countries)

let newCountryArr = []
for(country of countries) {
  newCountryArr.push(country.toUpperCase())
}
console.log('NEW ARRAY: ', newCountryArr)

// Break keyword
spaceInConsole()
for (let i = 25; i <= 30; i++) {
  if (i == 26) {
    console.log(i, 'YEHHH!!! It is Joshua\'s Birthday ')
    break
  }
  console.log(i)
}

// Continue keyword
spaceInConsole()
for (let i = 25; i <= 30; i++) {
  if (i == 26) {
    console.log(i, 'YEHHH!!! It is Joshua\'s Birthday ')
    continue
  }
  console.log(i)
}
