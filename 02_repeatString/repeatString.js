const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let repeatString = "";
    for (i = 0; i < num; i++) {
      repeatString += string;
    }
    return repeatString;
  }
};

// Do not edit below this line
module.exports = repeatString;
