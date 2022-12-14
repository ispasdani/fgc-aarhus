import gamepadLoader from "../../assets/gamepadLoader.png";
import "./resultLoader.css";

export const ResultLoader = () => {
  return (
    <div className="result-loader">
      <p className="result-loader-title">
        Looking for a perfect match for you...
      </p>
      <img src={gamepadLoader} alt="gamepad-loader" />
    </div>
  );
};
