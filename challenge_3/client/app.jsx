import React from 'react';
import ReactDOM from 'react-dom';
import BoardView from './BoardView.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [],
      currentPiece: true,
      message: 'Game on!'
    }
  }

  checkForTie(){

  }

  checkForWin(){
    //check for row win
    let winner = this.checkForRowWin() || this.checkForColumnWin() || this.checkForCrossDiagonalWin() || this.checkForDiagonalWin();
    if (winner) {
      this.setState({message: `${winner} wins!!`})
    };
    console.log(this.checkForRowWin());
  
    //check for column win
    //check for diagonal win
    //check for cross diagonal win
  }

  componentDidMount() {
    this.init();
  }

  checkForCrossDiagonalWin() {
    let board = this.state.board;
    for (let row = 0; row < board.length - 3; row++) {
      for (let col = 3; col < board[row].length; col++) {
        if (board[row][col] !== null && board[row][col] === board[row+1][col-1] === board[row+2][col-2] === board[row+3][col-3]) {
          if (board[row][col] ) {
            return 'Red';
          } else if (board[row][col] === false) {
            return 'Black';
          }
        }
      }
    }
    return false;
  }

  checkForDiagonalWin() {
    let board = this.state.board;
    for (let row = 0; row < board.length - 3; row++) {
      for (let col = 0; col < board[row].length - 3; col++) {
        if (board[row][col] !== null && board[row][col] === board[row+1][col+1] === board[row+2][col+2] === board[row+3][col+3]) {
          console.log('diagonalwin' , board[row][col])
          if (board[row][col]) {
            return 'Red';
          } else if (board[row][col] !== null){
            return 'Black';
          }
        }
      }
    }
    return false;
  }

  checkForColumnWin(){
    let innerFunc = (n = 0, i = 0) => {
      if (n ===  9) {
        return false;
      }
      let redCounter = 0;
      let blackCounter = 0;
      while (i < this.state.board.length) {
        if (this.state.board[i][n] === true) {
          redCounter++
        } else if (this.state.board[i][n] === false) {
          blackCounter++
        }
        if (redCounter === 4) {
          return 'Red';
        } else if (blackCounter === 4) {
          return 'Black';
        }
        i++
      }
      return innerFunc (n + 1, i = 0)
    }
    return innerFunc()
  }

  checkForRowWin() {
    let board = this.state.board;
    for (let row = 0; row < board.length - 3; row++) {
      for (let col = 0; col < board.length[row] - 3; c++) {
        if (board[row][col]) {
          if (board[row][col] !== null && board[row][col] === board[row][col + 1] === board[row][col + 2] === board[row][col + 3]) {
            console.log('rowWin' , board[row][col])
            if (board[row][col]) {
              return 'Red';
            } else {
              return 'Black';
            }
          }
        }
      }
    }
  }

  handleClick(e){
    // console.log(e.target.id)
    // console.log(e.target.classList)
    let rowIndex = e.target.classList[2];
    let empty = e.target.classList[1] === 'empty';
    if (empty) {
      this.makeMove(rowIndex)
    }
    this.checkForWin();
    this.checkForTie();
  }

  init (h = 6, w = 9){
    let newBoard = [];
    for (let i = 0; i < h; i++) {
      newBoard[i] = [];
      for (let n = 0; n < w; n++) {
        newBoard[i][n] = null;
      }
    }
    this.setState({board: newBoard})
  }

  makeMove(rowIndex) {
    let clickedRow = this.state.board.map( space => {
      return space[rowIndex];
    });
    if (clickedRow.includes(null)) {
      let moveIndex = 0;
      while (clickedRow[moveIndex + 1] === null) {
        moveIndex++;
      }
      this.state.board[moveIndex][rowIndex] = this.state.currentPiece;
      this.state.currentPiece = !this.state.currentPiece;
      this.setState(this.state);
    } else {
      //CURRENT ROW FULL!!!!!!
    }
  }

  render(){
    return (
      <div className = "container" onClick={(e) => this.handleClick(e)}>
        <h1> Connect Four</h1>
        <div className = "board">
          <BoardView className = "boardView" board={this.state.board} />
        </div>
        <div className = 'message'>{this.state.message}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));





//create board with two loops 6 X 9


// var board = [];

// class ConnectFour {
//   constructor() {
//     this.board = [];
//     this.init = (w = 6, h = 9) =>{
//       for (let i = 0; i <= w; i++) {
//         this.board[i] = [];
//         console.log(board);
//         for (let n = 0; n < h; n++) {
//           this.board[i][n] = null;
//         }
//       }
//     }
//     this.init();
//     console.log(this.board)
//   }

// }

//MOVES
//on each column click, insert a piece in that space
  //track columns! 

//CHECKING FOR WIN
//on each column click, check for a win
  //diagonal win
  //crossdiagonal win

//CHECK FOR TIE
  //if no spaces left, return tie




