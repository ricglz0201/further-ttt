import {
  BoardClassNameProps,
  BoardLabel,
  GetLabelProps,
  boardClassName,
  getLabel,
} from 'functions/GameUtils';
import {Board, BoardValue} from 'components/Game/GameBigBoard';

describe('GameUtils', () => {
  describe('boardClassName', () => {
    const argument: BoardClassNameProps = {
      boardNumber: 2,
      currentBoard: -1,
    };
    const backgroundClass = 'bg-grey'
    let result: string;

    afterEach(() => {
      const constantClass = 'w-25'
      expect(result).toEqual(expect.stringContaining(constantClass));
    });

    it('does not contain bg-grey when is the first round', () => {
      result = boardClassName(argument);
      expect(result).toEqual(expect.not.stringContaining(backgroundClass));
    });

    it('does not contain bg-grey when is the current board', () => {
      result = boardClassName({
        ...argument,
        currentBoard: argument.currentBoard,
      });
      expect(result).toEqual(expect.not.stringContaining(backgroundClass));
    });

    it('does contain bg-grey when is not the current board', () => {
      result = boardClassName({
        ...argument,
        currentBoard: 1,
      });
      expect(result).toEqual(expect.stringContaining(backgroundClass));
    });
  })

  describe('getLabel', () => {
    const rowOfzeros = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const board: Board = [
      [...rowOfzeros],
      [...rowOfzeros],
      [...rowOfzeros],
      [...rowOfzeros],
      [...rowOfzeros],
      [...rowOfzeros],
      [...rowOfzeros],
      [...rowOfzeros],
      [...rowOfzeros],
    ];
    const boardNumber = 1;
    const cellNumber = 2;
    const testCases: Array<[BoardValue, BoardLabel]> = [
      [BoardValue.X, 'X'],
      [BoardValue.O, 'O'],
      [BoardValue.Empty, ''],
    ]

    it.each(testCases)(
      'returns "X" when the boards value is "X"',
      (value: BoardValue, expectedResult: BoardLabel) => {
        board[boardNumber][cellNumber] = value;
        const argument: GetLabelProps = {board, boardNumber, cellNumber};
        expect(getLabel(argument)).toBe(expectedResult);
      }
    );
  })
});
