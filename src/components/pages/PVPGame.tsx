import BigBoard from 'components/Game/GameBigBoard';
import React from 'react';
import ScoreHeader from 'components/utils/ScoreHeader';
import { usePVPGame } from 'hooks/Game';

const PVPGame = () => {
  const { game, handleClick, oWins, xWins } = usePVPGame();
  const { board, currentBoard } = game;
  return (
    <>
      <ScoreHeader
        title="Multi-Player"
        oWins={oWins}
        xWins={xWins}
      />
      <BigBoard
        board={board}
        currentBoard={currentBoard}
        handleClick={handleClick}
      />
    </>
  );
};

export default PVPGame;
