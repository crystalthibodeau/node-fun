import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe!</h1>
      <Board/>
      <button onClick={Board()}>Play Again?</button>
    </div>
  );
}

function Square(props) {
  return (
      <div>
        <button className="square btn" onClick={props.onClick}>
          {props.value}
        </button>
      </div>
  );
}

function Board(){
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = index => {

      const squares = [...boardSquares];

      if(calculateWinner(boardSquares) || squares[index]){
        return;
      }

      squares[index] = xIsNext ? "X" : "O";

      setBoardSquares(squares);

      setXisNext(!xIsNext);


  };

  const renderSquare = (index) => {
        return <Square value={boardSquares[index]} onClick={() => handleClick(index)}/>
  };
  let status;
  const winner = calculateWinner(boardSquares);
  if(winner){
    status = 'Winner is: ' + winner;
  }else{
    status = 'Up Next: ' + (xIsNext ? 'X' : 'O');
  }
  return(
      <div>
        <div className="status">{status}</div>
        <div className="div-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
        <div className="div-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
        <div className="div-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
      </div>
  )
}
function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < winningLines.length; i++){
    const [a, b, c] = winningLines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }
  return null;
}
export default App;
