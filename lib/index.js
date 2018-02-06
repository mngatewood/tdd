function filterMe (array) {
  return array
}

function makeArray(number) {
  var arr = [];
  for(var i = 0; i < number; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }
}

export default filterMe
