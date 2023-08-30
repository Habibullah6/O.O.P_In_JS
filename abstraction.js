class Products {
  constructor(items) {
    this.items = [];
  }

  getProduct() {
    return [...this.items];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemToDelete) {
    this.items = this.items.filter((item) => item !== itemToDelete);
  }

  modifyItem(itemToModify, newValue) {
    const index = this.items.indexOf(itemToModify);
    if (index !== -1) {
      this.items[index] = newValue;
    }
  }
}

// const item = new Products();
// item.addItem("orange");
// item.addItem("apple");
// console.log(item.getProduct());
// item.removeItem("apple");
// console.log(item.getProduct());
// item.modifyItem("orange", "grape");
// console.log(item.getProduct());
