import "./ranking.css";
import tekken from "../../assets/tekken.png";
import gear from "../../assets/gear.png";
import dragon from "../../assets/dragon.png";
import bros from "../../assets/bros.png";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RankingCard } from "../../components/rankingCard/RankingCard";
import gamesRanking from "../../data/gamesRanking.json";

export const Ranking = () => {
  const [selectedGame, setSelectedGame] = useState("all");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ranking">
      <div className="ranking-top">
        <p>Rankings</p>
        <p>See this month's ranking for a specific game or for all games</p>
        <div className="ranking-carousel">
          <Slider {...settings}>
            <img
              src={tekken}
              alt="raking-img"
              name="tekken"
              className="ranking-img"
              onClick={(e) => {
                setSelectedGame(e.target.name);
              }}
            />

            <img
              src={gear}
              alt="raking-img"
              name="gear"
              className="ranking-img"
              onClick={(e) => {
                setSelectedGame(e.target.name);
              }}
            />
            <img
              src={dragon}
              alt="raking-img"
              name="dragon"
              className="ranking-img"
              onClick={(e) => {
                setSelectedGame(e.target.name);
              }}
            />
            <img
              src={bros}
              alt="raking-img"
              name="bros"
              className="ranking-img"
              onClick={(e) => {
                setSelectedGame(e.target.name);
              }}
            />
          </Slider>
        </div>
      </div>
      <p className="filter-all" onClick={() => setSelectedGame("all")}>
        Display all
      </p>
      <div className="ranking-bottom">
        {selectedGame === "all" && (
          <div className="all-rankings">
            {" "}
            <RankingCard obj={gamesRanking.bros} name="Super Smash Bros." />
            <RankingCard
              obj={gamesRanking.dragon}
              name="Dragon Ball FighterZ"
            />
            <RankingCard obj={gamesRanking.gear} name="Guilty Gear Strive" />
            <RankingCard obj={gamesRanking.tekken} name="Tekken 7" />
          </div>
        )}
        {selectedGame === "bros" && (
          <div>
            {" "}
            <RankingCard obj={gamesRanking.bros} name="Super Smash Bros." />
          </div>
        )}
        {selectedGame === "dragon" && (
          <div>
            {" "}
            <RankingCard obj={gamesRanking.dragon} name="Super Smash Bros." />
          </div>
        )}
        {selectedGame === "gear" && (
          <div>
            {" "}
            <RankingCard obj={gamesRanking.gear} name="Super Smash Bros." />
          </div>
        )}
        {selectedGame === "tekken" && (
          <div>
            {" "}
            <RankingCard obj={gamesRanking.tekken} name="Super Smash Bros." />
          </div>
        )}
      </div>
    </div>
  );
};
