// Base class
class Person {
  constructor(name, birthDay) {
    this.name = name;
    this.birthDay = birthDay;
  }

  calculateAge() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
}

// Derived class that inherits from Person
class Employee extends Person {
  constructor(name, birthDay, jobTitle, monthlySalary, noOfMonth) {
    super(name, birthDay); // Call the constructor of the parent class

    this.jobTitle = jobTitle;
    this.monthlySalary = monthlySalary;
    this.noOfMonth = noOfMonth;
  }

  getSalary() {
    return (this.monthlySalary * this.noOfMonth).toLocaleString();
  }
}

// Create an instance of the derived class
const smith = new Employee(
  "Smith Robson",
  "1996-12-15",
  "Software Engineer",
  5000,
  12
);

// console.log(`Name: ${smith.name}`);
// console.log(`Age: ${smith.calculateAge()}`);
// console.log(`Job Title: ${smith.jobTitle}`);
// console.log(`Salary: $${smith.getSalary()}`);

class Parent {
  constructor(fatherName, motherName) {
    this.fatherName = fatherName;
    this.motherName = motherName;
  }

  getParentTogether() {
    return this.fatherName + " " + this.motherName;
  }
}

class Child extends Parent {
  constructor(name, fatherName, motherName, age) {
    super(fatherName, motherName);
    this.name = name;
    this.age = age;
  }
}

const alex = new Child("alex", "Sr.alex", "adriana", 23);
const john = new Child("john", "robert bush", "kate", 28);

// console.log(john.getParentTogether());
