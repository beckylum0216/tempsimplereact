import React from 'react';
import Square from './square';

class Board extends React.Component{

    winSquare(counter)
    {
        for(let ii = 0; ii < this.props.winSquare.length; ii += 1)
        {
            if(counter === this.props.winSquare[ii])
            {
                return true;
            }
        }

        return false;
    }

    createCol(row)
    {
        var col = [];

        for(let ii = 0; ii < 3; ii += 1)
        {
            let count = (row * 3) + ii;
            
            
            console.log("winSquare: ", this.winSquare(count));

            col.push(<Square key={count} winState={this.winSquare(count)} value={this.props.squares[count]} onClick={() => this.props.onRefresh(count)} />)
        }

        return <div key={"col"+row}>{col}</div>;
    }

    createBoard(){
        var row = [];
        
        for(var ii = 0; ii < 3; ii++)
        {
            row.push(this.createCol(ii));
        }

        return <div key={"rowsie"}>{row}</div>;
    }

    render()
    {
        return <div key={"boardsie"}>{this.createBoard()}</div>;
    }
}

export default Board;