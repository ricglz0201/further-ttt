import React from 'react';
import {
  changePlayer,
  initialState,
  isOccupied,
  lookForWinner,
} from 'functions/GameUtils'
import {
  Board,
  Game,
  MakeMoveProps,
  Player,
  Winner
} from 'types/Game';

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
  return React.useCallback((props: MakeMoveProps) => {
    setGame({
      ...props,
      currentPlayer: changePlayer(currentPlayer),
    });
  }, [currentPlayer, setGame]);
}

export function usePVPNewGame({ game, setGame }: UsePVPGameProps) {
  return React.useCallback(() => {
    setGame({ ...game, ...initialState() });
  }, [setGame, game]);
}

interface AfterMoveProps {
  board: Board,
  boardNumber: number,
  cellNumber: number,
  moveNumber: number,
  winner: Winner | null,
}

interface UseAfterMoveProps {
  newGame: () => void,
  makeMove: (props: MakeMoveProps) => void,
}

export function useAfterMove({
  newGame,
  makeMove
}: UseAfterMoveProps) {
  return React.useCallback(({
    board,
    boardNumber,
    cellNumber,
    moveNumber,
    winner,
  }: AfterMoveProps) => {
    if (winner) {
      newGame();
    } else if (moveNumber === 81) {
      newGame();
    } else {
      makeMove({ board, currentBoard: cellNumber, moveNumber });
    }
  }, [newGame, makeMove]);
}

export function usePVPGame() {
  const [game, setGame] = React.useState(initialState());
  const { board, currentPlayer, moveNumber } = game;
  const canClick = useCanClick(game);
  const newGame = usePVPNewGame({ game, setGame });
  const makeMove = usePVPMove({ game, setGame });
  const afterMove = useAfterMove({ newGame, makeMove });
  const handleClick = React.useCallback(
    (boardNumber: number, cellNumber: number) => {
      if (canClick(boardNumber, cellNumber)) {
        const newMoveNumber = moveNumber + 1;
        board[boardNumber][cellNumber] = currentPlayer === Player.X ? 1 : -1;
        const winner = lookForWinner(board[boardNumber]);
        afterMove({
          board,
          boardNumber,
          cellNumber,
          moveNumber: newMoveNumber,
          winner,
        });
      }
    }, [afterMove, board, canClick, currentPlayer, moveNumber]);
  return { game, handleClick };
}
