import React from 'react';
const BoardRow = ({ row }) => {
  return (
    <tr>
      {
    row.map( (item, index)  => {
      return item === true ? <td className ={`space red ${index}` } id={index}></td> : item === false ? 
      <td className ={`space black ${index}` } id = {index}></td> : 
      <td className = {`space empty ${index}`} id ={index}></td>;
    })
    }
    </tr>
  )
}

module.exports = BoardRow;