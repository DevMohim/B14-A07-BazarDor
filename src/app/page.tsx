import AllProducts from "@/components/Homepage/AllProducts";
import Banner from "@/components/Homepage/Banner";
import DecreasePricesProduct from "@/components/Homepage/DecreasePricesProduct";
import IncreasePricesProduct from "@/components/Homepage/IncreasePricesProduct";
import AllProductsSkeleton from "@/components/Skeletons/AllProductSkleton";
import IncreasePricesProductSkeleton from "@/components/Skeletons/IncreaseSkeleton";
import ProductCardSkeleton from "@/components/Skeletons/ProductCardSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<ProductCardSkeleton />}>
        <IncreasePricesProduct />
      </Suspense>
      <Suspense fallback={<ProductCardSkeleton />}>
        <DecreasePricesProduct />
      </Suspense>
      <Suspense fallback={<ProductCardSkeleton />}>
        <AllProducts />
      </Suspense>
    </div>
  );
}
