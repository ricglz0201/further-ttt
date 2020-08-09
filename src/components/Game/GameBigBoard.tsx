import React from 'react';

export const enum BoardValue {
  X = 1,
  O = -1,
  Empty = 0,
}
export type Board = Array<Array<BoardValue>>;

interface Props {
  board: Board,
  currentBoard: number,
  handleClick: (boardNumber: number, cellNumber: number) => void,
}

  const GameBigBoard = (_props: Props) => {
  return (
    <div>Hola</div>
  );
};

export default GameBigBoard;
