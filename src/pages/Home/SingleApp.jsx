import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

//     "image": "https://i.ibb.co.com/pBm1Dk2w/img1.png",
//     "title": "ZenFlow",
//     "companyName": "Mindful Tech Labs",
//     "id": 101,
//     "description": "A minimalist meditation and productivity timer designed to reduce burnout and increase focus.",
//     "size": 42,
//     "reviews": 12500,
//     "ratingAvg": 4.8,
//     "downloads": 500000,
//     "ratings": [
//       { "name": "1 star", "count": 200 },
//       { "name": "2 star", "count": 150 },
//       { "name": "3 star", "count": 450 },
//       { "name": "4 star", "count": 1200 },
//       { "name": "5 star", "count": 10500 }
//     ]

const SingleApp = ({ app }) => {
  return (
    <Link to={`appDetails/${app.id}`}>
      <div className="p-3 shadow-2xl">
        <div>
          <img
            className="w-[340px] h-[260px] object-cover"
            src={app.image}
            alt={app.id}
          />
        </div>
        <h1 className="mt-1 text-lg font-medium">{app.title}</h1>
        <div className="flex justify-between mt-2">
          <h1 className="text-lg text-[#00D390]">
            <FontAwesomeIcon className="text-[#00D390]" icon={faThumbsUp} />
            {app.downloads}
          </h1>
          <h1 className="text-[#FF8811]">
            <FontAwesomeIcon className="text-[#FF8811]" icon={faStar} />
            {app.ratingAvg}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
