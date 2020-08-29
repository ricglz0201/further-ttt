import React from 'react';
import { BoardLabel } from 'types/Game';
import 'css/ScoreHeader.css';

interface PlayerScoreProps {
  player: Exclude<BoardLabel, ''>,
  wins: number,
}

const PlayerScore = ({ player, wins }: PlayerScoreProps) => {
  return (
    <div className={player}>
      {player}'s score: {wins}
    </div>
  )
}

interface Props {
  title: string,
  oWins: number,
  xWins: number,
}

const ScoreHeader = ({ title, oWins, xWins }: Props) => {
  return (
    <div className="ma4 ph5 pb2 bb">
      <h1 className="tc">{title}</h1>
      <h2 className="tc">Score</h2>
      <div className="flex justify-between ph5">
        <PlayerScore player="X" wins={xWins} />
        <PlayerScore player="O" wins={oWins} />
      </div>
    </div>
  );
};

export default ScoreHeader;
