import "./suggestedMatch.css";
import jsonData from "../../data/players.json";
import useQuery from "../../hooks/getQueryHook";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SuggestedMatch = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  const navigate = useNavigate();

  const navigateToInviteConfirmation = () => {
    navigate(`/fgc-aarhus/invitation-send`);
  };

  //   destructuring
  const { beginner, intermediate, semipro, pro } = jsonData;

  const [querySkill, setQuerySkill] = useState([]);
  const [randomPerson, setRandomPerson] = useState(0);
  const [dataFatched, setDataFatched] = useState();

  let query = useQuery();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (query.get("skill") === "beginner") {
      setQuerySkill(beginner);
    }
    if (query.get("skill") === "intermediate") {
      setQuerySkill(intermediate);
    }
    if (query.get("skill") === "semipro") {
      setQuerySkill(semipro);
    }
    if (query.get("skill") === "pro") {
      setQuerySkill(pro);
    }

    setRandomPerson(getRandomInt(0, 6));

    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataFatched(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="suggested-match">
      <p className="suggested-match-title">Suggested match...</p>
      {randomPerson > -1 ? (
        <div className="suggested-wrapper">
          <div
            className="suggested-person-img"
            style={{
              backgroundImage: `url(${
                dataFatched &&
                dataFatched.results.map((x) => {
                  return x.picture.large;
                })
              })`,
            }}
          ></div>
          <div className="suggested-info">
            <div className="suggested-info-top">
              <p>{querySkill[randomPerson] && querySkill[randomPerson].name}</p>
              <p>Skill level: {query.get("skill")}</p>
            </div>
            <div className="suggested-info-bottom">
              <p onClick={refreshPage}>Try again</p>
              <div
                className="suggested-btn"
                onClick={navigateToInviteConfirmation}
              >
                Send an invitation
              </div>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};
