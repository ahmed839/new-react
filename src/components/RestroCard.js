import { CDN_URL } from "../utils/constants";
const RestroCard=(props)=>{
 const {resData}=props
 const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info
    return(
        <div className="rest-card">
        <img src={
        CDN_URL+cloudinaryImageId
        }
        />

        <h3>{name}</h3>
        <p>{cuisines.join(",")}</p>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        </div>
    );
} 
export default RestroCard;