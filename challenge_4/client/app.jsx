import React from 'react';
import ReactDOM from 'react-dom';
import { KeyPad } from './KeyPad.jsx';
import { ScoreCard } from './ScoreCard.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: {
        score: 0,
        //totalmoves:
        moves: [],
        //currentframe:
        currentFrame: [],
        frames: 10,
      },
      player2: {
        score: 0,
        moves: [],
        currentFrame: [],
        frames: 10,
      },
      currentTurn: true,
      message: ''
      //true = Player1
    };
  }

  changeTurn() {
    let currentTurn = this.state.currentTurn;
    this.state.currentTurn = !this.state.currentTurn;
  }

  handleClick(pins){
    let currentTurn = this.state.currentTurn === true ? 'player1' : 'player2';
    this.makeMove(pins, currentTurn);
  }

  gameOver(){
    this.setState({message: 'Game Over!'});
  }

  incrementTurn(player){
    let currentFrame = this.state[player].currentFrame;
    if (currentFrame[0] + currentFrame[1] === 10) {
      this.state.message = "Spare!!!";
    } else if (currentFrame[0] === 10) {
      this.state.message = "Strike!";
    }
    this.state[player].moves.push(currentFrame);
    if (this.state[player].frames !== 0) {
      this.state[player].frames--;
    }
    this.state[player].currentFrame = [];
    this.changeTurn();
    this.calculateScore(player);
  }

  calculateScore(player) {
    let playerMoves = this.state[player].moves;
    let score = 0;

    for (let i =0; i< playerMoves.length; i++) {
      let frameSum = (i) => playerMoves[i].reduce( (acc, curr) => acc + curr, 0);
      if (playerMoves[i].length === 1 && frameSum(i) === 10) {
        // start another loop and see if next values are 10
        if (playerMoves[i+1]){
          score += (frameSum(i) + frameSum(i+1));
        } else {
          score += (frameSum(i));
        }
        //if next value is 10 keep incrementing until it's not
        //if it's not, set initial value to the total of the next two throws
      } else if (playerMoves[i].length === 2 && frameSum(i) === 10) {
        if (playerMoves[i+1]) {
          score += (frameSum(i) + playerMoves[i+1][0]);
        } else {
          score += (frameSum(i));
        }
      } else if (playerMoves[i].length === 2 && frameSum(i) < 10) {
        score += (frameSum(i));
      }
    }
    this.state[player].score = score;
    this.setState(this.state);
  }

  makeMove(pins, player){
    pins = Number(pins);
    let currentFrame = this.state[player].currentFrame;
    let playerFrameCount = this.state[player].frames;
    let strikeThrownInTenth = false;
    let spareThrownInTenth = false;
    // LAST FRAME ----------
    if (playerFrameCount === 0) {
      let frameSum = () => currentFrame.reduce( (acc, curr) => acc + curr, 0);
      if (pins === 10 && currentFrame.length < 3) {
        currentFrame.push(pins);
        if (currentFrame.length === 3){
          this.incrementTurn(player);
          this.gameOver();
        }
        strikeThrownInTenth = true;
      }
      if (strikeThrownInTenth && currentFrame.length < 3) {
        currentFrame.push(pins);
      }
      else if (currentFrame.length < 2 && frameSum === 10) {
        spareThrownInTenth = true;
        if (spareThrownInTenth && currentFrame.length < 3){
          currentFrame.push(pins);
        }
        if (currentFrame.length === 3) {
          this.incrementTurn(player);
          this.gameOver();
        }
      }
      // END LAST FRAME -----
    } else {
      if (currentFrame.length === 0) {
        if (pins === 10) {        
          currentFrame.push(pins);
          this.incrementTurn(player);
        } else {
          currentFrame.push(pins);
          this.state.message = `Knocked ${pins}!!!`
          this.setState(this.state);
        }
      } else if (currentFrame.length === 1) {
        if ((pins + currentFrame[0]) > 10) {
          this.state.message = 'Too many pins! Try again!!!';
          this.setState(this.state);
        } else {
          this.state.message = `Knocked ${pins}!!!`
          currentFrame.push(pins);
          this.incrementTurn(player);
        }        
      }  
    }
    this.setState(this.state);
  } //END MAKE MOVE

  render() {
    let currentTurn = this.state.currentTurn === true ? 'player1' : 'player2';
    return (
      <div className ='container'>
          <div className = "keyPad">
            <h1>Let's Bowl!</h1>
            <div>Player turn: {currentTurn}</div>        
            <div>Player frames left: {this.state[currentTurn].frames}</div>
            <KeyPad handleClick={(e) => this.handleClick(e)}/>
            <div className ="message">{this.state.message}</div>
          </div>          
          <div className = "scoreCard">
            <ScoreCard p1score={this.state.player1.score} p2score={this.state.player2.score}/>
          </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));