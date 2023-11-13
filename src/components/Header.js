import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../assets/logo 2.png";

function Header() {
  return (
    <section className="header">
      <div className="header-logo">
        <img src={Logo} alt="woof and dine logo" />
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
