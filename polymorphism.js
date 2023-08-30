// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Some generic animal sound";
  }
}

// Subclass Dog
class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

// Subclass Cat
class Cat extends Animal {
  makeSound() {
    return "মিয়াউ মিয়াউ";
  }
}

// Function to make animals sound using polymorphism
function animalSound(animal) {
  console.log(`${animal.name} says: ${animal.makeSound()}`);
}

// Creating instances of Dog and Cat
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// Using the animalSound function with different animals
animalSound(dog);
animalSound(cat);
