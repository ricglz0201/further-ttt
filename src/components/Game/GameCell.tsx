import React from 'react';
import {GetLabelProps, boardIsUmplayable, getLabel} from 'functions/GameUtils';

export interface Props extends GetLabelProps {
  currentBoard: number,
  handleClick: (boardNumber: number, cellNumber: number) => void,
}

const GameCell = ({
  board,
  boardNumber,
  cellNumber,
  currentBoard,
  handleClick
}: Props) => {
  const label = getLabel({board, boardNumber, cellNumber});
  const onClick = React.useCallback(() => {
    handleClick(boardNumber, cellNumber)
  }, [boardNumber, cellNumber, handleClick]);
  return (
    <button
      aria-label={`Board: ${boardNumber} - Cell: ${cellNumber}`}
      className={`w-third b--black ba h2 tc ${label}`}
      disabled={boardIsUmplayable({boardNumber, currentBoard})}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default GameCell;
