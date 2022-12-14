import "./navbar.css";
import navLogo from "../../assets/navLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../components/loginPopup/Login";
import { UserAuth } from "../../contexts/AuthContext";

export const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <div className="large-nav">
        <div className="left-side">
          <Link to="/fgc-aarhus/">
            <img src={navLogo} alt="nav-logo" className="nav-logo" />
          </Link>
          <div className="nav-btns">
            <Link to="/fgc-aarhus/events">
              <p className="nav-btn">Events</p>
            </Link>
            <Link to="/fgc-aarhus/ranking">
              <p className="nav-btn">Rankings</p>
            </Link>
            <Link to="/fgc-aarhus/match-making">
              <p className="nav-btn">Match-making</p>
            </Link>
            <Link to="/fgc-aarhus/about">
              <p className="nav-btn">About Us</p>
            </Link>
            <Link to="/fgc-aarhus/contact">
              <p className="nav-btn">Contact</p>
            </Link>
          </div>
        </div>
        <div className="right-side">
          {user?.displayName ? (
            <div className="logged-in-info">
              <Link to="/fgc-aarhus/profile">Profile</Link>
              <p onClick={handleSignOut}>Log out</p>
            </div>
          ) : (
            <p
              className="nav-btn-action"
              onClick={() => setOpenLoginPopup(!openLoginPopup)}
            >
              Log In
            </p>
          )}

          {openLoginPopup && <Login closePopupWhenSignIn={setOpenLoginPopup} />}
        </div>
      </div>
      <div className="hamburger-nav">
        <MenuIcon onClick={() => setOpenMobileNav(!openMobileNav)} />
      </div>
      {openMobileNav && (
        <div className="mobile-nav">
          <div className="mobile-nav-btn">
            <Link to="/fgc-aarhus/events">Events</Link>
          </div>
          <div className="mobile-nav-btn">
            <Link to="/fgc-aarhus/ranking">Rankings</Link>
          </div>
          <div className="mobile-nav-btn">
            <Link to="/fgc-aarhus/match-making">Match-making</Link>
          </div>
          <div className="mobile-nav-btn">
            <Link to="/fgc-aarhus/about">About us</Link>
          </div>
          <div className="mobile-nav-btn">
            <Link to="/fgc-aarhus/contact">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};
