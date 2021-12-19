import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const styles = {
  fontSize: "1.5em",
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    // we create a copy of the squares table to be modified, rather than modifying the existing table
    const boardCopy = [...board];
    //if user click an occupied square or if game is won, return null
    if (winner || boardCopy[i]) return null;
    // put an x or an o in the cilcked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Tic Tac Toe !!! </h1>

      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
