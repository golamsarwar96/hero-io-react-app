import React from "react";
import logoImg from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <footer className="footer flex justify-between text-neutral-content p-10">
        <div className="flex justify-center items-center gap-2">
          <img className="w-10 h-10" src={logoImg} alt="" />
          <h1 className="text-white font-primary font-bold text-xl ">
            Hero.IO
          </h1>
        </div>
        <div>
          <h1 className="text-white font-primary font-bold text-xl ">
            Social Links
          </h1>
          <div className="text-xl">
            <FontAwesomeIcon icon={faSquareXTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSquareFacebook} />
          </div>
        </div>
      </footer>
      <div className="text-center text-white/70">
        <hr className="text-white/80" />
        <p className="p-4">Copyright © 2025 - All right reserved by Hero.IO</p>
      </div>
    </div>
  );
};

export default Footer;
