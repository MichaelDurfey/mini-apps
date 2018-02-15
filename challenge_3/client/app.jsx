import React from 'react';
import ReactDOM from 'react-dom';
import BoardView from './BoardView.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [],
      currentPiece: true
    }
  }

  checkForTie(){

  }

  checkForWin(){
    //check for row win
    let winner = this.checkForRowWin() || this.checkForColumnWin() || this.checkForCrossDiagonalWin() || this.checkForDiagonalWin();
    if (winner) {document.getElementsByClassName('boardView').appendChild(`winner is ${winner}!!`) };
    // console.log(this.checkForCrossDiagonalWin());
  
    //check for column win
    //check for diagonal win
    //check for cross diagonal win
  }

  componentDidMount() {
    this.init();
  }

  checkForCrossDiagonalWin() {
    // for (let i = 0; i < this.state.board.length;) { 
    //   let redCounter = 0;
    //   let blackCounter = 0;
    //   for (let n = -4; n < 13;){
    //     if (n >= 0 && n <= 9 && i <= this.state.board.length) {
    //       if (this.state.board[i][n] === true) {
    //         redCounter++;
    //       } else if (this.state.board[i][n] === false) {
    //         blackCounter++;
    //       }
    //       if (redCounter === 4) {
    //         return 'Red';
    //       } else if (blackCounter === 4) {
    //         return "Black";
    //       }
    //       i++;
    //       n++;
    //     }
    //   }
    // }
    return false;
  }

  checkForDiagonalWin() {
    // let redCounter = 0;
    // let blackCounter = 0;
    // let x = 0;
    //   while ( x < 11){
    //   for (let i = 0; i < 6;) {
    //     for (let n = -4; n < 13; n++) {
    //       console.log(i, n)
    //       if (this.state.board[i][n] !== undefined && this.state.board[i][n] === true){
    //         redCounter++;
    //       } else if (this.state.board[i][n] !== undefined && this.state.board[i][n] === false) {
    //         blackCounter++;
    //       }
    //       i++;
    //     }
    //     if (redCounter === 4) {
    //       return 'Red';
    //     } else if (blackCounter === 4) {
    //       return "Black";
    //     }
    //   }
    //   x++;
    // }
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
    this.state.board.forEach( row => {
      let counterRed = 0;
      let counterBlack = 0;
      row.forEach( space => {
        if (space === true) {
          counterRed++;
        } else if (space === false) {
          counterBlack++;
        }
        if (counterBlack === 4) {
          //DO SOME WINNER THING!!!!
          return 'Black'
        } else if (counterRed === 4) {
          return 'Red'
        }
      })
    });
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




