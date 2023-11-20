import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../assets/logo/logo 2.png";
import "../styles/partials/_typography.scss";

function Header() {
  return (
    <section className="header">
      <div className="header-logo">
        <Link to="/Restaurants">
          {" "}
          <img src={Logo} alt="woof and dine logo" />
        </Link>
      </div>
      <div className="header-nav">
        <Link to="/Restaurants" className="header-nav__link">
          FIND A RESTAURANT
        </Link>
        <Link to="/About" className="header-nav__link">
          ABOUT US
        </Link>
      </div>
    </section>
  );
}

export default Header;
