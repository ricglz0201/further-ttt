import React from 'react';
import { changePlayer, initialState, isOccupied } from 'functions/GameUtils'
import { Game } from 'types/Game';

export function useCanClick({ board, currentBoard }: Game) {
  return React.useCallback((boardID, id) => {
    const currentValue = board[boardID][id];
    if (isOccupied(currentValue)) return false;
    return boardID === currentBoard || currentBoard === -1;
  }, [board, currentBoard]);
}

interface UsePVPGameProps {
  game: Game,
  setGame: (game: Game) => void,
}

export function usePVPMove({ game, setGame }: UsePVPGameProps) {
  const { currentPlayer } = game;
  return React.useCallback((newProps: Game) => {
    setGame({
      ...newProps,
      currentPlayer: changePlayer(currentPlayer),
    });
  }, [currentPlayer, setGame]);
}

export function useNewGame({ game, setGame }: UsePVPGameProps) {
  return React.useCallback(() => {
    setGame({ ...game, ...initialState() });
  }, [setGame, game]);
}
