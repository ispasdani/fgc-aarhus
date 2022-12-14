import "./randomMatch.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RandomMatch = () => {
  var curr = new Date();
  curr.setDate(curr.getDate() + 0);
  var date = curr.toISOString().substring(0, 10);

  const [selectInput, setSelectInput] = useState("");
  const [selectDate, setSelectDate] = useState("");

  const navigate = useNavigate();

  const navigateToRandomMatchResult = () => {
    navigate(`/fgc-aarhus/random-match-result?skill=${selectInput}`);
  };

  const onOptionChangeHandler = (event) => {
    setSelectInput(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    setSelectDate(event.target.value);
  };

  return (
    <div className="random-match">
      <p className="random-title">Random match</p>
      <p className="random-desc">
        We'll choose a player for you based on your preferences.
      </p>
      <form>
        <div className="random-date-select">
          <label htmlFor="random-date">When would you like to play?</label>
          <input
            type="date"
            name="random-date"
            defaultValue={date}
            onChange={onDateChangeHandler}
          />
        </div>
        <div className="random-skill-select">
          <label htmlFor="random-skill">
            What skill level would you like your opponent to have?
          </label>
          <select name="random-skill" onChange={onOptionChangeHandler}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="semipro">Semi-Pro</option>
            <option value="pro">Pro</option>
          </select>
          <div className="random-btn" onClick={navigateToRandomMatchResult}>
            Generate a match
          </div>
        </div>
      </form>
    </div>
  );
};
