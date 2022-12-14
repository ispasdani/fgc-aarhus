import "./inviteConfirm.css";
import inviteImg from "../../assets/invitationImg.png";
import { useNavigate } from "react-router-dom";

export const InviteConfirm = () => {
  const navigate = useNavigate();

  const navigateToHomeFromInvite = () => {
    navigate(`/`);
  };

  return (
    <div className="invitation-container">
      <div className="card-invitation">
        <div className="invitation-first-row">
          <p>Invitation sent!</p>
        </div>
        <div className="invitation-desc-row">
          You're invitation has been sent successfully. You'll get a
          notification when your potential either rejects or accepts it.
        </div>
        <div
          className="go-to-home-from-invite-btn"
          onClick={navigateToHomeFromInvite}
        >
          Go to homepage
        </div>
        <img
          src={inviteImg}
          alt="invitation-confirmed-img"
          className="invite-img"
        />
      </div>
    </div>
  );
};
