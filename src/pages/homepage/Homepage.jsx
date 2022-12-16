import "./homepage.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GameBoy } from "../../components/gameboy/gameBoy";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="herobox">
        <div className="hero-left-side"></div>
        <div className="hero-right-side">
          <div className="right-text-row">
            <p className="herobox-title-text">Join the biggest</p>
            <p className="herobox-title-text">fighting game</p>
            <p className="herobox-title-text">comunity</p>
            <p className="herobox-title-text">in Aarhus</p>
          </div>
          <div className="become-a-member-btn">Become a member</div>
          <div className="actions-row">
            <div className="social-media-icons">
              <a className="action-media-btn" href="">
                <TwitterIcon sx={{ color: "#5ccdd6" }} />
              </a>
              <a className="action-media-btn" href="">
                <FacebookIcon sx={{ color: "#5ccdd6" }} />
              </a>
              <a className="action-media-btn" href="">
                <InstagramIcon sx={{ color: "#5ccdd6" }} />
              </a>
            </div>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="who-we-are-section">
        <div className="who-we-are-left">
          <div className="who-we-are-left-top">
            <p>We love playing</p>
            <p>together. A lot.</p>
          </div>
          <p className="hover-underline-animation">Who are we</p>
        </div>
        <div className="who-we-are-right">
          <GameBoy />
        </div>
      </div>
      <div className="events-section">
        
        <div className="events-title">
          <p>We always make</p>
          <p>boring Wednesdays fun</p>
        </div>
        <p className="events-description">
          We meet every Wednesday at Dokk1 to play games and have great fun
          together. Apart from weekly meetings, we also organise special events
          about which you can find out more on the “Events” page.
        </p>
        <div className="events-img"></div>
        <Link to="/fgc-aarhus/events" className="events-label hover-underline-animation">Events</Link>
      </div>
      <div className="buddy-section">
        <div className="buddy-left-side">
          <div className="buddy-title">
            <p>Get yourself</p>
            <p>a buddy!</p>
          </div>
          <p className="buddy-des">
            Being new somewhere is not the easiest. In our community every
            newcomer can get themselves a buddy, who will help them integrate
            smoothly.
          </p>
          <div className="get-a-buddy-btn">Get a buddy</div>
        </div>
        <div className="buddy-right-side"></div>
      </div>
      <div className="download-app-section">
        <p className="download-app-title">Are you already a member?</p>
        <p className="download-app-desc">
          Download our app on your phone so you can keep track of the rankings
          and many more!
        </p>
        <div className="download-app-btn">Download App</div>
      </div>
    </div>
  );
};
