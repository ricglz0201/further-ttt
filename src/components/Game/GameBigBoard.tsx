import React from 'react';
import GameBoardRow from 'components/Game/GameBoardRow';
import { Board } from 'types/Game';
import 'css/Game.css'

interface Props {
  board: Board,
  currentBoard: number,
  handleClick: (boardNumber: number, cellNumber: number) => void,
}

const GameBigBoard = (props: Props) => {
  return (
    <div className="flex flex-row justify-center ma3">
      <div className="w-80 w-66-ns w-60-m w-50-l flex flex-wrap">
        {[0, 3, 6].map(initialBoardNumber => (
          <GameBoardRow
            key={initialBoardNumber}
            initialBoardNumber={initialBoardNumber}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBigBoard;
