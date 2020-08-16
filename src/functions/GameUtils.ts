import { Board, BoardLabel, BoardValue, Player } from "types/Game";

export interface BoardClassNameProps {
  boardNumber: number,
  currentBoard: number,
}

export function boardClassName({
  boardNumber,
  currentBoard,
}: BoardClassNameProps) {
  let className = 'w-25';
  const boardIsPlayable =
    boardNumber === currentBoard ||
    currentBoard === -1;
  if (!boardIsPlayable) {
    className += 'bg-grey';
  }
  return className;
}

export interface GetLabelProps {
  board: Board,
  boardNumber: number,
  cellNumber: number,
}

export function getLabel({
  board,
  boardNumber,
  cellNumber
}: GetLabelProps): BoardLabel {
  const value = board[boardNumber][cellNumber];
  switch (value) {
    case BoardValue.X:
      return 'X';
    case BoardValue.O:
      return 'O';
    case BoardValue.Empty:
      return '';
  }
}

export const isOccupied = (value: BoardValue) => value !== BoardValue.Empty;

export const changePlayer = (player: Player) => Player.X ? Player.O : Player.X

export function newBoard() {
  return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

export function initialState() {
  return {
    boardGame: newBoard(),
    currentPlayer: Player.X,
    moveNumber: 0,
    currentBoard: -1,
  };
}
