import TrekList from "../trek/page";
import ActivitiesList from "./activities/[slug]/page";
import TourList from "./tour/page";

const ProductList = () => {
  return (
    <div>
      <TrekList />
      <TourList />
      <ActivitiesList />
    </div>
  );
};
export default ProductList;
