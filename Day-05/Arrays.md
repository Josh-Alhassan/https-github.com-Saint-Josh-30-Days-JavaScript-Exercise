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

## Accessing Array Items using index
We access each element in an array using their index. An array index starts from 0.

```
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // We are accessing the first item of it's index

console.log(firstFruit) // banana

let lastIndex = fruits.length - 1;
console.log(fruits[lastIndex]) //
```

## Modifying Array Element
An Array is mutable(modifiable). Once an array is created. We can modify the contents of the array elements.

```
const numbers = [1,2,3,4,5]
numbers[0] = 10       // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20
```