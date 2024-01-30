import RestroCard, { withRestroCard } from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARD_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestuarent, SetListOfRestuarent] = useState([]);
  const [SearcList, SetSearchList] = useState("");
  const [FilterdList, SetFilterdList] = useState([]);
  const RestroCardVeg = withRestroCard(RestroCard);
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
  //optional chaining
  // Conditional Rendering
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Check Your Internate Connection</h1>;
  return ListOfRestuarent.length === 0 ? (
    <Shimmer />
  ) : (
    // local state Variable - super powerful variable
    <div className="container">
      <div className="body">
        <div className="flex flex-wrap">
          <div className="flex items-center">
            <div className="flex m-2 p-2">
              <input
                className="bg-gray-100 w-60 border border-slate-200 rounded-sm py-2 shadow-lg focus:outline-none sm:text-sm"
                type="text"
                value={SearcList}
                onChange={(e) => {
                  SetSearchList(e.target.value);
                }}
              />
              <button
                className="bg-cyan-600 px-2 shadow-lg text-white"
                onClick={() => {
                  const FilterData = ListOfRestuarent.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(SearcList.toLowerCase())
                  );
                  SetFilterdList(FilterData);
                }}
              >
                Search
              </button>
            </div>

            <button
              className="bg-cyan-600 m-2 p-2 shadow-lg text-white"
              onClick={() => {
                const FieldList = ListOfRestuarent.filter(
                  (rest) => rest.info.avgRating > 4.5
                );
                SetFilterdList(FieldList);
              }}
            >
              Raitings 4.5+
            </button>
          </div>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FilterdList.map((restaurent) => (
            <div>
              {/* if veg value is true pribt the veg as lable  */}
              <Link to={"/restaurants/" + restaurent.info.id}>
                {restaurent.info.veg ? (
                  <RestroCardVeg resData={restaurent} />
                ) : (
                  <RestroCard resData={restaurent} />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
