import React from 'react';

interface Props {
  oWins: number,
  xWins: number,
}

const ScoreHeader = ({oWins, xWins}: Props) => {
  return (
    <div className="flex justify-between">
      <div>O Wins: {oWins}</div>
      <div>X Wins: {xWins}</div>
    </div>
  );
};

export default ScoreHeader;
