// import React,{useState} from "react";
// export default function Game() {
//     const [squares, setSquares] = useState(Array(9).fill(null));
//     const [xIsNext, setXIsNext] = useState(true);
//     function handlePlay(newSquares) {
//     setSquares(newSquares);
//     setXIsNext(!xIsNext);
//     }
//     function handleRestart() {
//     setSquares(Array(9).fill(null));
//     setXIsNext(true);
//     }
//     const winner = calculateWinner(squares);
//     let status;
//     if (winner) {
//     status = "Winner: " + winner;
//     } else if (squares.every((square) => square !== null)) {
//     status = "It's a tie!";
//     } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//     }
//     return (
//     <div className="game">
//     <div className="game-board">
//     <Board xIsNext={xIsNext} squares={squares}
//     onPlay={handlePlay} />
//     <button onClick={handleRestart}>Restart</button>
//     </div>
//     <div className="game-info">
//     <div>{status}</div>
//     </div>
//     </div>
//      )
//     }