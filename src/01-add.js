// console.log(add(2, 5)); // 7
// console.log( add(2)(5) ); // 7

//; Implement Add

export function add(a, b) {
  if (b) {
    return a + b;
  } else {
    return function (b) {
      return a + b;
    };
  }
}
