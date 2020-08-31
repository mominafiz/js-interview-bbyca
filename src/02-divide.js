export function divide(a, b, callback) {
  setTimeout(() => {
    if (0 !== b) {
      return callback(null, a / b);
    } else {
      return callback(Error("Cannot divide by 0."));
    }
  }, 1000);
}

// Implement callback

export function callback(a, result) {
  if (!result) {
    console.log(a.message);
  } else {
    console.log(result);
    return result;
  }
}
