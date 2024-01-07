import { LOGO_URL } from "../utils/constants";
const Header=()=>(
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
     </ul>
     </div>
   </div>
    </div>
);

export default Header;