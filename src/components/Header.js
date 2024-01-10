import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


const Header=()=>{
  let [BtNNameReact,SetBtNNameReact] =useState("Login");

   return (
         <div className="header">
        <div className="container">
        <div className="logo-container">
             <img src={LOGO_URL}/>
          </div>
          <div className="nav-items">
          <ul>
             <li>Home</li>
             <li>About Us</li>
             <li>Contact Us</li>
             <li>Cart</li>
             <button className="login"onClick={()=>{
             BtNNameReact===
             "Login"? SetBtNNameReact("Logout"):SetBtNNameReact("Login");
            }}>{BtNNameReact}</button>
          </ul>
     
          </div>
        </div>
         </div>
     );
}

export default Header;