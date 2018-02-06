function makeArray(length, type, start = 0) {
  var arrayToSort = [];
  for(var i = 0; i < length; i++) {
    if(type === 'letters') {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz';
      arrayToSort.push(alphabet.charAt(Math.floor(Math.random() * (alphabet.length - 1))))
    } else {
      //if 'numbers' or no arguments passed
      arrayToSort.push(Math.floor(Math.random() * ((start + length) - start + 1) + start));
    }
  }
  return arrayToSort;
}

function filterMe (arrayToSort) {
//make an empty array
let sortedArray = [];
  //loop through each number in the arrayToSort; for each iteration...
  for (let i = 0; arrayToSort.length > 0; i) {
    console.log(sortedArray, arrayToSort);
    //move index 0 to end of sortedArray
    sortedArray.push(arrayToSort[0]);
    //then delete index 0
    arrayToSort.shift();
    //loop through each number in sortedArray; for each iteration...
    for (let j = sortedArray.length - 1; j > 0; j--) {
      //if the number is less than previous number...
      if(sortedArray[j] < sortedArray[j - 1]) {
        //swap its place with the previous number
        [sortedArray[j - 1], sortedArray[j]] = [sortedArray[j], sortedArray[j - 1]];        
      }
    }
  }
return sortedArray;
}


function verifySort(arrayToSort) {
  //loop through array starting with second value
  for(let i = 1; i < arrayToSort.length; i++) {
    //if second value is less than first value, verified = false
    if(arrayToSort[i] < arrayToSort[i - 1]) {
      return false;
    }
  }
  //if loop completes without returning false, verified = true
  return true
}

 // export default filterMe

module.exports = makeArray, filterMe, verifySort;