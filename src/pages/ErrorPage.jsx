import errorImg from "../assets/error-404.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center text-center p-5 md:mt-40">
      <div>
        <img className="w-96 h-96 mx-auto object-cover" src={errorImg} alt="" />

        <h1 className="text-4xl font-bold mt-5">Oops, page not found!</h1>
        <p className="text-[#627382] mt-5">
          The page you are looking for is not available.
        </p>

        <Link to="/">
          <button className="btn px-7 py-5 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-5">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
