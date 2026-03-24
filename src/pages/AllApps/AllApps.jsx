import { useLoaderData } from "react-router";
import SingleApp from "../Home/SingleApp";

const AllApps = () => {
  const appData = useLoaderData();
  console.log(appData);
  return (
    <div>
      <div className="flex justify-between">
        <h1>({appData.length})Apps Found</h1>
        <div>SEarch</div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1">
        {appData.map((app) => (
          <SingleApp key={app.id} app={app}></SingleApp>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
