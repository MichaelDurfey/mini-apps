import React from 'react';

class KeyPad extends React.Component {
  constructor(){
    super();
    this.state = {
      currentMove: 0
    }
  }

  handleClick(e){
    if (e.target.classList[0] === 'space') {
      this.setState({currentMove: e.target.id});
    }
  }

  handleUpdate(){
    this.props.handleClick(this.state.currentMove);
    this.setState({currentMove: 0})
  }

  render() {
    return (
      <div >
        <div value ={this.state.currentMove}>Pins to knock: {this.state.currentMove}</div>
        <table onClick ={(e) => this.handleClick(e)}>
          <tbody className = "keyPadTable">
            <tr>
              <td className="space" id="1">1</td>
              <td className="space" id="2">2</td>
              <td className="space" id="3">3</td>
            </tr>
            <tr>
              <td className="space" id="4">4</td>
              <td className="space" id="5">5</td>
              <td className="space" id="6">6</td>
            </tr>
            <tr>
              <td className="space" id="7">7</td>
              <td className="space" id="8">8</td>
              <td className="space" id="9">9</td>
            </tr>
            <tr>
              <td className = "space" id="10">10</td> 
            </tr>
          </tbody>
        </table>
        <button onClick={() => this.handleUpdate()}value ="MakeMove">Knock pins!</button>      
      </div>
    )
  }
}

export { KeyPad };