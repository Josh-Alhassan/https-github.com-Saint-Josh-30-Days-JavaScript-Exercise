 /*
 EXERCISE: LEVEL 1
 */

//  1. Create an empty object called dog
const dog = {}
// 2. Print the the dog object on the console
console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Blacky';
dog.color = 'Brown';
dog.legs = 4;
dog.age = 1;
dog.bark = function() {
  return 'Woof woof'
}

console.log(dog)

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.age)
console.log(dog.bark())

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'German Shephard'
dog.getDogInfo = function () {
  return `${dog.name} is a ${dog.breed} breed and have ${dog.legs} legs `
}

console.log(dog)
console.log(dog.getDogInfo())

 /*
 EXERCISES: LEVEL 2
 */

 const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
console.log(users)
// 1. Find the person who has many skills in the users object.
console.log(users.Asab.skills)

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
for (const user in users) {
  console.log(`${users[user]} : ${users[user]}`)
}

// 3. Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users)
console.log(copyUsers)

// 4. Get all keys or properties of users object
const keys = Object.keys(users)
console.log(keys)

// Values
const properties = Object.values(users)
console.log(properties)

// Get points from Object 0
console.log(properties[0].points)

 /*
 EXERCISES: LEVEL 3
 */


// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  // properties
  firstName: 'Alhassan',
  lastName: 'Joshua',
  income: 2000,
  expense: 800,

  // methods
  totalIncome: function() {
    return '$ ' + income
  },
  totalExpense: function() {
    return '$' + (this.income - this.expense);
  },
  accountInfo: function() {
    return `{Account holder: ${firstName} ${lastName} \n Total Income: ${totalIncome} }`
  },
  addIncome: function(amount) {
    const addAmount = amount + this.income;
    return `New income total: $${addAmount}`
  },
  addExpense: function(expense) {
    const totalExpense = expense + this.expense;
    return `Total expense: $${totalExpense}`
  },
  accountBalance: function() {
    return `${this.firstName} ${this.lastName} Your account balance is: ${this.income}`
  }
}

console.log(personAccount.totalExpense())
console.log(personAccount.addIncome(300))
console.log(personAccount.addExpense(523))
console.log(personAccount.accountBalance())