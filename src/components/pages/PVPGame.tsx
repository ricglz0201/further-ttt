import React from 'react';
import {usePVPGame} from 'hooks/Game'
import BigBoard from 'components/Game/GameBigBoard'

const PVPGame = () => {
  const {game, handleClick} = usePVPGame();
  const {board, currentBoard} = game;
  return (
    <BigBoard
      board={board}
      currentBoard={currentBoard}
      handleClick={handleClick}
    />
  );
};

export default PVPGame;
