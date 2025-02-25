export default class Inventory {
    constructor() {
      this.items = {};
      this.error = null
    }
  
    addItem(item, count) {
      this.items[item] = (this.items[item] || 0) + count;
    }
  
    removeItem(item, count) {
      if (!this.items[item] || this.items[item] < count) {
        this.error = `Not enough ${item} to eat!`
        return
      }
      this.items[item] -= count;
    }
  
    getItemCount(item) {
      return this.items[item] || 0;
    }

    clear() {
      this.items = {};
      this.error = null
    }
}
