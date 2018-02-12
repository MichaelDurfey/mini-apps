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


var boardArr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

//CONTROLLER / VIEW
var handleClick = function(event){
  console.log('clicked!');
}

var loadBoard = function(){
  board.innerHTML = '';
  for (let r =0; r< boardArr.length; r++){
    for (let c = 0; c < boardArr[r].length; c++){
      let space = document.createElement('div');
      // console.log(space, board)
      space.className = 'space';
      space.id = `${r}${c}`
      if (boardArr[r][c] === 0){
        space.className = 'space empty'
      } else if (boardArr[r][c] === 'X') {
        space.innerHTML = 'X';
      } else {
        space.innerHTML = 'O';
      }
      space.style = 'width: 50px; height: 50px; border: solid; margin: 0px';
      board.appendChild(space);
    }
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


// document.onload(createBoard());

//VIEW
