import Breadcrumbs from "@/components/ProductDetail/Breadcrumbs"
import GalleryGrid from "@/components/ProductDetail/GalleryGrid"
import Header from "@/components/ProductDetail/Header"
import Intro from "@/components/ProductDetail/Intro"

const Product_Detail = () => {
  return (
    <div className="w-full flex flex-col gap-4 container my-8">
      <Breadcrumbs />
      <Header />
      <GalleryGrid />
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-7">
          <Intro />
        </div>
        <div className="col-span-3">
        </div>
      </div>
    </div>
  );
}
export default Product_Detail