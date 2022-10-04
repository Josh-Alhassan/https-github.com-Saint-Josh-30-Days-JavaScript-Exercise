# Higher Order Function
Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called **callback**.

## Callback
A callback is a function which can be passed as parameter to other function.

```
const callback = (n) => {
  return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))
```

## Functional Programming
Instead of writing regular loop, JavaScript latest version introduced lots of built in methods which can help us to solve complicated problems.

+ All built in methods take a *callback* function

### forEach
**forEach**: Iterate an array elements. We use ***forEach*** only with arrays. It takes a callback function with elements, index parameter and array itself. **NOTE** the index and array are optional

```
// syntax
arr.forEach(function(element, index, arr) {
  console.log(index, element, arr)
})

// written using an arrow funtion
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})

// Written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

### map
**map**: Iterate an array elements and modify the array elements. It takes a callback function with elements, index, array and returns a new array.

```
const modifiedArray = arr.map(function(element, index, arr) {
  return element
})

// Arrow function and explicit return
const modifiedArray = arr.map((element, index) => element);
```

### filter
**filter**: return a new array full with elements that pass a test.

### reduce
**reduce**: Reduce takes a callback function. The callback function takes accumulator, current, and optional initial value as a parameter and returns a single value.
+ It is a good practice to define an initial value for the accumulator value.

```
// syntax
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
  return
}, initial value)
```

### every
**every**: check if all the elements are similar in one aspect. It returnss boolean

### find
**find**: Returns the first element which satisfies the condition

### some
**some**: Check if some of the elements are similar in one aspect. It returns boolean

### sort
sort: The *sort* method arranges the array elements either ascending or descending order. By default, the *sort()* method sorts values as strings. This works well for string array items but not for numbers.
+ sort method modify the original array
NOTE: It is recommended to copy the original data before you start using sort method.

+ Sorting object Arrays - whenever we sort objects in an array, we use the object key to compare.

```
// syntax
objAr.sort(function(a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// OR

objArr.sort(function(a, b) {
  if(a['key'] < b['key']) return -1
  if(a['key'] > b['key']) return 1
  return 0
})
```