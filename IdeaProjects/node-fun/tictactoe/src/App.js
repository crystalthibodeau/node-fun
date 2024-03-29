import React, {useState} from 'react';
import './App.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Restart({onClick}) {

    return (
        <button className="restart" onClick={onClick}>
            Play again
        </button>
    );
}

function Board() {
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);

    const handleClick = index => {

        const squares = [...boardSquares];


        if (calculateWinner(boardSquares) || squares[index]) {
            return;
        }

        squares[index] = xIsNext ? "X" : "O";

        setBoardSquares(squares);

        setXisNext(!xIsNext);


    };

    function isBoardFull(squares) {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] == null) {
                return false;
            }
        }
        return true;
    }

    const renderSquare = (index) => {
        return <Square value={boardSquares[index]} onClick={() => handleClick(index)}/>
    };

    function renderRestartButton() {
        return (
            <Restart
                onClick={() => {
                    setBoardSquares(Array(9).fill(null));
                    setXisNext(true);
                }}
            />
        );
    }

    let status;
    const winner = calculateWinner(boardSquares);
    if (winner) {
        status = 'Winner is: ' + winner;
    } else if (isBoardFull(boardSquares)) {
        status = "It's a DRAW!";
    } else {
        status = 'Up Next : ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="parent">
            <div className="status">{status}</div>
            <div className="div-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
            <div className="div-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
            <div className="div-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
            {/*<div className="restart-button">{renderRestartButton()}</div>*/}
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

    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
class Navbar extends React.Component{
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <p className="navbar-brand">
                            Tic Tac Toe
                        </p>
                        <label htmlFor="menu-toggle" className="navbar-toggle collapsed">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </label>
                    </div>
                    <input type="checkbox" id="menu-toggle" className="hidden"/>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="">Play again</a>
                            <renderRestartButton/>

                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Board/>
        </div>
    );
}
export default App;
