const removeFromArray = function (numArray, ...num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < numArray.length; j++) {
      if (numArray[j] === num[i]) {
        numArray.splice(j, 1);
        j--;
      }
    }
  }
  return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;
