import { RankPlayerRow } from "../rankPlayerRow/RankPlayerRow";
import "./rankingCard.css";

export const RankingCard = ({ obj, name }) => {
  return (
    <div className="ranking-card">
      <p className="ranking-title">{name}</p>
      <div className="ranking-card-labels">
        <div>
          <p>Rank</p>
          <p>Player</p>
        </div>
        <p className="score-label">Score</p>
      </div>
      <div className="ranking-players-display">
        {obj.map((data, index) => {
          return (
            <RankPlayerRow
              key={index}
              place={data.place}
              player={data.name}
              score={data.score}
            />
          );
        })}
      </div>
    </div>
  );
};
