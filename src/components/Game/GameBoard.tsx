import React from 'react';
import {Board} from 'components/Game/GameBigBoard';
import GameCellRow from 'components/Game/GameCellRow';

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
  boardNumber,
  currentBoard,
  ...rest
}: Props) => {
  const className = boardClassName({boardNumber, currentBoard});
  return (
    <div className={className}>
        {[0, 3, 6].map(initialCellNumber => (
          <GameCellRow
            boardNumber={boardNumber}
            currentBoard={currentBoard}
            initialCellNumber={initialCellNumber}
            {...rest}
          />
        ))}
    </div>
  );
};

export default GameBoard;
