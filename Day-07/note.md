# Functions
+ A function is a reusable peice of code or programming statements designed to perform a certain task. A function is declared by the *function* keyword, followed a name and then parenthesis ().

+ To store a data to a function, the function has to return certain data types. To get the value of a function, we call or invoke a function.

Function makes code:
- Clean and easy to use
- reusable
- easy to test

A *function* can be declared in couple of ways:
* Declaration function
* Expression function
* Anonymous function
* Arrow function

## Function Declaration
**Syntax**
```
// declaring a function without a parameter
function functionName() {
  // code goes here
}

functionName() // calling or invoking a function
```
### Functions returning value
If a function does not return values, the value of the function will be undefined.

### Functions with Parameters
In a function, we can pass different data types (number, string, boolean, object, function) as parameter.

**Syntax**
```
// function with one parameter
function functionName(param1) {
  // code goes here
}
functionName(param1) // during calling o invoking a function, an arguement is needed.
```

**Function with 2 parameters**
```
// function with two parameters
function functionName(param1, param2) {
  // code goes here
}
functionName(param1, param2) 
```

**Function with many parameter**
```
function functionName(param1, param2, param3, ...) {
  // code goes here
}
functionName(param1, param2, param3, ...)
```

### Function with unlimited number of parameters
sometimes, we do not know how many arguments the user is going to pass. Therefore, we should know how to write a function whcih take unlimited number of arguements.

There's a significant difference between how we take unlimited number of parameters in *function declaration* and *arrow function* 

*function declaration*
* A function declaration provides a function scoped arguments array like object. Anything we pass as argument in the function can be asses from arguments object inside the functions.

*arrow function*
* Arrow function does not have the *function scoped arguments object*. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.
*note:* Anything we pass as arguement in the function can be accessed as *array* in the arrow function.