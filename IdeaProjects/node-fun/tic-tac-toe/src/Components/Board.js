import React from 'react'
import Row from "./Row";
const Board = ({boxes}) => (
    <div>
        <h1>Board</h1>
        <Row boxes={boxes}/>
    </div>
);
export default Board;