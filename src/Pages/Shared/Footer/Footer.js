import React from "react";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div
      style={{ borderTopLeftRadius: "150px" }}
      className="bg-black mt-20 text-white px-16 py-24"
    >
      <div className="grid grid-cols-4">
        <img className="h-10 col-span-2" src={logo} alt="" />
        <div className="flex flex-col items-baseline">
          <button className="my-1">About Online Food</button>
          <button className="my-1">Read Our Blog</button>
          <button className="my-1">Signup to Deliver</button>
          <button className="my-1">Add your Restaurant</button>
        </div>
        <div className="flex flex-col items-baseline">
          <button className="my-1">Get help</button>
          <button className="my-1">Read FAQs</button>
          <button className="my-1">View all cities</button>
          <button className="my-1">Restauant near me</button>
        </div>
      </div>
      <div className="flex mt-16">
        <p>
          <small>Copyright &copy; 2022 Online Food</small>
        </p>
        <div className="ml-auto">
          <button>Privacy Policy</button>
          <button className="mx-6">Terms Of Use</button>
          <button>Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
