import { useEffect, useState } from "react";
import { CARD_API } from "../utils/constants";
const useRestroCard = () => {
  const [ListOfRestuarent, SetListOfRestuarent] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(ListOfRestuarent);
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_API);
    const json = await data.json();
    SetListOfRestuarent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    SetFilterdList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return ListOfRestuarent;
};
export default useRestroCard;
