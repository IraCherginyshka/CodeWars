/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !
*/


function pigIt(str){
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      arr[i] = arr[i].substring(1, arr[i].length) + arr[i].charAt(0) + 'ay';
    }
  }

  return arr.join(' ');
}
