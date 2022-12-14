import "./profile.css";
import CheckIcon from "@mui/icons-material/Check";

export const Profile = () => {
  return (
    <div className="profile">
      <p className="profile-title">My profile</p>
      <div className="profile-info-card">
        <div className="profile-img"></div>
        <div className="profile-details">
          <p className="profile-name">Lars Christiansen</p>
          <p className="profile-skill">Skill level: Beginner</p>
          <div className="history">
            <div className="history-numbers">
              <p className="wins">17</p>
              <p className="loses">0</p>
              <p className="ties">0</p>
            </div>
            <div className="history-labels">
              <p>Wins</p>
              <p>Loses</p>
              <p>Ties</p>
            </div>
          </div>
        </div>
        <div className="edit-and-mail-btns">
          <p>Edit Profile</p>
          <p>larschristiansen@gmail.com</p>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-checkers">
          <div className="profile-buddy-checker">
            <div>
              <CheckIcon />
              <p>Buddy</p>
            </div>
            <p className="small-labels">Lars is open to become a buddy</p>
          </div>
          <div className="profile-random-checker">
            <div>
              <CheckIcon />
              <p>Random Match</p>
            </div>
            <p className="small-labels">You can be randomly matched</p>
          </div>
        </div>
        <div className="overall-win">
          <div className="overall-title">Overall win rate</div>
          <div className="pieContainer">
            <div className="pieBackground"></div>

            <div className="stat-circle-cover">
              <div className="stat-number">
                <p>100%</p>
                <p>Win</p>
                <p>Rate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="games-played">
          <div className="overall-title">Top games</div>
          <div className="pieContainer">
            <div className="pieBackground"></div>

            <div className="stat-circle-cover">
              <div className="stat-number">
                <p>100%</p>
                <p>Tekken 7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
