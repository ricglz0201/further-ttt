import React from 'react';
import {Board} from 'components/Game/GameBigBoard';
import {isOccupied} from 'functions/GameUtils'

interface Game {
  board: Board,
  currentBoard: number,
}

export function useCanClick({
  board,
  currentBoard
}: Game) {
  const canClick = React.useCallback((boardID, id) => {
    const currentValue = board[boardID][id];
    if (isOccupied(currentValue)) return false;
    return boardID === currentBoard || currentBoard === -1;
  }, [board, currentBoard]);
  return canClick;
}
