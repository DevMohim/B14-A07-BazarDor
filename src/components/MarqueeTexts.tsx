import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { IProductType } from "@/types/types";
import { getAllProducts } from "@/utils/Data";
import { IoTriangleSharp } from "react-icons/io5";

const unitBn: Record<string, string> = {
  liter: "লিটার",
  litre: "লিটার",
  dozen: "ডজন",
  kg: "কেজি",
  piece: "পিস",
};

const MarqueeTexts = async () => {
  const allProduct: IProductType[] = await getAllProducts();

  return (
    <section className="sticky top-0 z-50 mb-6 border-2 border-stroke bg-headerBg text-dark">
      <MarqueeText direction="right" duration={10} pauseOnHover>
        {allProduct.map((product) => {
          const unitKey = product.unit.trim().toLowerCase();
          const displayUnit = unitBn[unitKey] ?? product.unit;
          const direction = product.change.dir;

          return (
            <div key={product.id} className="border-r-2 border-r-dark/10">
              <div className="flex cursor-pointer items-center gap-2 px-8 py-2">
                <span>{product.image}</span>

                <span className="font-semibold">{product.nameBn}</span>

                <span>
                  {product.today.toLocaleString("bn-BD")} টাকা/প্রতি{" "}
                  {displayUnit}
                </span>

                <span
                  className={`flex items-center gap-0.5 ${
                    direction === "flat"
                      ? "text-gray-500"
                      : direction === "up"
                        ? "text-red-600"
                        : "text-green"
                  }`}
                >
                  {direction === "flat" ? (
                    <span> — </span>
                  ) : (
                    <>
                      <IoTriangleSharp
                        className={direction === "down" ? "rotate-180" : ""}
                      />
                      {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                    </>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </MarqueeText>
    </section>
  );
};

export default MarqueeTexts;
