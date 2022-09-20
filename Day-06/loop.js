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
// console.log(i)