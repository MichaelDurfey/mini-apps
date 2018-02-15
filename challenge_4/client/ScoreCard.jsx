import React from 'react';

const ScoreCard = ({ p1score, p2score }) => {
  return (
    <table>
      <thead>
          <tr>
            <th> Player 1 </th>
            <th> Player 2 </th>
          </tr>
      </thead>
      <tbody className = "tableBody">
        <tr>
          <td>{p1score}</td>
          <td>{p2score}</td>
        </tr>
      </tbody>
    </table>
  )
}

export { ScoreCard };