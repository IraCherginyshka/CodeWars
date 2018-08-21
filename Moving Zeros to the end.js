/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let k = 0;
  let newArr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      i--;
      k++;
    }
  }


  if (k > 0) {
    let i = 0;
    while (i < k) {
      arr.push(0);
      i++;
    }
  }

  return arr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros([9,0,9,0,0,1,0,2,1,1,3,1,9,0,0,9,0]));
