import "./eventCard.css";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Person2Icon from "@mui/icons-material/Person2";

export const EventCard = ({ picture, title, date, players, games }) => {
  return (
    <div className="event-card">
      <div className="event-first-slide">
        <img src={picture} alt="event-img" />
      </div>
      <div className="event-second-slide">
        <p className="event-title">{title}</p>
        <div className="event-wraps">
          <CalendarMonthIcon />
          <p>{date}</p>
        </div>
        <div className="event-wraps">
          <Person2Icon />
          <p>{players}</p>
        </div>
        <div className="event-wraps">
          <SportsEsportsIcon />
          <p>{games}</p>
        </div>
      </div>
      <div className="event-third-slide">
        <div>More details</div>
        <div>Join event</div>
      </div>
    </div>
  );
};
