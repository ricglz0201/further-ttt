import React from 'react';
import GameCell from 'components/Game/GameCell';
import { Board } from 'types/Game';

interface Props {
  board: Board,
  boardNumber: number,
  currentBoard: number,
  handleClick: (boardNumber: number, cellNumber: number) => void,
  initialCellNumber: number,
}

const GameCellRow = ({ initialCellNumber, ...rest }: Props) => {
  return (
    <>
      {[0, 1, 2].map((index) => {
        const cellNumber = initialCellNumber + index;
        return (
          <GameCell
            cellNumber={cellNumber}
            key={cellNumber}
            {...rest}
          />
        );
      })}
    </>
  );
};

export default GameCellRow;
