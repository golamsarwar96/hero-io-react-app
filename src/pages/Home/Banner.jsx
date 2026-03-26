import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="text-center space-y-4 mt-12 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">
        We Build{" "}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-primary font-bold">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[17px] w-[75%] text-center">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="space-x-4 mt-5">
        <Link target="blank" to="https://play.google.com/store/apps">
          <button className="btn btn-outline">
            {" "}
            <FontAwesomeIcon className="text-xl" icon={faGooglePlay} />
            Google Play
          </button>
        </Link>
        <Link target="_blank" to="https://www.apple.com/app-store/">
          <button className="btn btn-outline">
            {" "}
            <FontAwesomeIcon className="text-2xl" icon={faAppStore} />
            App Store
          </button>
        </Link>
      </div>
      <div className="mt-7">
        <img className="w-[800px]" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
