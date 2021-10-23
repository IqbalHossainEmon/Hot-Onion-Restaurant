import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="flex my-7">
      <Link to="/home">
        <img className=" w-36 ml-10" src={headerLogo} alt="" />
      </Link>
      <div className="ml-auto">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <Link className="mx-6 font-semibold" to="/login">
          Login
        </Link>
        <Link
          className="bg-red-500 hover:bg-red-600 transition mr-8 text-sm text-white px-4 py-2 rounded-full"
          to="/registration"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
