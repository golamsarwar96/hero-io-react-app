import React from "react";
import AppNotFound from "../assets/App-Error.png";
import { Link } from "react-router";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center text-center p-5">
      <div>
        <img
          className="w-96 h-96 mx-auto object-cover"
          src={AppNotFound}
          alt=""
        />

        <h1 className="text-4xl font-bold mt-5">OPPS, APP NOT FOUND</h1>
        <p className="text-[#627382] mt-5">
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        <Link to="/apps">
          <button className="btn px-7 py-5 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-5">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
