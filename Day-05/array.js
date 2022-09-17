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
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

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