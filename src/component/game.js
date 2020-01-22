import React from 'react';
import Board from './board';

class Game extends React.Component
{
    constructor(props)
    {
        super(props)
        this.winArr = [];
        this.positionArr = [0,1,2,3,4,5,6,7,8];
        this.moveIndex = 0;
        this.boardDims = 3;
        this.breakFlag = false;
        this.state = {
            gboard: Array(9).fill(null),
            winElement: [],
        }
    }


    // contains game logic
    onRefresh = (position) =>
    {

        let gameBoard = this.state.gboard;

        if(this.winCondition() === false && this.moveIndex > (this.boardDims * this.boardDims)-1)
        {

            alert("The game is a draw");
        }
        else
        {
            if(this.winCondition() === false)
            {
                // registering player move
                if(gameBoard[position] === null)
                {
                    gameBoard[position] = "X";
                    this.moveIndex++;


                    // pop off used position for randomised computer move
                    for(let ii = 0; ii < this.positionArr.length; ii += 1)
                    {
                        console.log("position: ", typeof(position), " arr: ", typeof(this.positionArr[ii]));
                        if(this.positionArr[ii] === position)
                        {
                            this.positionArr.splice(ii, 1);
                            break;
                        }
                    }

                    console.log("positionArr", this.positionArr);
                    this.setState({gboard: gameBoard});
                    
                }
                
            }
            else
            {
                this.breakFlag = true;
                this.declareWinner("O");
            }
            
            if(this.winCondition() === false)
            {
                // registering computer move
                let pos = Math.floor(Math.random() * this.positionArr.length);
                let num = this.positionArr[pos];
                gameBoard[num] = "O";

                // pop off occupied position
                for(let jj = 0; jj < this.positionArr.length; jj += 1)
                {
                    if(this.positionArr[jj] === num)
                    {
                        this.positionArr.splice(jj, 1);
                    }
                }
                
                this.moveIndex++;
                this.setState({board: gameBoard});
                
            }
            else
            {
                if(!this.breakFlag)
                {
                    this.declareWinner("X");
                }
                
            }
            
        }
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

    // checks if board is "dirty" otherwise win condition will be satisfied
    detectNull()
    {
        let counter = 0;
        let gameBoard = this.state.gboard;
        for(let ii = 0; ii < this.boardDims; ii += 1)
        {
            for(let jj = 0; jj < this.boardDims; jj += 1)
            {
                if(gameBoard[ii+jj] === null)
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

    // row win logic
    rowWinCondition()
    {
        let gameBoard = this.state.gboard;

        for(let ii = 0; ii < this.boardDims; ii += 1)
        {
            let factor = ii * this.boardDims;
            if(gameBoard[factor] === gameBoard[factor + 1] && 
                gameBoard[factor + 1] === gameBoard[factor + 2] && 
                gameBoard[factor] !== null)
            {
                console.log("row win: ", ii);
                this.winArr.push(factor);
                this.winArr.push(factor + 1);
                this.winArr.push(factor + 2);
                this.setState({winElement: this.winArr});
                return true;
            }
        }

        return false;
    }

    // column win logic
    colWinCondition()
    {
        let gameBoard = this.state.gboard;

        for(let ii = 0; ii < this.boardDims; ii += 1)
        {
            
            if(gameBoard[ii] === gameBoard[ii + this.boardDims] && 
                gameBoard[ii + this.boardDims] === gameBoard[ii + (this.boardDims + this.boardDims)] &&
                    gameBoard[ii] !== null)
            {
                console.log("Col win", ii);
                this.winArr.push(ii);
                this.winArr.push(ii + this.boardDims);
                this.winArr.push(ii + (this.boardDims * this.boardDims));
                this.setState({winElement: this.winArr});
                return true;
            }

        }

        return false;
    }


    // diagonal win logic
    diagWinCondition()
    {
        let gameBoard = this.state.gboard;

        // backward diagonal
        if(gameBoard[0] === gameBoard[4] && 
            gameBoard[4] === gameBoard[8] &&
                gameBoard[0] !== null)
        {
            console.log("bwd diag win!!!");
            this.winArr.push(0);
            this.winArr.push(4);
            this.winArr.push(8);
            this.setState({winElement: this.winArr});
            return true;
        }

        // forward diagonal
        if(gameBoard[2] === gameBoard[4] && 
            gameBoard[4] === gameBoard[6] && 
                gameBoard[2] !== null)
        {
            console.log("fwd diag win!!!");
            this.winArr.push(2);
            this.winArr.push(4);
            this.winArr.push(6);
            this.setState({winElement: this.winArr});
            return true;
        }
        
        return false;
    }

    // win logic
    winCondition()
    {
        if(!this.detectNull())
        {
            return this.rowWinCondition() || this.colWinCondition() || this.diagWinCondition();
        }

        return false;
    }

    
    render()
    {
        return <div key={"gameboard"}><Board winSquare={this.winArr} squares={this.state.gboard} onRefresh={this.onRefresh} /></div>;
    }


}

export default Game;