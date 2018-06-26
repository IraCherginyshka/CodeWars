/*
Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
*/


function validSolution(arr){

//проверка строк

function check(arr1) {
  for (var i = 0; i < 9; i++) {
     var newArr = arr1[i].sort();

     for (var j = 0; j < 8; j++) {
       if (arr1[i][j] === arr1[i][j + 1]) {
         return false;
       }
     }
  }
  return true;
}


//проверка столбцов

function check2(arr2) {
  for (var i = 0; i < 9; i++) {
     var newArr = arr2[i].sort();

     for (var j = 0; j < 8; j++) {
       if (arr2[j][i] === arr2[j][i + 1]) {
         return false;
       }
     }
  }
  return true;

}


  // проверка блоков

  var arrBlock = [];

  arrBlock[0] = [];
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      arrBlock[0].push(arr[i][j]);
    }
  }

  arrBlock[1] = [];
  for (var i = 0; i <= 2; i++) {
    for (var j = 3; j <= 5; j++) {
      arrBlock[1].push(arr[i][j]);
    }
  }

  arrBlock[2] = [];
  for (var i = 0; i <= 2; i++) {
    for (var j = 6; j <= 8; j++) {
      arrBlock[2].push(arr[i][j]);
    }
  }

  arrBlock[3] = [];
  for (var i = 3; i <= 5; i++) {
    for (var j = 0; j <= 2; j++) {
      arrBlock[3].push(arr[i][j]);
    }
  }

  arrBlock[4] = [];
  for (var i = 3; i <= 5; i++) {
    for (var j = 3; j <= 5; j++) {
      arrBlock[4].push(arr[i][j]);
    }
  }

  arrBlock[5] = [];
  for (var i = 3; i <= 5; i++) {
    for (var j = 6; j <= 8; j++) {
      arrBlock[5].push(arr[i][j]);
    }
  }

  arrBlock[6] = [];
  for (var i = 6; i <= 8; i++) {
    for (var j = 0; j <= 2; j++) {
      arrBlock[6].push(arr[i][j]);
    }
  }

  arrBlock[7] = [];
  for (var i = 6; i <= 8; i++) {
    for (var j = 3; j <= 5; j++) {
      arrBlock[7].push(arr[i][j]);
    }
  }

  arrBlock[8] = [];
  for (var i = 6; i <= 8; i++) {
    for (var j = 6; j <= 8; j++) {
      arrBlock[8].push(arr[i][j]);
    }
  }

if (check(arr) === true && check2(arr) === true && check(arrBlock) === true) {
  return true;
} else {
  return false;
}
}
