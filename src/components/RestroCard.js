import { CDN_URL } from "../utils/constants";
const RestroCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="max-w-xs bg-white rounded overflow-hidden shadow-md">
      <img
        className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold">{name}</h3>
      <p className="truncate">{cuisines.join(",")}</p>
      <h4 className="font-semibold flex justify-between">
        <span>{avgRating}</span>
        <span>{costForTwo}</span>
      </h4>
    </div>
  );
};

export const withRestroCard = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <h1 className="absolute bg-black text-white px-5">Veg</h1>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
