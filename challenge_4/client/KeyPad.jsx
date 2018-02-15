import React from 'react';

const KeyPad = () => {
  return (
    <div >
      <table>
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
            <td className = "space" id="0">0</td> 
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export { KeyPad };