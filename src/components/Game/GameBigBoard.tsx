import React from 'react';
import GameBoardRow from 'components/Game/GameBoardRow';

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

  const GameBigBoard = (props: Props) => {
  return (
    <div className="flex flex-row jcc">
      <div className="w-75 w-sm-66 w-md-60 w-lg-50">
        {[0, 3, 6].map(initialBoardNumber => (
          <GameBoardRow
            initialBoardNumber={initialBoardNumber}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBigBoard;
