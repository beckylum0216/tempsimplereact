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


    createCol(row)
    {
        var col = [];

        for(let ii = 0; ii < 3; ii += 1)
        {
            let count = (row * 3) + ii;
            col.push(<Square value={this.props.squares[count]} onClick={() => this.props.onRefresh(count)} />)
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