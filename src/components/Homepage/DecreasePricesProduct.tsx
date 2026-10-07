import { IProductType } from "@/types/types";
import { getAllProducts } from "@/utils/Data";
import { IoTriangleSharp } from "react-icons/io5";
import ProductCard from "../Shared/ProductCard";

const DecreasePricesProduct = async () => {
  const allProducts = (await getAllProducts()) as IProductType[];
  const highPriceProducts = allProducts.filter(
    (product) => product.change.dir === "down",
  );
  const sortedProduct = highPriceProducts
    .sort(
      (firstProduct, secondProduct) =>
        firstProduct.change.pct - secondProduct.change.pct,
    )
    .slice(0, 6);
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <h1 className="flex items-center gap-3 text-dark text-2xl font-bold mb-6">
          <span className="flex items-center gap-0.5 text-green">
            <IoTriangleSharp className="rotate-180 w-4 h-6" />
          </span>
          আজ দাম কমেছে
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {sortedProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecreasePricesProduct;
;
