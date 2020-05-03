import React, {Component} from 'react';
import cloneDeep from 'lodash.clonedeep';
import './App.css';


import Board from "./Components/Board.js";

const rows = 3;
const COLUMNS = 3;
const ROW_ARRAY = new Array(rows).fill('');
const COL_ARRAY = new Array(COLUMNS).fill('');
const GRID = ROW_ARRAY.map(x => COL_ARRAY.slice());


class App extends Component {
    state = {
        grid: cloneDeep(GRID),
    };

    render() {
        const grid = this.state;
        console.log(grid);
        return (
            <div>
                <h1>Tic Tac Toe!</h1>
                <h3>Ready to play?</h3>
                <Board rows={grid}/>
            </div>
        );
    }
}


export default App;
