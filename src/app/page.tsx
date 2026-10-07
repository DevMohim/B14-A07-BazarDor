import Banner from "@/components/Homepage/Banner";
import DecreasePricesProduct from "@/components/Homepage/DecreasePricesProduct";
import IncreasePricesProduct from "@/components/Homepage/IncreasePricesProduct";

export default function Home() {
  return (
    <div >
      <Banner />
      <IncreasePricesProduct />
      <DecreasePricesProduct />
    </div>
  );
}
