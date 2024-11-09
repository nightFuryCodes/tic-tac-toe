import "./Board.css"


export default function Board({ board, size, handleClick }){



    return <div className = "container" style = {{ gridTemplateColumns: `repeat(${size}, 100px)` }}>
        {board.map((row, rowIndex)=>{
            return row.map((col, colIndex)=>{
                return <div key = {colIndex} onClick = {()=>{handleClick(rowIndex, colIndex)}}className="box">
                        <b>{col}</b>
                    </div>
            })
        })}
    </div>
}