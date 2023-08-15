import Account from "../components/Account";
import BrandLogo from "../components/BrandLogo";
import Carousels from "../components/Carousels";
import Navbar from "../components/Navbar";
import ShowClose from "../components/ShowClose";
import FilterProductNav from "../components/FilterProductNav";
import Product from "../components/Product";
const Home = () => {
  return (
    <div>
      <Account />
      <BrandLogo />
      <Carousels />
      <Navbar />
      <ShowClose />
      <FilterProductNav />
      <Product />
    </div>
  );
};

export default Home;
