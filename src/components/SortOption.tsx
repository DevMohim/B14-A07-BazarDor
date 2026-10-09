'use client'
import { IProductType } from '@/types/types';
import { useMemo, useState } from 'react';
import ProductCard from './Shared/ProductCard';

const SortOption = ({ products }: { products : IProductType[]}) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = useMemo(() => {
    const result = [...products];

    if (sort === "price-asc") {
      result.sort((a, b) => a.today - b.today);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.today - a.today);
    }

    return result;
  }, [products, sort]);

  return (
    <section>
      <div
        className="flex items-center gap-4 justify-end p-4 bg-white
      rounded-2xl border border-stroke"
      >
        <label className="text-sm text-dark/70">সাজান</label>
        <select
          id="sort-products"
          className="select select-bordered select-sm w-33"
          value={sort}
          onChange={(e)=>setSort(e.target.value)}
        >
          <option value="default">ডিফল্ট</option>
          <option value="price-asc">দাম: কম থেকে বেশি</option>
          <option value="price-desc">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="my-5">
        <p className="text-sm text-dark/70 mb-4">
          মোট {sortedProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SortOption;