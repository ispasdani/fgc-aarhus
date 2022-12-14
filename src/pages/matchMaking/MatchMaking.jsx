import "./matchMaking.css";
import SearchIcon from "@mui/icons-material/Search";
import { GameCard } from "../../components/gamecard/GameCard";

export const MatchMaking = () => {
  var curr = new Date();
  curr.setDate(curr.getDate() + 0);
  var date = curr.toISOString().substring(0, 10);

  const gamesArr = [
    "Tekken 7",
    "Street Fighter 4",
    "Super Smash Bros.",
    "Mortal Kombat XL",
    "Injustice 2",
    "Dragon Ball FighterZ",
  ];

  return (
    <div className="match-making-page">
      <p className="match-making-title">Match-making</p>
      <p className="match-making-desc">
        Choose a game you would like to play and see if there are some already
        existing groups that you could join or get a random match!
      </p>
      <div className="match-making-date">
        <label htmlFor="match-date">Play date:</label>
        <input type="date" defaultValue={date} name="match-date" />
      </div>
      <form className="match-form">
        <input type="text" placeholder="Search for a game..." />
        <SearchIcon sx={{ color: "#5ccdd6" }} />
      </form>
      <div className="games-choices">
        {gamesArr.map((game, index) => {
          return <GameCard name={game} key={index} />;
        })}
      </div>
    </div>
  );
};
