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
        frameThrows: 2
      },
      player2: {
        score: 0,
        moves: [],
        currentFrame: [],
        frames: 10,
        frameThrows: 2
      },
      currentTurn: "player1",
      message: ''
      //true = Player1
    };
  }

  handleClick(pins){
    let currentTurn = this.state.currentTurn;
    if (this.state[currentTurn].currentFrame.length < 2) {
      this.makeMove(pins, currentTurn);
    }
  }

  strike() {
    //10 pins + pins for next two balls thrown
  }

  spare() {
    // 10 pins + pins for next ball thrown
  }

  changeTurn() {
    let currentTurn = this.state.currentTurn;
    if (currentTurn === 'player1'){
      this.setState({currentTurn: 'player2'});
    } else {
      this.setState({currentTurn: 'player1'});
    }
  }

  makeMove(pins, player){
    let currentFrame = this.state[player].currentFrame;
    console.log(currentFrame);
    if (currentFrame.length < 1) {
      //if 10
      if (pins === 10) {
        this.state.message = "Strike!"
        this.state[player].moves.push([pins]);
        this.state[player].frames--;
        this.setState(this.state);
        //handle strike
        //if pin
      } else if (currentFrame.length === 1) {
        //if currentFrame.length < 2
        currentFrame.push(pins);
      } else if (currentFrame.length === 2) {
        //if currentFrame.length === 2
          //push currentFrame into moves array for player
          this.state[player].moves.push(currentFrame);  
          //push pin num to currentFrame
        
      }

    }
      currentFrame = [];
      this.setState(this.state);  
  } //END MAKE MOVE

  render() {
    return (
      <div className ='container'>
          <div className = "keyPad">
            <h1>Let's Bowl!</h1>
            <p>Hit the number of pins you'd like to knock down and press go</p>
            <KeyPad handleClick={(e) => this.handleClick(e)}/>
          </div>
          <div className ="message">{this.state.message}</div>
          <div className = "scoreCard">
            <ScoreCard p1score={this.state.player1Score} p2score={this.state.player2Score}/>
          </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));