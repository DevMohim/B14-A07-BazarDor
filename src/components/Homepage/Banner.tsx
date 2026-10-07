import BannerImg from '@/assets/bazar-hero.png'
import Image from 'next/image';
const time = new Date().toLocaleDateString("bn-BD", {
  timeZone: "Asia/Dhaka",
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const Banner = () => {

   return (
     <section>
       <div className="container mx-auto bg-headerBg border-2 border-stroke rounded-lg flex justify-between items-center px-4 py-10">
         <div className="flex flex-col w-xl space-y-2">
           <span className="px-3 py-1  rounded-[14px] bg-green/10 text-green text-sm font-medium w-48">
             {time}
           </span>
           <h1 className="text-4xl font-bold text-dark mb-2">
             আজকের বাজারের দাম এক নজরে
           </h1>
           <p className="my-2 text-dark/70 ">
             চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
             বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
           </p>

           <button className="btn bg-green text-white text-sm font-semibold mt-2 w-32">
             সব পণ্য দেখুন
           </button>
         </div>
         <div>
           <Image
             src={BannerImg}
             alt="Bazardor banner image"
             width={315}
             height={265}
           ></Image>
         </div>
       </div>
     </section>
   );
};

export default Banner;