import React from 'react';
import Board from './board';

class Game extends React.Component
{
    constructor(props)
    {
        super(props)
        this.boardDims = 3;
        this.state = {
            gboard: Array(9).fill(null),
            next: "X",
        }
    }

    onRefresh = (position) =>
    {
        var gameBoard = this.state.gboard;
        gameBoard[position] = this.state.next;
        this.setState({gboard: gameBoard});
        this.setState({next: "O"})
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
        let counter = 0;

        for(let ii = 0; ii < this.boardDims; ii += 1)
        {
            for(let jj = 0; jj < this.boardDims; jj += 1)
            {
                if(this.state.gboard[ii+jj]===null)
                {
                    counter++;
                }
            }
        }

        if(counter === (this.boardDims * this.boardDims))
        {
            console.log("empty board!!!");
            
            return true;
        }
        else
        {
            console.log("dirty board!!!");

            return false;
        }

    }

    rowWinCondition()
    {
        let gameBoard = this.state.gboard;

        for(let ii = 0; ii < this.boardDims; ii += 1)
        {
            let factor = ii * this.boardDims;
            if(gameBoard[factor] === gameBoard[factor + 1] && gameBoard[factor + 1] === gameBoard[factor + 2])
            {
                return true;
            }
        }

        return false;
    }

    colWinCondition()
    {
        let gameBoard = this.state.gboard;

        for(let ii = 0; ii < this.boardDims; ii += 1)
        {
            
            if(gameBoard[ii] === gameBoard[ii + this.boardDims] && gameBoard[ii + this.boardDims] === gameBoard[ii + (this.boardDims + this.boardDims)])
            {
                return true;
            }

        }

        return false;
    }

    diagWinCondition()
    {
        let gameBoard= this.state.gboard;

        
        if(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8])
        {
            return true;
        }

        if(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])
        {
            return true;
        }
        
        return false;
    }

    winCondition()
    {
        return !this.detectNull() && this.rowWinCondition() && this.colWinCondition() && this.diagWinCondition();
    }

    logic()
    {
        let gameBoard = this.state.gboard;
        let moves = Array(this.boardDims * this.boardDims).fill(null);
        let moveIndex = 0;
        let x = 0;
        let y = 0;
        
        
        if(this.winCondition() === false && moveIndex < (this.boardDims * this.boardDims))
        {
            if(this.state.next === "O")
            {
                x = moves[moveIndex] / this.boardDims;
                y = moves[moveIndex] % this.boardDims;
                gameBoard[x+y] = "O";
                moveIndex++;
                this.setState({board: gameBoard});
                this.setState({next:"X"});
                return <Board squares={this.state.gboard} onRefresh={this.onRefresh} />
            }
            else
            {
                moveIndex++
                return <Board squares={this.state.gboard} onRefresh={this.onRefresh} />
            }

        }



    }

    render()
    {
        return <div>{this.logic()}</div>;
    }


}

export default Game;