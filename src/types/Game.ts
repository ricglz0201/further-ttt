/**
 * General types for the game folder
 */

// Enums

export enum BoardValue {
  X = 1,
  O = -1,
  Empty = 0,
};

export enum Player {
  X,
  O,
};

// Types

export type BoardRow = [
  BoardValue,
  BoardValue,
  BoardValue,
  BoardValue,
  BoardValue,
  BoardValue,
  BoardValue,
  BoardValue,
  BoardValue,
];

export type Board = [
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
  BoardRow,
];

export type BoardLabel = 'X' | 'O' | '';

// Interfaces

export interface Game {
  board: Board,
  currentBoard: number,
  currentPlayer: Player,
  moveNumber: number,
};
