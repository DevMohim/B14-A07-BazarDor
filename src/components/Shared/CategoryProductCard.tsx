import { IProductType } from '@/types/types';
import Link from 'next/link';
import { IoTriangleSharp } from 'react-icons/io5';

const ProductCard = ({product} : {product : IProductType}) => {
   const {image,nameBn,today,change} = product
   return (
     <Link href={`/product/${product.id}`}>
       <div className="bg-white border border-stroke rounded-lg p-6 hover:border hover:border-green transition ease-in duration-200">
         <div className="flex items-center gap-2">
           <div className="w-12 h-12 rounded-xl bg-stroke flex justify-center items-center">
             <h1>{image}</h1>
           </div>
           <div>
             <h1 className="font-semibold text-dark mb-0.5">{nameBn}</h1>
             <p className="text-xs text-dark/80">প্রতি কেজি</p>
           </div>
         </div>
         <p className="mt-4 text-xs text-dark/80">আজকের দাম</p>
         <div className="flex justify-between items-center gap-4">
           <h1 className="font-bold text-xl">
             {today.toLocaleString("bn-BD")}{" "}
             <span className="text-dark text-sm">টাকা</span>
           </h1>
           <div
             className={`flex items-center gap-0.5 ${change.dir === "up" ? "text-red-600" : "text-green"} flex gap-2 px-4 py-1.5 rounded-full bg-stroke`}
           >
             <p>
               <IoTriangleSharp
                 className={` w-2.5 h-4 ${change.dir === "down" && "rotate-180"}`}
               />
             </p>
             <p>{Math.abs(change.pct).toLocaleString("bn-BD")}%</p>
           </div>
         </div>
       </div>
     </Link>
   );
};

export default ProductCard;