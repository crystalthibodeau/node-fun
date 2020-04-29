import React, {Component} from 'react';
import './App.css';
import cloneDeep from 'lodash.clonedeep';

import Board from "./Components/Board.js";

const rows = 3;
const columns = 3;
const row_array = new Array(rows).fill('');
const col_array = new Array(columns).fill('');
const grid = row_array.map(x => col_array.slice());


class App extends Component {
    state = {
        boxes: cloneDeep(grid),
    };

    render() {
        const boxes = this.state;
        console.log(boxes);
        return (
            <div className="App">
                <h1>Tic Tac Toe!</h1>
                <h3>Ready to play?</h3>
                <Board boxes={boxes}/>
            </div>
        );
    }
}


export default App;
