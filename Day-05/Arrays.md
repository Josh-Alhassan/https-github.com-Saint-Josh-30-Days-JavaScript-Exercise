# Arrays
An array can store multiple values in contrast to variables. Each value has an *index* and each *index* has a reference in memory address. Each value can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

Array is a collection of different data types which are ordered and changeable (modifiable). Array allows string duplicae elements and different data types.

## How to create an empty array
+ Using Array constructor
```
// syntax
const arr = Array()
or
let arr = new Array()
console.log(arr) // []
```

+ Using square bracket([])
```
// syntax
// This is the most recommended way to create an empty list
const arr = []
console.log(arr) // []
```

## How to create an array with values
We use *length* property to find the length of an array
```
// arrays of numbers
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]

// arrays of strings
const fruits = ['banana', 'orange', 'Mango', 'lemon']

// Print array and its length
console.log('Numbers: ', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits: ', fruits)
console.log('Number of fruits:', fruits.length)
```

Arrays can have items of different data types
```
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)
```

## Creating an array using split
```
let js = 'JavaScript'
const charsInJavaScript = js.split('')
```