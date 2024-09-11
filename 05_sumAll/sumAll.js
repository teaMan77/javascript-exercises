const sumAll = function (num1, num2) {
  let sum = 0;
  let small;
  let large;

  if (
    num1 >= 0 &&
    num2 >= 0 &&
    typeof num1 !== typeof "" &&
    typeof num2 !== typeof "" &&
    num1 % 1 === 0 &&
    num2 % 1 === 0
  ) {
    if (num1 <= num2) {
      small = num1;
      large = num2;
    } else {
      small = num2;
      large = num1;
    }
    for (i = small; i <= large; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
