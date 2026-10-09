import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { IProductType } from "@/types/types";
import { getAllProducts } from "@/utils/Data";
import { IoTriangleSharp } from "react-icons/io5";

const MarqueeTexts = async() => {
  const allProduct: IProductType[] = await getAllProducts();

  return (
    <section className="sticky top-0 z-50 text-dark mb-6 bg-headerBg border-2 border-stroke">
      <div className="flex">
        <MarqueeText direction="right" duration={7} pauseOnHover>
          {allProduct.map((product) => (
            <div key={product.id} className="border-r-2 border-r-dark/10 ">
              <div className="flex items-center gap-2 px-8 py-2 cursor-pointer ">
                <span>{product.image}</span>
                <span className="text-dark font-semibold ">
                  {product.nameBn}
                </span>
                <span>{product.today.toLocaleString("bn-BD")} টাকা/কেজি</span>
                {product.change.dir === "up" ? (
                  <span className="flex items-center gap-0.5 text-red-600">
                    <IoTriangleSharp />
                    {product.change.pct.toLocaleString("bn-BD")}%
                  </span>
                ) : (
                  <span className="flex items-center gap-0.5 text-green">
                    <IoTriangleSharp className="rotate-180" />
                    {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </MarqueeText>
      </div>
    </section>
  );
};

export default MarqueeTexts;
