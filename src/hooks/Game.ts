import React from 'react';
import {Board} from 'components/Game/GameBigBoard';
import {changePlayer, initialState, isOccupied} from 'functions/GameUtils'

export enum Player {
  X,
  O,
}

interface UseCanClickProps {
  board: Board,
  currentBoard: number,
}

export function useCanClick({board,currentBoard}: UseCanClickProps) {
  return React.useCallback((boardID, id) => {
    const currentValue = board[boardID][id];
    if (isOccupied(currentValue)) return false;
    return boardID === currentBoard || currentBoard === -1;
  }, [board, currentBoard]);
}

interface ChangeTurnProps extends UseCanClickProps {
  moveNumber: number,
}

interface Game extends ChangeTurnProps {
  currentPlayer: Player,
}

interface UsePVPGameProps {
  game: Game,
  setGame: (game: Game) => void,
}

export function usePVPMove({game, setGame}: UsePVPGameProps) {
  const {currentPlayer} = game;
  return React.useCallback((newProps: ChangeTurnProps) => {
    setGame({
      ...newProps,
      currentPlayer: changePlayer(currentPlayer),
    });
  }, [currentPlayer, setGame]);
}

export function useNewGame({game, setGame}: UsePVPGameProps) {
  return React.useCallback(() => {
    setGame({...game, ...initialState()});
  }, [setGame, game]);
}
