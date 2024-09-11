const reverseString = function (str) {
  const word = str.split("");
  let reverse = "";
  for (let i = word.length - 1 ; i >= 0; i--) {
    reverse += word.at(i);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
