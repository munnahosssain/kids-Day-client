import Store from "../Store/Store";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery ";
import PickToy from "../PickToy/PickToy";
import CategoryTab from "../CategoryTab/CategoryTab";

const Home = () => {
  return (
    <>
      <Banner />
      <Gallery />
      <CategoryTab />
      <PickToy />
      <Store />
    </>
  );
};

export default Home;
