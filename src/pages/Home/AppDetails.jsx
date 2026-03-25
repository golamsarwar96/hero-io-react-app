import { useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const appData = useLoaderData();

  const singleApp = appData.find((app) => app.id === appId);
  console.log(singleApp);

  console.log(id, appData);
  return (
    <div className="space-y-5 mt-10">
      <div className="flex items-center gap-9">
        <div>
          <img
            className="w-80 h-80 object-cover"
            src={singleApp.image}
            alt=""
          />
        </div>
        <div>
          <div className="mb-7">
            <h1 className="text-5xl font-bold mb-3">{singleApp.title}</h1>
            <p className="text-black/70 text-lg">
              Developed by {singleApp.companyName}
            </p>
          </div>
          <div className="flex gap-10">
            <div className="space-y-1">
              <img className="w-12 h-12" src={download} alt={singleApp.id} />
              <p className="text-black/60 font-semibold">Downloads</p>
              <p className="text-4xl font-bold">{singleApp.downloads}</p>
            </div>
            <div className="space-y-1">
              <img className="w-12 h-12" src={rating} alt={singleApp.id} />
              <p className="text-black/60 font-semibold">Rating</p>
              <p className="text-4xl font-bold">{singleApp.ratingAvg}</p>
            </div>
            <div className="space-y-1">
              <img className="w-12 h-12" src={review} alt={singleApp.id} />
              <p className="text-black/60 font-semibold">Reviews</p>
              <p className="text-4xl font-bold">{singleApp.reviews}</p>
            </div>
          </div>
          <button className="bg-[#00D390] text-white px-7 py-3 mt-3 font-bold">
            Install Now ({singleApp.size} MB)
          </button>
        </div>
      </div>
      <div>Figure</div>
      <div>
        <span className="text-black/70 font-bold text-xl">Description : </span>
        {singleApp.description}
      </div>
    </div>
  );
};

export default AppDetails;
