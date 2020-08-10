// Create a function that when called will return the next fibonacci number in sequence.
// 1 1 2 3 5 8 13 21

// fibonacci.next() // 1
// fibonacci.next() // 1
// fibonacci.next() // 2
// prev + 1
// start = 0
// next ?
let fibonacci = {
  start: 0,
  prev: 0,
  next: function () {
    // start + 1 // next
    // 0
    let result = this.start + this.prev;
    this.prev = result;

    return result;
  }
};
