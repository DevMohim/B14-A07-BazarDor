import { IProductType } from "@/types/types";
import { getAllProducts } from "@/utils/Data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoTriangleSharp } from "react-icons/io5";

const DetailsContent = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const products = (await getAllProducts()) as IProductType[];
  const product = products.find(p => p.slug === productId) as IProductType
  if (!product) {
    notFound();
  }
  const { nameBn, categoryIcon, image, today, yesterday, change, markets ,categoryNameBn ,unit} = product;

  const { pct } = change;
  const marketList = markets;

  const maxPrice = [...marketList]
    .sort((a, b) => b.max - a.max)
    .map((market) => market.max);
  const minPrice = [...marketList]
    .sort((a, b) => a.min - b.min)
    .map((market) => market.min);

  const unitBn: Record<string, string> = {
    liter: "লিটার",
    litre: "লিটার",
    dozen: "ডজন",
    kg: "কেজি",
    piece: "পিস",
  };

  const displayUnit = unitBn[unit.toLowerCase()] ?? unit;

  return (
    <section className="bg-[#E1E8E1] -mt-10 px-4">
      <div className="container mx-auto pt-10 py-20 space-y-6 mt">
        <div>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link href="/" className="text-dark text-sm">
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href={`/category/${product.category}`}
                  className="text-dark text-sm"
                >
                  {product.categoryNameBn}
                </Link>
              </li>
              <li className="text-dark text-sm">{product.nameBn}</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-stroke bg-white p-2 md:p-8 flex justify-between items-center gap-3">
          <div className="flex items-center gap-3 ">
            <div className="w-14 h-14 bg-stroke rounded-xl flex justify-center items-center">
              {image ? (
                <h1>{image}</h1>
              ) : (
                <span className="text-2xl">{categoryIcon}</span>
              )}
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xl font-bold text-dark">{nameBn}</h2>
              <p className="text-sm text-dark/70">
                প্রতি {displayUnit} · {nameBn}
              </p>
              <p className="text-sm text-dark">
                গতকালের তুলনায় আজ দাম <strong>বেড়েছে</strong> ·{" "}
                {(today - yesterday).toLocaleString("bn-BD")} টাকা
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-stroke px-3 md:px-5 py-4 flex justify-center items-center flex-col">
            <p className="text-dark/70 text-xs md:text-sm">আজকের দাম</p>
            <p className="text-xl md:text-3xl text-dark font-bold">
              {today.toLocaleString("bn-BD")}
            </p>
            <p className="mt-1 text-sm text-dark/70">টাকা/{displayUnit}</p>
            <p>
              <span className="flex items-center gap-0.5 text-red-600">
                <IoTriangleSharp />
                {Math.abs(Number(pct)).toLocaleString("bn-BD")}%
              </span>
            </p>
          </div>
        </div>

        {/* bazar table */}
        <div className="overflow-x-auto rounded-xl border border-stroke bg-white p-4 md:p-8">
          {/* Price (max , min and average ) */}
          <div className="mb-10">
            <h1 className="mb-4 font-bold text-dark text-2xl">
              দামের সারসংক্ষেপ
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2 border-2 border-stroke p-4 rounded-xl">
                <p className="text-dark/70 text-sm">সর্বনিম্ন দাম</p>
                <h2 className="text-green">
                  <span className=" font-bold text-2xl">
                    {minPrice[0].toLocaleString("bn-BD")}
                  </span>{" "}
                  টাকা
                </h2>
                <p className="text-dark/70 text-sm">সবচেয়ে কম দামের বাজার</p>
              </div>
              <div className="space-y-2 border-2 border-stroke p-4 rounded-xl">
                <p className="text-dark/70 text-sm">সর্বাধিক দাম</p>
                <h2 className="text-red-600">
                  <span className=" font-bold text-2xl">
                    {maxPrice[0].toLocaleString("bn-BD")}
                  </span>{" "}
                  টাকা
                </h2>
                <p className="text-dark/70 text-sm">সবচেয়ে বেশি দামের বাজার</p>
              </div>
              <div className="space-y-2 border-2 border-stroke p-4 rounded-xl">
                <p className="text-dark/70 text-sm">গড় দাম</p>
                <h2 className="text-green">
                  <span className=" font-bold text-2xl">
                    {((maxPrice[0] + minPrice[0]) / 2).toLocaleString("bn-BD")}
                  </span>{" "}
                  টাকা
                </h2>
                <p className="text-dark/70 text-sm">প্রতি কেজি-এর হিসাবে</p>
              </div>
            </div>
          </div>
          <h3 className="mb-4 font-bold text-dark text-2xl">
            বাজারভিত্তিক দাম
          </h3>

          {/* price table */}
          <div className="border-2 border-stroke rounded-2xl">
            <table className="w-full  text-left text-sm p-2">
              <thead>
                <tr className="border-b border-stroke text-dark/70">
                  <th className="p-3">বাজার</th>
                  <th className="p-3">বিভাগ</th>
                  <th className="p-3">সর্বনিম্ন</th>
                  <th className="p-3">সর্বাধিক</th>
                  <th className="p-3 text-right">গড়</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className={`border-t-2  border-dark ${index % 2 === 0 ? "bg-stroke" : "bg-white"}`}
                  >
                    <td className="p-3 text-dark font-semibold">
                      {market.market}
                    </td>
                    <td className="p-3">{market.division}</td>
                    <td className="p-3">
                      {market.min.toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="p-3 ">
                      {market.max.toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="p-3 text-dark font-semibold text-right">
                      {((market.max + market.min) / 2).toLocaleString("bn-BD")}{" "}
                      টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Link href={`/category/${product.category} `}>
          <button className="btn btn-ghost">🍚 সব {categoryNameBn}</button>
        </Link>
      </div>
    </section>
  );
};

export default DetailsContent;
