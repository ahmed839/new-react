import RestroCard from "./RestroCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
 const [ListOfRestuarent, setListOfRestuarent]= useState(resObj);
    return (
        // local state Variable - super powerful variable
       
        <div className="container">
        <div className="body">
        <div className="filter">
        <button className="top-rated-button" onClick={()=>{
        const filteredList = ListOfRestuarent.filter(
        (res)=>res.info.avgRating > 4
        );
       setListOfRestuarent(filteredList);
        }}>
            Top Rated Restaurants
        </button>
        </div>
        <div className="rest-conatiner">
        {ListOfRestuarent.map((restuarents)=>(
          <RestroCard key={restuarents.info.id} resData= {restuarents}/>
        ))}
        
        </div>
        </div>
        </div>
        );
}
    export default Body;