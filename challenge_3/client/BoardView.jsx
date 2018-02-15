import React from 'react';
import BoardRow from './BoardRow.jsx';

const BoardView = function({ board}) {
  return (

    <div>
      <table>
        <tbody>
        {
          board.map(boardRow => {
            return (
                <BoardRow className = "row" row={boardRow} />
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

module.exports = BoardView;