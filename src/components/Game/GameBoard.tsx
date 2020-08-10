import React from 'react';
import {Board} from 'components/Game/GameBigBoard';

interface BoardClassNameProps {
  boardNumber: number,
  currentBoard: number,
}

interface Props extends BoardClassNameProps {
  board: Board,
  handleClick: (boardNumber: number, cellNumber: number) => void,
}

function boardClassName({
  boardNumber,
  currentBoard,
}: BoardClassNameProps) {
  let className = 'w-25';
  const boardIsPlayable =
    boardNumber === currentBoard ||
    currentBoard === -1;
  if(!boardIsPlayable) {
    className += 'bg-grey';
  }
  return className;
}

const GameBoard = ({
  board,
  boardNumber,
  currentBoard,
  handleClick,
}: Props) => {
  const className = boardClassName({boardNumber, currentBoard});
  return (
    <div className={className}>
      Rows
    </div>
  );
};

export default GameBoard;
