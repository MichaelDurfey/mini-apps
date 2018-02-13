//variables
var flexContainer = document.createElement('div');
flexContainer.className = 'flexContainer';
document.body.appendChild(flexContainer);
var h1 = document.createElement('h1');
h1.innerHTML = '<h1>Tic-Tac-Toe</h1>';
flexContainer.appendChild(h1);
var board = document.createElement('div');
board.style = 'width: 245px; height: 200px';
board.id = 'board';
flexContainer.appendChild(board);
//MVC STYLE
var turn = false;
//false === X, true === O;
//board --> Data to implement and change board;
  //MODEL
  //document.addeventlistener(event.type, listener, )

//find row win


var createBoard = function(){
  let board = [];
  for (let r = 0 ; r< 3; r++){
    board.push([])
    for (let c = 0; c < 3; c++){
      board[r].push(0);
    }
  }
  return board;
};
var boardArr = createBoard();

//CONTROLLER / VIEW
var handleClick = function(event){
  console.log('clicked!');
}

var loadBoard = function(){
  board.innerHTML = '';
  var table = document.createElement('table');
  for (let r =0; r< boardArr.length; r++){
    var row = document.createElement('tr');
    row.className = 'tableRow';
    for (let c = 0; c < boardArr[r].length; c++){
      // let space = document.createElement('div');
      var td = document.createElement('td');
      // console.log(space, board)
      td.className = 'space';
      td.id = `${r}${c}`
      if (boardArr[r][c] === 0){
        td.className = 'space empty'
      } else if (boardArr[r][c] === 'X') {
        td.innerHTML = '<p>X</p>';
      } else {
        td.innerHTML = '<p>O</p>';
      }
      td.style = 'width: 80px; height: 80px';
      row.appendChild(td);
    }
    board.appendChild(row);
  }
}
loadBoard();


//BEGIN WIN CHECKER FUNCTIONS VVVVVV

var findRowWin = function(){
  for (let r = 0; r<boardArr.length; r++){
    var counterX = 0;
    var counterY = 0;
    for (let c=0;c<boardArr[r].length; c++){
      if (boardArr[r][c] === 'O'){
        counterY++;
      } else if (boardArr[r][c] === 'X'){
        counterX++;
      }
      if (counterX === 3) {
        return 'X';
      } else if (counterY === 3){
        return 'O';
      }
    }
  }
}

//find diagonal win
var findDiagonalWin = function(){
  var counterX = 0;
  var counterY = 0;
  for (let r = 0; r < boardArr.length;) {
    for (let c = 0; c < boardArr.length;) {
      if (boardArr[r][c] === 'X') {
        counterX++;
      } else if (boardArr[r][c] === 'O'){
        counterY++;
      }
      if (counterX === 3) {
        return 'X';
      } else if (counterY === 3){
        return 'O';
      }
      r += 1;
      c += 1;
      console.log('R', r, 'C', c)
    }
  }
}

var findCrossDiagonalWin = function() {
  var counterX = 0;
  var counterY = 0;
  for (let r = boardArr.length - 1; r > 0;) {
    for (let c = 0; c < 3;) {
      if (boardArr[r][c] === 'X') {
        counterX++;
      } else if (boardArr[r][c] === 'O'){
        counterY++;
      }
      if (counterX === 3) {
        return 'X';
      } else if (counterY === 3){
        return 'O';
      }
      r -= 1;
      c += 1;
    }
  }
}

//find column win
var findColumnWin = function() {
  for (let r = 0; r < boardArr.length; r++) {
    var counterX = 0;
    var counterY = 0;
    for (let c = 0; c < boardArr.length; c++) {
      if (boardArr[c][r] === 'O'){
          counterY++;
      } else if (boardArr[c][r] === 'X') {
          counterX++;
        }
    }
    if (counterX === 3) {
      return 'X';
    } else if (counterY === 3){
      return 'O';
    }
  }
}

var checkForTie = function(){
  var tie = false;
  for (let r = 0; r < boardArr.length; r++) {
    if (!boardArr[r].includes(0)) {
      tie = true;
    } else {
      tie = false;
      break;
    }
  }
  return tie;
}

var checkForWin = function() {
  let winner = findColumnWin() || findDiagonalWin() || findRowWin() || findCrossDiagonalWin();
  let board = document.getElementById('board');
  if (winner) {
    while (board.firstchild){
      board.removeChild(board.firstchild);
    }
    let winnerDiv = document.createElement('div');
    winnerDiv.innerHTML = `<h1>Player ${winner} wins!!!</h1>`
    board.appendChild(winnerDiv);
  } else if (checkForTie()){
    while (board.firstchild){
      board.removeChild(board.firstchild);
    }
    let tieDiv = document.createElement('div');
    tieDiv.innerHTML = `<h1>It's a tie!!!</h1>`
    board.appendChild(tieDiv);
  }
}

//check for win ^^^^


board.addEventListener('click', function(event) {
  let coordinate = event.target.id.split('');
  var letter = turn ? 'O' : 'X';
  let boardArrAtCoordinate = boardArr[coordinate[0]][coordinate[1]];
  if (boardArrAtCoordinate === 0){
    boardArr[coordinate[0]][coordinate[1]] = letter;
    turn = !turn;
    loadBoard();
    checkForWin();
  }
});

var button = document.createElement('button');
button.style = 'margin: 75px; width: 50px; height: 20px';
button.innerHTML = 'Reset'
button.addEventListener('click', function(event){
  boardArr = createBoard();
  loadBoard();
  console.log('clicked!!!')
})
flexContainer.appendChild(button);


// document.onload(createBoard());

//VIEW
