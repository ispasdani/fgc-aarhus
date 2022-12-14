import "./login.css";
import { UserAuth } from "../../contexts/AuthContext";
import { GoogleButton } from "react-google-button";

export const Login = ({ closePopupWhenSignIn }) => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      closePopupWhenSignIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};
