// const smith = {
//   name: "Smith robson",
//   birthDay: "1996-12-15",
//   monthlySalary: 20000,
//   noOfMonth: 12,

//   calculateAge() {
//     const diff_ms = Date.now() - new Date(this.birthDay).getTime();

//     const age_dt = new Date(diff_ms);

//     return Math.abs(age_dt.getUTCFullYear() - 1970);
//   },

//   getSalary() {
//     return (this.monthlySalary * this.noOfMonth).toLocaleString();
//   },
// };

// console.log(smith.calculateAge());
// console.log(smith.getSalary());

class Person {
  // private properties in class #name
  #name;
  #birthDay;
  constructor(name, birthDay, monthlySalary, noOfMonth) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.monthlySalary = monthlySalary;
    this.noOfMonth = noOfMonth;
  }

  // private method in class #calculateAge

  #calculateAge() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.monthlySalary * this.noOfMonth).toLocaleString();
  }
}

const smith = new Person("Smith robson", "1996-12-15", 20000, 12);

console.log(smith.calculateAge());
console.log(smith.getSalary());
console.log(smith.name);
