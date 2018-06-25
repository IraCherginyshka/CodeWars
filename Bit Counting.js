/*
Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/


var countBits = function(n) {
  var count = '' + n.toString(2);
  var calk = 0;

  for (var i = 0; i < count.length; i++) {
    if (count[i] == 1) {
      calk++
    }
  }

  return calk;
};
