export function divide(a, b, callback) {
  setTimeout(() => {
    if (0 !== b) {
      callback(null, a / b);
    } else {
      callback(Error("Cannot divide by 0."));
    }
  }, 1000);
}

// Implement callback
