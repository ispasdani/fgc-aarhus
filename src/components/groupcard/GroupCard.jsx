import "./groupCard.css";

export const GroupCard = ({ name }) => {
  return (
    <div className="group-card">
      <div className="group-card-left-side">
        <p className="testtt">Fighters</p>
        <div>
          <p>Players:</p>
          <p className="fighter-name">{name}</p>
        </div>
      </div>
      <div className="group-card-right-side">
        <p>Join</p>
      </div>
    </div>
  );
};
