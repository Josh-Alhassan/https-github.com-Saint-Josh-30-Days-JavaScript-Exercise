# Conditionals

Conditional statements are used to make decisions based on different conditions. 

The sequential flow of execution in JavaScript can be altered in two ways
- Conditional execution: If a certain expression is *'true'*, a block of one or more statments will be executed.

- Repetitive Execution: As long as a certain expression is *true*, a block of one or more statements will be repetively executed.

Conditionals can be implemented using the following ways:

* if
* if else
* if else if else
* switch
* ternary operator

### If statement
The keyword *if* is used to check if a conditional is *true* and to execute the block code.

```
// Syntax
if (condition) {
  // this part of code runs for the truthy condition
}
```

### IF else statment
If condition is *true* the first block will be executed. If not the else condition will executed

```
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for falsy condition
}
```
### if else-if else

```
syntax
if (condition) {
  // code
} else if (condition) {
  //code
} else {
  // code
}

```

## Switch
Switch is an alternative for if, else, if-else. The switch statment starts with a *switch* keyword followed by a parenthesis and code block. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to ternimate execution so the code execution does not go down after the condition is satisfied. The defualt block tuns if all the cases don't satisfy the condition.

```
switch(caseValue) {
  case 1:
    // code
    break
  case 2:
    // code
    break
  case 3:
    // code
    break
  default:
    // code
}
```

## Tenary Operator
Another way to write conditionals is using the ternary operators.

```
let isRaining = true;
  isRaining
  ? console.log('Go get a rain coat)
  : console.log('No need for a rain coat)

```
  