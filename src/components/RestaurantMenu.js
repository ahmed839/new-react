import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantinfo = useRestaurantMenu(resId);
  const { name, cuisines, locality, costForTwo } =
    restaurantinfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    restaurantinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  const categories =
    restaurantinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"]
    );

  return restaurantinfo === null ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="text-center">
        <h1 className="font-extrabold text-3xl text-gray-600">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(" | ")} ₹{costForTwo / 100 + " For Two"}
        </p>

        <ul>
          {itemCards
            ? itemCards.map((item) => (
                <li key={item.card.info.id}>
                  {item.card.info.name}₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </li>
              ))
            : console.error("The array is undefined.")}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
