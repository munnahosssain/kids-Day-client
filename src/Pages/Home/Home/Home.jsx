import Store from "../Store/Store";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery ";
import PickToy from "../PickToy/PickToy";
import CategoryTab from "../CategoryTab/CategoryTab";
import WatchNLearn from "../WatchNLearn/WatchNLearn";

const Home = () => {
  return (
    <>
      <Banner />
      <Gallery />
      <CategoryTab />
      <PickToy />
      <Store />
      <WatchNLearn />
    </>
  );
};

export default Home;
