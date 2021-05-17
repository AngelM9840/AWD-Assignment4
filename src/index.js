const fibonacci = {
  // must return an Array
  until: function (stop) {
    if (isNaN(stop)) {
      return console.error("'stop' may not be undefined");
    } else if (stop === true || stop === false || stop === null) {
      return console.error("'stop' may not be a boolean or null");
    } else if (stop < 0) {
      return console.error("'stop' must be a nonegative number");
    } else if (stop === 0) {
      let untilarray = [];
      console.log("Fibonacci Sequence:" + untilarray);
    } else {
      let untilarray = [];
      let n1 = 0,
        n2 = 1,
        nextTerm;

      //console.log(n1);
      //untilarray.push(n1);
      //console.log(n2);
      //untilarray.push(n2);

      nextTerm = n1 + n2;

      while (nextTerm <= stop) {
        //console.log(nextTerm);
        untilarray.push(n1);

        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
      }
      untilarray.push(n1);
      untilarray.push(n2);
      console.log("Fibonacci Sequence:" + untilarray);
    }
  },

  // must return an Array
  list: function (stop) {
    if (isNaN(stop)) {
      return console.error("'stop' may not be undefined");
    } else if (stop === true || stop === false || stop === null) {
      return console.error("'stop' may not be a boolean or null");
    } else if (stop < 0) {
      return console.error("'stop' must be a nonegative number");
    } else if (stop === 0) {
      let listarray = [];
      console.log("Fibonacci Sequence:" + listarray);
    } else {
      let listarray = [];
      let n1 = 0,
        n2 = 1,
        nextTerm;

      for (let i = 1; i <= stop; i++) {
        //console.log(n1);
        listarray.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
      }
      console.log("Fibonacci Sequence:" + listarray);
    }
  },

  // must return a Boolean value
  exists: function (i) {
    if (isNaN(i)) {
      return NaN;
    } else if (i === true || i === false || i === null) {
      return false + ": 'i' may not be a boolean, null, or undefined";
    } else if (i < 0) {
      return false + ": 'i' must be a nonnegative number";
    } else {
      let plus = 5 * (i * i) + 4;
      let minus = 5 * (i * i) - 4;
      if (
        fibonacci.perfectSquare(plus) === true ||
        fibonacci.perfectSquare(minus) === true
      ) {
        return true + " 'i' is  part of the fibonacci sequence";
      } else return false + " 'i' is not part of the fibonacci sequence";
    }
  },

  // Don't change this...it works...you can just use it
  perfectSquare: function (n) {
    let x = parseInt(Math.sqrt(n));

    return x * x === n;
  }
};

console.log(fibonacci.until(10));
console.log(fibonacci.list(10));
console.log(fibonacci.exists(10));

console.log("Exists as boolean (FALSE): " + fibonacci.exists(true));

console.log("Exists as negative (FALSE): " + fibonacci.exists(-10));

console.log("Exists as null (FALSE): " + fibonacci.exists(null));

console.log("Exists as undefined 1 (FALSE):" + fibonacci.exists());

console.log("Exists as undefined 2 (FALSE): " + fibonacci.exists(undefined));

console.log("Exists should be FALSE: " + fibonacci.exists(133));

console.log("Exists should be TRUE: " + fibonacci.exists(5));

console.log("List as boolean should show an error: " + fibonacci.list(true));

console.log("List as negative should show an error: " + fibonacci.list(-10));

console.log("List as null should show an error: " + fibonacci.list(null));

console.log(
  "List as undefined (empty) should show an error: " + fibonacci.list()
);

console.log(
  "List as undefined (forced) should show an error: " +
    fibonacci.list(undefined)
);

console.log("List at 0 -- should be empty array (blank)" + fibonacci.list(0));

console.log("List as 5 -- [0, 1, 1, 2, 3]:" + fibonacci.list(5));

console.log(
  "List as 10 -- [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]:" + fibonacci.list(10)
);

console.log("Until as boolean should show an error: " + fibonacci.until(true));

console.log("Until as negative should show an error: " + fibonacci.until(-10));

console.log("Until as null should show an error: " + fibonacci.until(null));

console.log(
  "Until as undefined (empty) should show an error: " + fibonacci.until()
);

console.log(
  "Until as undefined (forced) should show an error: " +
    fibonacci.until(undefined)
);

console.log(
  "Until as 0 -- should be empty array (blank): " + fibonacci.until(0)
);

console.log("Until as 5 -- [0, 1, 1, 2, 3, 5]: " + fibonacci.until(5));

console.log("Until as 10 -- [0, 1, 1, 2, 3, 5, 8]: " + fibonacci.until(10));
