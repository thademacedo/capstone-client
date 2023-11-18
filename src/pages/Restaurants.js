import "../styles/Restaurants.scss";
import Doggo from "../assets/images/image2.png";
import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantsList from "../components/RestaurantsList";

function Restaurants() {
  const [restaurants, setRestaurants] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8888/restaurants").then((response) => {
      // console.log(response.data);
      setRestaurants(response.data);
    });
  }, []);

  const getCity = (event) => {
    event.preventDefault();
    const cityValue = event.target.fetch.value;
    // console.log(cityValue);
    const result = restaurants.filter((restaurant) => {
      return restaurant.location.city === cityValue;
      // console.log(restaurant.location.city);
    });
    setRestaurants(result);
  };

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
        <form className="restaurant-nav__form" onSubmit={getCity}>
          <div className="restaurant-nav__container">
            <h3>Where would you like to woof and dine in Metro Vancouver?</h3>
            <input
              type="text"
              name="fetch"
              placeholder="ENTER A CITY NAME"
              className="restaurant-nav__input"
            ></input>
          </div>
          <button className="restaurant-nav__button" type="submit">
            <h2>FETCH</h2>
          </button>
        </form>
      </div>

      <RestaurantsList restaurants={restaurants} />
    </div>
  );
}

export default Restaurants;
