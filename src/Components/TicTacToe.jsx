import Board from "./Board";
import { useState } from "react"
import { checkWinner, initial} from "./Utils/checkWinner";



export default function TicTacToe({ size }){

    const [board, setBoard] = useState(initial(size))
    const [values, setValues] = useState("")
    const winner = checkWinner(board, size)

    const status = winner 
        ? `${winner} wins`
        : values == "" || values == "O"
        ? "X's turn"
        : "O's turn"

function handleClick(rowIndex, colIndex){

        if(board[rowIndex][colIndex] || winner){
            return;
        }
        const deepCopy = JSON.parse(JSON.stringify(board));
        {values === "" || values == "O" ? deepCopy[rowIndex][colIndex] = "X" : deepCopy[rowIndex][colIndex] = "O"}

        setValues(deepCopy[rowIndex][colIndex])

        setBoard(deepCopy);
    }
function handleReset(){
    setBoard(initial(size))
}

    return <div>
        <Board board = {board} size = {size} handleClick = {handleClick}/>
        <div className = "status">Status: {status}</div>
        <button onClick = {handleReset}>Reset</button>
    </div>
}