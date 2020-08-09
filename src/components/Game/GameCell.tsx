import React from 'react';
import {Board, BoardValue} from 'components/Game/GameBigBoard';

interface GetLabelProps {
  board: Board,
  boardNumber: number,
  cellNumber: number,
}

interface Props extends GetLabelProps {
  handleClick: (boardNumber: number, cellNumber: number) => void,
}

type Label = 'X' | 'O' | '';

const getLabel = ({board, boardNumber, cellNumber}: GetLabelProps): Label => {
  const value = board[boardNumber][cellNumber];
  switch(value) {
    case BoardValue.X:
      return 'X';
    case BoardValue.O:
      return 'O';
    case BoardValue.Empty:
      return '';
  }
}

const GameCell = ({
  board,
  boardNumber,
  cellNumber,
  handleClick
}: Props) => {
  const label = getLabel({board, boardNumber, cellNumber});
  const onClick = React.useCallback(() => {
    handleClick(boardNumber, cellNumber)
  }, [boardNumber, cellNumber, handleClick]);
  const onKeyDown = React.useCallback(({keyCode}) => {
    if(keyCode === 32) {
      onClick();
    }
  }, [onClick])
  return (
    <div
      className={`w-33 ${label}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={-1}
    >
      {label}
    </div>
  );
};

export default GameCell;
