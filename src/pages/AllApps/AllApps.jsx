import { useLoaderData } from "react-router";
import SingleApp from "../Home/SingleApp";
import { useState } from "react";

const AllApps = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const appData = useLoaderData();
  console.log(appData);

  const filteredData = appData.filter((searchApp) =>
    searchApp.title.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(filteredData);

  return (
    <div>
      <h1 className="text-center text-4xl mt-14 font-semibold p-2">
        Our All Applications
      </h1>
      <p className="text-center text-[#627382] mt-2 text-lg font-medium p-2">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between mt-5 p-3">
        <h1 className="text-xl font-semibold">({appData.length}) Apps Found</h1>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      {filteredData.length === 0 ? (
        <h1>App Not Found</h1>
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 p-3">
          {filteredData.map((app) => (
            <SingleApp key={app.id} app={app}></SingleApp>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
