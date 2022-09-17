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

## Methods to manipulate array
There are different methods to manipulate an array. These are some of the available methods to deal with arrays: *Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift.*

### Array Constructor
To create an array

```
const arr = Array() // creates an empty array
console.log(arr)
```

+ **fill**: Fill all the array elements with a static value
+ **concat**: To concat two arrays
+ **length**: To know the size of an array
- **indexOf**: To check if an item exist in an array. If it exitst, it returns the index else it returns -1. Works for both strings and numbers
- **lastIndexOf**: It gives the position fo the last item in the array. If it exist, it returns the index else it returns -1.
- **includes**: To check if an item exist in an array. If it exist it returns the *true* statement, else it returns *false*
- **Array.isArray**: To check if the data type is an array.
- **toString**: converts array to string
- **join**: It is used to join the elements of the array. The argument we passed in the join() method will be joined in he array and return as a string. By default, the join() joins with a comma, but we can pass different string parameter which can be joined between the items.
- **Slice** To cut out a multiple items in range. It takes two parameters: starting and ending position. It doesn't include the ending position.
- **splice**: It taks three parameters: Starting position, number of times to be removed, and the number of items to be added.
- **Push**: Adding item in the end of an array using the push method

