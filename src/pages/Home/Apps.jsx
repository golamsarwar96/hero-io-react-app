import React, { Suspense, useEffect, useState } from "react";
import SingleApp from "./SingleApp";
import { Link, useNavigate } from "react-router";

const Apps = ({ appsData }) => {
  const [allApps, setAllApps] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("apps.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllApps(data));
  // }, []);

  // const appPromise = fetch("./apps.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-center text-4xl mt-14 font-semibold">
        Trending Apps
      </h1>
      <p className="text-center text-[#627382] mt-2 text-lg font-medium">
        Explore All Trending Apps On The Market Developed By Us.
      </p>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3 mt-5 p-2">
        <Suspense fallback={<span>Loading</span>}>
          {appsData.slice(0, 8).map((app) => (
            <SingleApp key={app.id} app={app}></SingleApp>
          ))}
        </Suspense>
      </div>

      <div className="flex justify-center my-8">
        <button
          onClick={() => {
            navigate("/apps");
          }}
          className="btn px-7 py-5 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Apps;
