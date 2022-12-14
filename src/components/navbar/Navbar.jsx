import "./navbar.css";
import navLogo from "../../assets/navLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, Router } from "react-router-dom";

export const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <div className="navbar">
      <div className="large-nav">
        <div className="left-side">
          <img src={navLogo} alt="nav-logo" className="nav-logo" />
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
          <p className="nav-btn-action">Log In</p>
          <span className="nav-break">/</span>
          <p className="nav-btn-action">Sign up</p>
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
