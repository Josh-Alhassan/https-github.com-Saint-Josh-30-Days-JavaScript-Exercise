# OBJECTS - DAY 08

## Scope
A *variable* can be declared at different **scope**. Variable scope can be
+ global
+ local

**note**: *Anything declared without a var, let and const is at global level. Declaring a variable without let or const make it available in window object and this found anywhere*

## Window Object
Declaring a variable without let or const make it available in window object and this can be found anywhere.

## Global scope
A globally declared variable can be accessed every where in the same file. But the term global is reltive. It can be global to the file or it can be relative to some block of codes.

## Local Scope
A variable declared as local can be accessed only in certain block code.
+ Block scope
+ Function Scope

A variable declared with *var* only scoped to functoin but variable declared with *let* or *const* is block scoped(function block, if-block, loop block, etc).

**Block** in JavaScript is a code in between two curly brackets ({})

in ES6 and above there is *let* and *const*, so you will not suffer the sneakiness of *var*. When we use *let* our variable is block scoped and it will not infect other parts of our code.

The scope *let* and *const* are the same. The difference is only reassigning. We can not change or re-assign the value of the <code>const</code> variable. By using *let* and *const* you will write clean code and aviod hard to debug mistakes.

**Note**: As a rule of thumb, you can use let for any value which change, *const* for any constant value, and for an array, object, arrow function and function expression.

# Object
Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there's no order. 

We can access values of object using two methods:
* using '.' followed by the key name, if the key-name is a one word
* using square bracket and a quote