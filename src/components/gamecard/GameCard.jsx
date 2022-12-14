import { useState } from "react";
import "./gameCard.css";
import { useNavigate } from "react-router-dom";

export const GameCard = ({ name }) => {
  const [gameGroups, setGameGroups] = useState(0);

  const navigate = useNavigate();

  const navigateToCardContent = () => {
    navigate(`/fgc-aarhus/selected-match?name=${name}`);
  };

  return (
    <div className="game-card">
      <div className="game-card-left-side">
        <p>{name}</p>
        <p>Groups: {0}</p>
      </div>
      <div className="game-card-right-side">
        <p onClick={navigateToCardContent}>Choose</p>
      </div>
    </div>
  );
};
