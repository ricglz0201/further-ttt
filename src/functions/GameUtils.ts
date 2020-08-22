import {
  Board,
  BoardRow,
  BoardLabel,
  BoardValue,
  Game,
  Player,
  Winner,
} from "types/Game";

export interface BoardClassNameProps {
  boardNumber: number,
  currentBoard: number,
}

export function boardClassName(props: BoardClassNameProps) {
  let className = 'w-third flex flex-wrap ba bw1';
  if (boardIsUmplayable(props)) {
    className = `${className} bg-gray`;
  }
  return className;
}

export function boardIsUmplayable({
  boardNumber,
  currentBoard
}: BoardClassNameProps) {
  return boardNumber !== currentBoard &&
    currentBoard !== -1;
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

export const changePlayer = (player: Player) => player === Player.X ? Player.O : Player.X

export function newBoard(): Board {
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

export function initialState(): Game {
  return {
    board: newBoard(),
    currentPlayer: Player.X,
    moveNumber: 0,
    currentBoard: -1,
  };
}

export function generateHasAWin(board: BoardRow) {
  return (
    first: number,
    second: number,
    third: number
  ): Winner | null => {
    const firstValue = board[first];
    if (firstValue === BoardValue.Empty) {
      return null;
    }
    const secondValue = board[second];
    const thirdValue = board[third];
    const hasAWin =
      firstValue === secondValue &&
      firstValue === thirdValue;
    return hasAWin ? firstValue : null;
  };
}

type HasAWinFn = ReturnType<typeof generateHasAWin>;

export const columnWin = (hasAWin: HasAWinFn) => (
  hasAWin(0, 3, 6) ??
  hasAWin(1, 4, 7) ??
  hasAWin(2, 5, 8)
);

export const rowWin = (hasAWin: HasAWinFn) => (
  hasAWin(0, 1, 2) ??
  hasAWin(3, 4, 5) ??
  hasAWin(6, 7, 8)
);

export const diagonalWin = (hasAWin: HasAWinFn) => (
  hasAWin(0, 4, 8) ??
  hasAWin(2, 4, 6)
);

export function lookForWinner(board: BoardRow): Winner | null {
  const hasAWin = generateHasAWin(board);
  return columnWin(hasAWin) ??
    rowWin(hasAWin) ??
    diagonalWin(hasAWin);
}
