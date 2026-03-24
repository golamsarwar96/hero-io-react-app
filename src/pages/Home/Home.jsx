import { useLoaderData } from "react-router";
import Apps from "./Apps";
import Banner from "./Banner";
import Stats from "./Stats";

const Home = () => {
  const appsData = useLoaderData();
  console.log(appsData);
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <Apps appsData={appsData}></Apps>
    </div>
  );
};

export default Home;
