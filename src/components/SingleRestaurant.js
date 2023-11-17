import "./SingleRestaurant.scss";

const SingleRestaurant = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <hr />
      <img src={restaurant.image_url} className="restaurant-pic" />
      <p className="restaurant-name">
        <b>{restaurant.name}</b>
      </p>
      {/* <p className="restaurant-rating">
        <b>Category:</b> {restaurant.categories.alias}
      </p> */}
      <p className="restaurant-rating">
        <b>Rating:</b> {restaurant.rating} out of 5
      </p>
      <p className="restaurant-price">
        <b>Price: </b>
        {restaurant.price} out of $$$
      </p>
      <p className="restaurant-location">
        <b>Address: </b>
        {restaurant.location.address1} {restaurant.location.address2}
        {restaurant.location.address3} - {restaurant.location.city}
      </p>
      <p className="restaurant-phone">
        <b>Phone: </b>
        {restaurant.display_phone}
      </p>
    </div>
  );
};
export default SingleRestaurant;
