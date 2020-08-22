import {
  BoardClassNameProps,
  GetLabelProps,
  boardClassName,
  changePlayer,
  columnWin,
  getLabel,
  initialState,
  isOccupied,
  lookForWinner,
  newBoard,
} from 'functions/GameUtils';
import {
  Board,
  BoardValue,
  BoardLabel,
  BoardRow,
  Player,
} from 'types/Game';

describe('GameUtils', () => {
  describe('boardClassName', () => {
    const argument: BoardClassNameProps = {
      boardNumber: 2,
      currentBoard: -1,
    };
    const backgroundClass = 'bg-gray'
    let result: string;

    afterEach(() => {
      const constantClass = 'w-third flex flex-wrap ba bw1'
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
    const rowOfzeros: BoardRow = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
        const argument: GetLabelProps = { board, boardNumber, cellNumber };
        expect(getLabel(argument)).toBe(expectedResult);
      }
    );
  })

  describe('isOccupied', () => {
    test.each([BoardValue.X, BoardValue.O])('%s', (value: BoardValue) => {
      expect(isOccupied(value)).toBe(true);
    })

    test('Empty', () => {
      expect(isOccupied(BoardValue.Empty)).toBe(false);
    })
  })

  describe('changePlayer', () => {
    it('changes Player X to O', () => {
      expect(changePlayer(Player.X)).toBe(Player.O);
    });

    it('changes Player O to X', () => {
      expect(changePlayer(Player.O)).toBe(Player.X);
    });
  });

  test('newBoard', () => {
    expect(newBoard()).toMatchSnapshot();
  });

  test('initialState', () => {
    expect(initialState()).toMatchSnapshot();
  });

  describe('lookForWinner', () => {
    type WinCases = Array<[number, number, number]>;
    const columnWinCases: WinCases = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    const rowWinCases: WinCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    const diagonalWinCases: WinCases = [
      [0, 4, 8],
      [2, 4, 6],
    ];
    const generalBoard: BoardRow = [
      BoardValue.Empty,
      BoardValue.Empty,
      BoardValue.Empty,
      BoardValue.Empty,
      BoardValue.Empty,
      BoardValue.Empty,
      BoardValue.Empty,
      BoardValue.Empty,
      BoardValue.Empty,
    ];

    const testCases: Array<[string, WinCases]> = [
      ['column win', columnWinCases],
      ['row win', rowWinCases],
      ['diagonalWin win', diagonalWinCases],
    ]

    describe.each(testCases)('%s', (_case, winCases) => {
      test.each(winCases)(
        '[%i, %i, %i] leads to a winner',
        (first, second, third) => {
          const innerBoard = [...generalBoard] as BoardRow;
          const expectedWinner = BoardValue.X;
          innerBoard[first] = expectedWinner;
          innerBoard[second] = expectedWinner;
          innerBoard[third] = expectedWinner;
          const winner = lookForWinner(innerBoard);
          expect(winner).toBe(expectedWinner)
        });
    });
  });
});
