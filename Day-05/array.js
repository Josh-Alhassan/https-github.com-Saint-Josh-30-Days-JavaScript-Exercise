// Creating an array -- Using Array constructor
const arr = Array()
console.log('Array constructor arr', arr)

// -- Using sqaure brackets([])
const squareBracketArr = []
console.log('square bracket empty arr ', squareBracketArr)

// Creating array with values

// array of numbers
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]

// array of strings, fruits
const fruits = ['banana', 'orange', 'mango', 'lemon'];

// array of strings, vegetables
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

// array of strings, products
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']

// array of web technologies
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']

// array of strings, countries
const countries = ['Albania', 'Bolvinia','Canada', 'Finland', 'Denmark', 'Ethopia', 'Sweden', 'Norway', 'Iceland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Ireland', 'Japan', 'Kenya']

// Print array and its length
console.log('Numbers: ', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// Creating an array using split
let js = 'JavaScript';
const charsInJavaScript = js.split('')

console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let companies = companiesString.split(',')
console.log(companies)

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)

// Accessing Array items using index
let firstFruit = fruits[0]
console.log(firstFruit)

let secondFruit = fruits[1]
console.log(secondFruit)

let lastFruit = fruits[3]
console.log(lastFruit)

// Extra bonus
function returnLastItem(index) {
  let lastItem = index.length - 1
  return index[lastItem]
}

// Last index can be calaculated as follows
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit)
console.log(returnLastItem(fruits))

// Number array
console.log(numbers)
console.log(numbers.length) // => To know the size of the array.
console.log(numbers[0])
console.log(numbers[5])

let lastIndexNum = numbers.length - 1
console.log(numbers[lastIndexNum])

console.log(returnLastItem(numbers))

// WebTechs - List of web technologies
console.log(webTechs) // all the array items

// To know the size of the array
console.log(webTechs.length);

// Return certain item that match the index
console.log(webTechs[0])
console.log(webTechs[6])

lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex])
// OR >>>>>>
returnLastItem(webTechs)


// Country Array items
console.log(countries)      // -> all countries in array
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

console.log(returnLastItem(countries))

// Modifying Array Element
// const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
numbers[0] = 10
numbers[1] = 20

console.log(numbers)

// Countries
console.log(countries)
countries[0] = 'Afghanistan'
countries[-1] = 'Korea'
console.log(countries)

// ==> Methods to manipulate Array
// => Array Constructor
const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues)

// Creating static values with fill
/* It creates eight element values filled with 'X' */
const eightXValues = Array(8).fill('X')
console.log(eightXValues)

/* It creates eight element values filled with '0' */
const eight0Values = Array(8).fill(0)
console.log(eight0Values)

/* It creates four element values filled with '4' */
const four4Values = Array(4).fill(4)
console.log(four4Values);

// Concatinating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

console.log(fruits)
console.log(vegetables)
const fruitsAndVegetables = fruits.concat(vegetables)
console.log(fruitsAndVegetables)

// Getting index an element in arr array
console.log(numbers)
console.log(numbers.indexOf(9.81))
console.log(numbers.indexOf(98.6))
console.log(numbers.indexOf(10))
console.log(fruits.indexOf('mango'))

// check if a banana exits in the array
console.log(fruits)
let index = fruits.indexOf('banana')

if(index === -1) {
  console.log('This fruit does not exist in the array')
} else {
  console.log('This fruit does exists in the array')
}

// We can also use ternary here
index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit exist in the array')

// Check if Avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado');
if(indexOfAvocado === -1) {
  console.log('This fruit does not exist in the array')
} else {
  console.log('This fruit exist')
}

// Getting last index of an element in array
const lastIndexValues = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(lastIndexValues.lastIndexOf(2))
console.log(lastIndexValues.lastIndexOf(0))
console.log(lastIndexValues.lastIndexOf(4))
console.log(lastIndexValues.lastIndexOf(6))

// Includes Method
console.log(webTechs)
console.log(webTechs.includes('Node'))
console.log(webTechs.includes('C'))

// Checking Array
console.log(numbers)
console.log(Array.isArray(numbers))

const numValue = 100
console.log(Array.isArray(numValue))

// Converting array to string
numToString = numbers.toString()
console.log(numToString)
// console.log(numToString.join(''))

// Joining Array Elements
console.log(numbers.join())

const names = ['Joshua', 'Deborah', 'Stella'];
console.log(names.join())
console.log(names.join(''))
console.log(names.join(' '))
console.log(names.join(', '))
console.log(names.join(' # '))

console.log(webTechs.join(' # '))

// ## Slice array elements
console.log(numbers)
console.log(numbers.slice(0)) // -> It copies all item
console.log(numbers.slice(0, numbers.length)) // -> It copies all item
console.log(numbers.slice(1,4))

// ## Splice method in array
numbers.splice()
console.log(numbers) // -> remove all items

numbers.splice(0,1)
console.log(numbers) // -> remove the first item

numbers.slice(3, 3, 7, 8, 9)
console.log(numbers)  // -> from index 3, remove 3 items and replace with 7, 8, and 9