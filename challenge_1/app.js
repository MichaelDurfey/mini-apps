//variables
var board = document.createElement('div');
board.style = 'width: 150px; height: 150px';
board.id = 'board';
document.body.appendChild(board);
//MVC STYLE
var turn = false;
//false === X, true === O;
//board --> Data to implement and change board;
  //MODEL
  //document.addeventlistener(event.type, listener, )
let boardArr = [];

var createBoard = function(){
  for (let r = 0 ; r< 3; r++){
    board.push([])
    for (let c = 0; c < 3; c++){
      board[r].push(0);
    }
  }
  return board;
};
var boardArr = createBoard;

//CONTROLLER / VIEW
var handleClick = function(event){
  console.log('clicked!');
}

var loadBoard = function(){
  board.innerHTML = '';
  var table = document.createElement('table');
  for (let r =0; r< boardArr.length; r++){
    var row = document.createElement('tr');
    for (let c = 0; c < boardArr[r].length; c++){
      // let space = document.createElement('div');
      var td = document.createElement('td');
      // console.log(space, board)
      td.className = 'space';
      td.id = `${r}${c}`
      if (boardArr[r][c] === 0){
        td.className = 'space empty'
      } else if (boardArr[r][c] === 'X') {
        td.innerHTML = 'X';
      } else {
        td.innerHTML = 'O';
      }
      td.style = 'width: 50px; height: 50px; border: solid; margin: 0px';
      row.appendChild(td);
    }
    board.appendChild(row);
  }
}
loadBoard();


board.addEventListener('click', function(event){
  let coordinate = event.target.id.split('');
  var letter = turn ? 'O' : 'X';
  let boardArrAtCoordinate = boardArr[coordinate[0]][coordinate[1]];
  if (boardArrAtCoordinate === 0){
    boardArr[coordinate[0]][coordinate[1]] = letter;
    turn = !turn;
    loadBoard();
  }
});

var button = document.createElement('button');
button.addEventListener('click', function(event){
  boardArr();
  loadBoard();
  console.log('clicked!!!')
})
document.body.appendChild(button);


// document.onload(createBoard());

//VIEW
