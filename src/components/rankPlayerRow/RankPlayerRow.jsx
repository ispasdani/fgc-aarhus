import "./rankPlayerRow.css";

export const RankPlayerRow = ({ place, player, score }) => {
  return (
    <div className="ranking-player-row">
      <div>
        <p>{place}.</p>
        <p>{player}</p>
      </div>
      <p className="score-row-value">{score}</p>
    </div>
  );
};
