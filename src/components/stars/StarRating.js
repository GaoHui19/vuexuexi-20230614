import Star from './Star.js';

export default class StarRating {
  constructor() {
    this.selectedStars = [];
  }

  addStar(val) {
    const star = new Star(val);
    this.selectedStars.push(star);
  }

  get numSelectedStars() {
    return this.selectedStars.filter((star) => star.selected).length;
  }

  submit() {
    if (this.numSelectedStars === 0) {
      const result = confirm('放弃五星评价？没有优惠了哦！继续还是取消？');
      if (result) {
        // continue with submission
        alert('谢谢您的评价！');
        return;
      }
      // else, cancel submission and continue selecting stars
    } else {
      alert(`谢谢您给出了${this.numSelectedStars}星好评！`);
    }
  }
}
