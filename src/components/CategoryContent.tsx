import { INavLinks, IProductType } from '@/types/types';
import { getProductCategory, getSingleProduct } from '@/utils/Data';
import SortOption from './SortOption';
import { notFound } from 'next/navigation';

const CategoryContent = async({params} : {params: Promise<{categoryName: string}>}) => {
   const { categoryName } = await params;
   const products = await getProductCategory({ categoryName }) as IProductType[]
   const product = await getSingleProduct({categoryName}) as INavLinks


   if (!products || products.length === 0) {
     notFound();
   }
  return (
    <div className="bg-[#E1E8E1] -mt-10 px-4">
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

        <SortOption products={products}/>

        
      </div>
    </div>
  );
};

export default CategoryContent;