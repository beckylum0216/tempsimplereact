import React from 'react';

class Game extends React.Component
{
    constructor(props)
    {
        super(props)
        this.boardDims = 3;
        this.state = 
        {
            board: Array(9).fill(null),
            next: "X",
        }
    }

    onRefresh()
    {

    }

    declareWinner(winner)
    {
        if(winner === "X")
        {
            alert("Player One is the winner!!!");
        }
        else
        {
            alert("The computer is the winner!!!");
        }
    }

    detectNull()
    {
        let gameBoard = this.state.board;

        for(let ii = 0; ii < )

    }


    render()
    {

        return ;
    }


}