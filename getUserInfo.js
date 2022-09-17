import './index.js';

// Ceate a Parent Class
class Parent {
  constructor(firstName, lastName, country, title) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.title = title;
  }

  // Create Parent Methods
  getUserInfo() {
    return `${this.firstName} ${this.lastName}, a ${this.title} developer based in ${this. country}.`;
  }

  ParentMethod() {
    console.log('This is a class Parent Method');
  }
}

const parentOne = new Parent('Joshua', 'Alhassan', 'Nigeria', 'Frontend Developer');

// Create Child Class
class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title)
    this.skills = skills
    // We bind the Child params with the "this" keyword to the Child Object
  }

  getSkills() {
    let len = this.skills.length;
    return len > 0 ? this.skills.join(' ') : 'No Skills found';
  }

  childMethod() {
    console.log('This is a child Method');
  }
}

const skills = ['HTML', 'CSS', 'JS', 'React'];

const childOne = new Child('Joshua', 'Alhassan', 'Nigeria', 'Frontend Developer', skills);

// Executing classes
console.log(
  childOne.getSkills('Joshua', 'Alhassan', 'frontend', 'Nigeria', skills)
);