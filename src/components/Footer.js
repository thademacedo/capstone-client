import { Link } from "react-router-dom";
import "./Header.scss";
import "./Footer.scss";
import FB from "../assets/logo/facebook.png";
import IG from "../assets/logo/instagram.png";
import "../styles/partials/_typography.scss";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-copy">© Woof and Dine Copyright</div>
      <div className="footer-email">contact@woofanddine.ca</div>
      <div className="footer-facebook">
        <Link to="/Restaurants">
          <img src={FB} className="footer-logo" alt="facebook logo" />
        </Link>
      </div>
      <div className="footer-instagram">
        <Link to="/Restaurants">
          <img src={IG} className="footer-logo" alt="instagram logo" />
        </Link>
      </div>
    </section>
  );
}

export default Footer;
