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
  //loop through each number in array
  for (let i = 0; i < arrayToSort.length; i++) {

    //starting with [i]=0, iterate through remaining numbers 
    //reduce array length by 1 each time, since end of array is sorted
    for (let j = 1; j < arrayToSort.length - i ; j++) {  

      //if j less than its previous index...
      if(arrayToSort[j - 1] > arrayToSort[j]) {

        //swap j with its previous index
        [arrayToSort[j - 1], arrayToSort[j]] = [arrayToSort[j], arrayToSort[j-1]];
      }
    }
  }  
  return arrayToSort;
}

function verifySort(arrayToSort) {
  //loop through array starting with second value
  for(let i = 1; i < arrayToSort.length; i++) {
    console.log('hello');
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