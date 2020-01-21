import React from 'react';
import Square from './square';

class Board extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
        }
    }


    eventHandler(counter)
    {
        let board = this.state.squares.slice();
        board[counter] = "X";
        console.log("board:", board);
        this.setState({squares:board});

    }

    createCol(row)
    {
        var col = [];
        for(let ii = 0; ii < 3; ii += 1)
        {
            let count = (row * 3) + ii;
            col.push(<Square value={this.state.squares[count]} onClick={() =>this.eventHandler(count)} />)
        }

        return <div>{col}</div>;
    }

    createBoard(){
        var row = [];
        
        for(var ii = 0; ii < 3; ii++)
        {
            row.push(this.createCol(ii));
        }

        return <div>{row}</div>;
    }

    render()
    {
        return <div>{this.createBoard()}</div>;
    }
}

export default Board;