/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({n: n});

  for (var i = 0; i < n; i++) {
    board.togglePiece(i, i);
    solution.push(board._currentAttributes[i]);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  var count = 0;

  var helper = function(nRow) {
    //iterate across the columns
    board.get(nRow);
    for (var i = 0; i < n; i++) {
      board.togglePiece(nRow, i);
      
      if (!board.hasAnyColConflicts()) {
        if (nRow === n - 1) {
          board.togglePiece(nRow, i);    
          return ++count;
        }
        helper(nRow + 1);
      }

      board.togglePiece(nRow, i);
    }
  };

  helper(0);


  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme

  var board = new Board({n: n});
  var count = 0;

  var helper = function(nRow) {
    //iterate across the columns
    board.get(nRow);
    for (var i = 0; i < n; i++) {
      board.togglePiece(nRow, i);
      
      if (!board.hasAnyColConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()) {
        if (nRow === n - 1) {
          solution.push(board._currentAttributes);
          board.togglePiece(nRow, i);          
        }
        helper(nRow + 1);
      }

      board.togglePiece(nRow, i);
    }
  };
  helper(0);
  // return solution.map(function(obj) {  
  //   var arr = [];

  // });
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }
  var board = new Board({n: n});
  var count = 0;

  var helper = function(nRow) {
    //iterate across the columns
    board.get(nRow);
    for (var i = 0; i < n; i++) {
      board.togglePiece(nRow, i);
      
      if (!board.hasAnyColConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()) {
        if (nRow === n - 1) {
          board.togglePiece(nRow, i);    
          return ++count;
        }
        helper(nRow + 1);
      }

      board.togglePiece(nRow, i);
    }
  };

  helper(0);


  return count;
};
