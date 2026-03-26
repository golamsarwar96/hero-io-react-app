import { useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import AppsChart from "./AppsChart";
import { useState } from "react";
import { toast } from "react-toastify";

const AppDetails = () => {
  const [installed, setInstalled] = useState(false);
  console.log(installed);
  const { id } = useParams();
  const appId = parseInt(id);
  const appData = useLoaderData();

  const singleApp = appData.find((app) => app.id === appId);
  console.log(singleApp);

  console.log(id, appData);

  const handleInstall = () => {
    setInstalled(!installed);
    toast.success("App Installed");
  };
  return (
    <div className="space-y-5 mt-10">
      <div className="flex items-center flex-col md:flex-row gap-9">
        <div>
          <img
            className="w-80 h-80 object-cover shadow-lg"
            src={singleApp.image}
            alt=""
          />
        </div>
        <div>
          <div className="mb-7">
            <h1 className="text-5xl font-bold mb-2 text-center md:text-left">
              {singleApp.title}
            </h1>
            <p className="text-black/70 text-lg text-center md:text-left">
              Developed by {singleApp.companyName}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="space-y-1">
              <img
                className="w-12 h-12 md:mx-0 mx-auto"
                src={download}
                alt={singleApp.id}
              />
              <p className="text-black/60 font-semibold text-center md:text-left">
                Downloads
              </p>
              <p className="text-4xl font-bold">{singleApp.downloads}</p>
            </div>
            <div className="space-y-1">
              <img
                className="w-12 h-12 mx-auto"
                src={rating}
                alt={singleApp.id}
              />
              <p className="text-black/60 font-semibold text-center md:text-left">
                Rating
              </p>
              <p className="text-4xl font-bold">{singleApp.ratingAvg}</p>
            </div>
            <div className="space-y-1">
              <img
                className="w-12 h-12 mx-auto"
                src={review}
                alt={singleApp.id}
              />
              <p className="text-black/60 font-semibold text-center md:text-left">
                Reviews
              </p>
              <p className="text-4xl font-bold">{singleApp.reviews}</p>
            </div>
          </div>
          <div className="flex md:justify-start justify-center items-center">
            <button
              onClick={() => handleInstall()}
              disabled={installed}
              className="bg-[#00D390] text-white px-7 py-3 mt-3 font-bold cursor-pointer"
            >
              {installed ? `Installed` : "Install Now (${singleApp.size} MB)"}
            </button>
          </div>
        </div>
      </div>
      <hr className="text-black/60" />
      <AppsChart singleApp={singleApp}></AppsChart>
      <hr className="text-black/60" />
      <div className="p-2 mb-5">
        <span className="text-black/70 font-bold text-xl">Description : </span>
        {singleApp.description}
      </div>
    </div>
  );
};

export default AppDetails;
