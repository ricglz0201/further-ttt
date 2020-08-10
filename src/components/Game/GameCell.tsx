import React from 'react';
import {GetLabelProps, getLabel} from 'functions/GameUtils';

interface Props extends GetLabelProps {
  handleClick: (boardNumber: number, cellNumber: number) => void,
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
