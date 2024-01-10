import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [ListOfRestuarent, SetListOfRestuarent]= useState([]);
    useEffect(()=>{
    fetchData();
    },[]);
    const fetchData =async()=>{
     const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0501242&lng=73.0781579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        //optional chaining
        SetListOfRestuarent(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
      // Conditional Rendering
    return ListOfRestuarent.length===0 ?<Shimmer/>:(  
        // local state Variable - super powerful variable
        <div className="container">
        <div className="body">
        <div className="filter">
       <button className="top-rated-button" onClick={()=>{
        const FieldList =ListOfRestuarent.filter((res)=>(
        res.info.avgRating > 4
        ));
        SetListOfRestuarent(FieldList);
       }}>
        Top Rated Restaurants
        </button>
        </div> 
        <div className="rest-conatiner">
        {ListOfRestuarent.map((restaurent)=>(
       <RestroCard key={restaurent.info.id} resData={restaurent}/>
        ))} 
        </div>
        </div>
        </div>
       
        );
    
}
    export default Body;