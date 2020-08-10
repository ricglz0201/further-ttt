import React from 'react';
import {Board} from 'components/Game/GameBigBoard';
import GameBoard from 'components/Game/GameBoard';

interface Props {
  board: Board,
  currentBoard: number,
  handleClick: (boardNumber: number, cellNumber: number) => void,
  initialBoardNumber: number,
}

const GameBoardRow = ({initialBoardNumber, ...rest}: Props) => {
  return (
    <>
      {[0, 1, 2].map((index) => (
        <GameBoard
          boardNumber={initialBoardNumber + index}
          {...rest}
        />
      ))}
    </>
  );
};

export default GameBoardRow;
