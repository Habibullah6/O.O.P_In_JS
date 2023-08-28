class Player {
  constructor(name, smart) {
    this.name = name;
    this.smart = true;
    this.legs = 2;
  }
}

class Xavier extends Player {
  // Class names should start with a capital letter
  constructor(name) {
    super(name); // You need to call the parent class constructor using super()
    this.role = "All-rounder";
  }

  sayHi() {
    return `Hi, I'm ${this.name}.`; // Added a template string for better output
  }
}

const xavier = new Xavier("Xavier", true); // Use PascalCase for class names and camelCase for variables
console.log(xavier);
// const greetings = xavier.sayHi();
// console.log(greetings);
