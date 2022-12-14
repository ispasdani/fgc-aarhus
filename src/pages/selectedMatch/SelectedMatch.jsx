import "./selectedMatch.css";
import useQuery from "../../hooks/getQueryHook";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { GroupCard } from "../../components/groupcard/GroupCard";
import { useNavigate } from "react-router-dom";

export const SelectedMatch = () => {
  var curr = new Date();
  curr.setDate(curr.getDate() + 0);
  var date = curr.toISOString().substring(0, 10);

  let query = useQuery();

  const navigate = useNavigate();

  const navigateToRandomMatch = () => {
    navigate(`/fgc-aarhus/random-match`);
  };

  const [groupsArr, setGroupsArr] = useState([]);

  return (
    <div className="selected-match">
      <p className="selected-title">{query.get("name")}</p>
      <p className="selected-desc">
        Join an already existing group or let us decide your opponent by
        clicking on the “Get a random match” button!
      </p>
      <div className="selected-date">
        <label htmlFor="selected-date">Play date:</label>
        <input type="date" defaultValue={date} name="match-date" />
        <div className="random-match-btn" onClick={navigateToRandomMatch}>
          Get a random match
        </div>
      </div>
      <div className="groups-choices">
        <div
          className="add-group-select"
          onClick={() => setGroupsArr((oldArray) => [...oldArray, "Potato"])}
        >
          <AddIcon sx={{ color: "#5ccdd6" }} />
          <p>Add group</p>
        </div>
        {groupsArr.length > 0 &&
          groupsArr.map((x, index) => <GroupCard name={x} key={index + 5} />)}
      </div>
    </div>
  );
};
