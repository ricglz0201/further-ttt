import React from 'react';
import GameCellRow from 'components/Game/GameCellRow';
import { BoardClassNameProps, boardClassName } from 'functions/GameUtils';
import { Board } from 'types/Game';

interface Props extends BoardClassNameProps {
  board: Board,
  handleClick: (boardNumber: number, cellNumber: number) => void,
}

const GameBoard = ({
  boardNumber,
  currentBoard,
  ...rest
}: Props) => {
  const className = boardClassName({ boardNumber, currentBoard });
  return (
    <div className={className}>
      {[0, 3, 6].map(initialCellNumber => (
        <GameCellRow
          boardNumber={boardNumber}
          currentBoard={currentBoard}
          key={initialCellNumber}
          initialCellNumber={initialCellNumber}
          {...rest}
        />
      ))}
    </div>
  );
};

export default GameBoard;
