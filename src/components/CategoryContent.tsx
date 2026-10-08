import { INavLinks, IProductType } from '@/types/types';
import { getProductCategory, getSingleProduct } from '@/utils/Data';
import ProductCard from './Shared/ProductCard';

const CategoryContent = async({params} : {params: Promise<{categoryName: string}>}) => {
   const { categoryName } = await params;
   const products = await getProductCategory({ categoryName }) as IProductType[]
   const product = await getSingleProduct({categoryName}) as INavLinks
  return (
    <div className="bg-[#E1E8E1] -mt-10">
      <div className="container mx-auto pt-10 pb-20 space-y-4">
        <div className="bg-white rounded-2xl border border-stroke flex items-center p-4 ">
          <div className="w-9 h-10 flex items-center gap-2">
            <h1>{product.icon}</h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-dark mb-1">
              {product.nameBn}
            </h1>
            <p className="text-dark/70 text-sm">
              {products.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও
              পরিবর্তন
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 justify-end p-4 bg-white
         rounded-2xl border border-stroke"
        >
          <label className="text-sm text-dark/70">সাজান</label>
          <select
            id="sort-products"
            className="select select-bordered select-sm w-33"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>
        </div>

        <div className='my-5'>
          <p className="text-sm text-dark/70 mb-4">
            মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryContent;