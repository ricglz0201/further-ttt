import React from 'react';
import {Board} from 'components/Game/GameBigBoard';
import GameCell from 'components/Game/GameCell';

interface Props {
  board: Board,
  boardNumber: number,
  currentBoard: number,
  handleClick: (boardNumber: number, cellNumber: number) => void,
  initialCellNumber: number,
}

const GameCellRow = ({initialCellNumber, ...rest}: Props) => {
  return (
    <>
      {[0, 1, 2].map((index) => (
        <GameCell
          cellNumber={initialCellNumber + index}
          {...rest}
        />
      ))}
    </>
  );
};

export default GameCellRow;
