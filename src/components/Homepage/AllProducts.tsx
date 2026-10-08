import { IProductType } from '@/types/types';
import { getAllProducts } from '@/utils/Data';
import ProductCard from '../Shared/ProductCard';

const AllProducts = async() => {
   const allProducts = await getAllProducts() as IProductType[]
   return (
     <section className="mt-12">
       <div className="container mx-auto">
         <h1 className="flex items-center gap-3 text-dark text-2xl font-bold mb-3">
           সব পণ্য
         </h1>
         <p className="text-dark/50 mb-6">
           মোট {allProducts.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
           {allProducts.map((product) => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
       </div>
     </section>
   );
};

export default AllProducts;