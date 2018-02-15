import React from 'react';
import ReactDOM from 'react-dom';
import { KeyPad } from './KeyPad.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      pins: 10
    }
  }

  render() {
    return (
      <div className ='container'>
          <div className = "keyPad">
            <h1>Lets Bowl</h1>
            <p>Hit the number of pins you'd like to knock down and press go!</p>
            <KeyPad />
          </div>
          <div className = "scoreCard">
            
          </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));