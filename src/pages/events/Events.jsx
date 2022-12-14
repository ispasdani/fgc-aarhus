import { EventCard } from "../../components/eventCard/EventCard";
import "./events.css";
import picOne from "../../assets/pic1.png";
import picTwo from "../../assets/pic2.png";
import picThree from "../../assets/pic3.png";

export const Events = () => {
  return (
    <div className="events">
      <div className="events-top">
        <p>Events</p>
        <p>
          Take a look at this month's upcoming events you don't want to miss!
        </p>
      </div>
      <div className="events-bottom">
        <div className="events-display-type-container">
          <label htmlFor="events-display">Display as:</label>
          <select name="events-display">
            <option value="list">List</option>
            <option value="calendar">Calendar</option>
          </select>
        </div>
        <div className="events-content-cards">
          <EventCard
            picture={picOne}
            title="FGC Aarhus Monthly"
            date="Dec 17th, 2022"
            players="30"
            games="Tekken 7, Guilty Gear Strive"
          />
          <EventCard
            picture={picTwo}
            title="Geeks Gone Wild"
            date="Jan 5th-7th, 2023"
            players="120"
            games="Street Fighter V, Dragon Ball FighterZ"
          />
          <EventCard
            picture={picThree}
            title="LT Tekken 7 Tournament"
            date="Feb 5th-7th, 2023"
            players="50"
            games="Tekken 7"
          />
        </div>
      </div>
    </div>
  );
};
