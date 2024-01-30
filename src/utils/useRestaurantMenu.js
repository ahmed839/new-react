import { useEffect, useState } from "react";
import { FETCH_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantinfo, Setrestaurantinfo] = useState(null);
  useEffect(() => {
    fethchmenu();
    console.log(restaurantinfo);
  }, []);

  const fethchmenu = async () => {
    try {
      const data = await fetch(FETCH_API + resId);
      const json = await data.json();
      Setrestaurantinfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return restaurantinfo;
};

export default useRestaurantMenu;
