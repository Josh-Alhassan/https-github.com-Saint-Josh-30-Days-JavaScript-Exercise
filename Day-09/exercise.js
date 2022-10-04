const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Joshua', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 3. Use forEach to log each country in the names array
console.log('EXERCISES: LEVEL 1')
console.log('Level 1 exercise 3')
countries.forEach(function(country) {
  console.log(country);
})

// 4. use forEach to log each name in the names array
console.log('')
console.log('Level 1 exercise 4')
names.forEach((name) => console.log(name));

// 5. use forEach to log number in the numbers array
console.log('')
console.log('Level 1 exercise 5')
numbers.forEach((number) => {
  console.log(number)
})

// 6 use map to create a new array by changing each country to uppercase in the countries array
console.log('')
console.log('Level 1 exercise 6')
const countriesToUppercase = countries.map((country) => {
  return country.toUpperCase()
})
console.log(countriesToUppercase)

// 7 use map t0 create an array of countries length from countries array
console.log('')
console.log('Level 1 exercise 7')
const contriesLength = countries.map((country) => (
  country.length
))
console.log(contriesLength)

// 8 use map to create a new array by changing each number to square in the numbers array
console.log('')
console.log('Level 1 exercise 8')
const numberSquare = numbers.map(function(number) {
  return number * number
})
console.log(numberSquare)

// 9 use map to change each name to uppercase in the names array
console.log('')
console.log('Level 1 exercise 9')
const nameToUppercase = names.map(function(name) {
  return name.toUpperCase()
})
console.log(nameToUppercase)

// 10 use map to map the products array to its corresponding prices
console.log('')
console.log('Level 1 exercise 10')
const productArrToPrice = products.map((product) => {
  return product.price == ' ' ? 0 : `${product.product} - ${product.price}$`
})
console.log(productArrToPrice)

// 11 use filter to filter out countries containing land
console.log('')
console.log('Level 1 exercise 11')
const countriesContainingLand = countries.filter(function(country) {
  return country.includes('land')
})
console.log(countriesContainingLand)

// 12 use filter to filter out countries having six characters
countriesHavingSixCharacter = countries.filter((country) => {
  return country.length == 6
})
console.log(countriesHavingSixCharacter)

// 13 use filter to filter out countries containing six letters and more in the country array
console.log('')
console.log('Level 1 exercise 13')
const countriesContainingSixLettersAndMore = countries.filter((country) => {
  return country.length >= 6
})
console.log(countriesContainingSixLettersAndMore)

// 14 Use filter to filter out country that start with 'E'
console.log('')
console.log('Level 1 exercise 14')
const countryStartWithE = countries.filter(function(country) {
  return country.startsWith('E');
})
console.log(countryStartWithE)