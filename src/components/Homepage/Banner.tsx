import BannerImg from "@/assets/bazar-hero.png";
import Image from "next/image";

const time = new Date().toLocaleDateString("bn-BD", {
  timeZone: "Asia/Dhaka",
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Banner = () => {
  return (
    <section className="px-4 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 rounded-lg border-2 border-stroke bg-headerBg px-5 py-8 sm:px-8 sm:py-10 lg:flex-row lg:justify-between lg:gap-10">
        <div className="w-full max-w-xl space-y-3 text-center lg:text-left">
          <span className="inline-block rounded-[14px] bg-green/10 px-3 py-1 text-sm font-medium text-green">
            {time}
          </span>

          <h1 className="text-3xl font-bold leading-tight text-dark sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-sm leading-6 text-dark/70 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#allProduct"
            className="btn mt-2 w-full bg-green text-sm font-semibold text-white sm:w-auto"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-78.75">
          <Image
            src={BannerImg}
            alt="Bazardor banner image"
            width={315}
            height={265}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
