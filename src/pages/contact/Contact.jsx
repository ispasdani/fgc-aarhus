import "./contact.css";
import visitImg from "../../assets/contactImg.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="card-contact">
        <p>Contact</p>
        <p>
          Get in contact with one of our leaders either by phone, email or
          through our socials.
        </p>
        <div className="contact-details">
          <div>
            <LocalPhoneIcon sx={{ color: "#5ccdd6" }} />
            <p>+45 12 34 56 78</p>
          </div>
          <div>
            <EmailIcon sx={{ color: "#5ccdd6" }} />
            <p>fgcaarhus@gmail.com</p>
          </div>
          <div>
            <TwitterIcon sx={{ color: "#5ccdd6" }} />
            <FacebookIcon sx={{ color: "#5ccdd6" }} />
            <InstagramIcon sx={{ color: "#5ccdd6" }} />
          </div>
        </div>
      </div>
      <div className="visit-us-section">
        <div className="visit-left-side">
          <p className="visit-title">... or visit us</p>
          <p className="visit-desc">
            We meet at Dokk1 Aarhus, every Wednesday or anytime we have an event
            organized.
          </p>
          <div className="visit-location">
            <div>
              <LocationOnIcon sx={{ color: "#5ccdd6" }} />
              <p>Hack Kampmanns Plads 2, 8000 Aarhus C</p>
            </div>
            <div>
              <AccessTimeIcon sx={{ color: "#5ccdd6" }} />
              <div>
                <p>Mon-Fri: 8:00AM-10:00PM</p>
                <p>Sat-Sun: 10:00AM-4:00Pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="visit-right-side">
          <img src={visitImg} alt="visit-img" className="visit-img" />
        </div>
      </div>
    </div>
  );
};
