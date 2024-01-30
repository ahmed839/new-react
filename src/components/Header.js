import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  let [BtnNameReact, SetBtnNameReact] = useState("Login");
  console.log("Render");
  useEffect(() => {
    console.log("UseEffect Render");
  }, [BtnNameReact]);
  return (
    <div className="bg-cyan-600 flex justify-between shadow-lg p-2">
      <div className="logo-container">
        <Link to="/">
          <img className="w-28" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex px-2 mx-2 items-center">
          <li className="px-4 text-white">
            {onlineStatus === true ? "online" : "offline"}
          </li>
          <li className="px-4 text-white">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4 text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-white">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-white">
            {" "}
            <Link to="/instamart">Insta Mart</Link>
          </li>
          <li className="px-4 text-white">Cart</li>
          <button
            className="px-4 text-white"
            onClick={() => {
              BtnNameReact === "Login"
                ? SetBtnNameReact("Logout")
                : SetBtnNameReact("Login");
            }}
          >
            {BtnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
