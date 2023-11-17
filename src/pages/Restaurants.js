import "../styles/Restaurants.scss";
import Doggo from "../assets/images/image2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantsList from "../components/RestaurantsList";

function Restaurants() {
  const [restaurants, setRestaurants] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8888/restaurants").then((response) => {
      console.log(response.data);
      setRestaurants(response.data);
    });
  }, []);

  return (
    <div className="restaurant-nav">
      <div className="restaurant-nav__pic">
        <img
          src={Doggo}
          alt="dog eating ramen"
          className="restaurant-nav__dog"
        />
      </div>
      <div className="restaurant-nav__search">
        <form className="restaurant-nav__form">
          <div className="restaurant-nav__container">
            <h3>Where would you like to woof and dine in Vancouver?</h3>
            <input
              type="text"
              name="Fetch!"
              placeholder="Destination"
              className="restaurant-nav__input"
            ></input>
          </div>
          <button className="restaurant-nav__button">
            <h2>Fetch!</h2>
          </button>
        </form>
      </div>

      <RestaurantsList restaurants={restaurants} />
    </div>
  );
}

export default Restaurants;
