import "./SingleRestaurant.scss";

const SingleRestaurant = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <hr />
      <img src={restaurant.image_url} className="restaurant-pic" />
      <p className="restaurant-name">{restaurant.name}</p>
      <p className="restaurant-review">Rating: {restaurant.rating}</p>
      <p className="restaurant-price">Price Range: {restaurant.price}</p>
      <p className="restaurant-location">
        Address: {restaurant.location.address1} {restaurant.location.address2}
        {restaurant.location.address3} - {restaurant.location.city}
      </p>
      <p className="restaurant-phone">Phone: {restaurant.display_phone}</p>
    </div>
  );
};
export default SingleRestaurant;
