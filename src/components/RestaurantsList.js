import Restaurant from "../components/SingleRestaurant";

const RestaurantsList = ({ restaurants }) => {
  if (!Array.isArray(restaurants)) {
    console.error("restaurants is not an array:", restaurants);
    return null;
  }

  return (
    <section className="">
      {restaurants.map((restaurant) => {
        return <Restaurant restaurant={restaurant} />;
      })}
    </section>
  );
};
export default RestaurantsList;
