export default class Star {
    constructor(value = false) {
      this.selected = value;
    }
  
    select() {
      this.selected = !this.selected;
    }
  }
  