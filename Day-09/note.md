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