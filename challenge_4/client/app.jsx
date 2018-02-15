import React from 'react';
import ReactDOM from 'react-dom';

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
            <Keypad />
          </div>
          <div className = "scoreCard">
            
          </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));