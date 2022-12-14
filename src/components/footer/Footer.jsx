import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left-side">
        <p>Fighting Game Community Aarhus:</p>
        <p>Dokk1, Hack Kampmanns Pl. 2, 8000 Aarhus</p>
        <p>8000, Aarhus C</p>
        <p>fgcaarhus@gmail.com</p>
        <br />
        <p>CVR: 40728538.</p>
      </div>
      <div className="footer-right-side">
        <p>Connect with us</p>
        <div className="footer-media-icons">
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
      </div>
    </div>
  );
};
