import Logo from "@/assets/logo-icon.png";
import Image from "next/image";
const time = new Date().toLocaleDateString("bn-BD", {
  timeZone: "Asia/Dhaka",
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const TopHeader = () => {
  return (
    <section className="border-b-2 border-b-black/5">
      <div className="flex justify-between items-center gap-4 container mx-auto py-2 ">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-green flex justify-center items-center">
            <Image src={Logo} alt="Bazar-Dor logo"></Image>
          </div>
          <div>
            <h1 className="font-bold text-xl text-dark">বাজার দর</h1>
            <p className="text-xs">{time}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn border-none text-sm font-semibold ">
            সাইন ইন
          </button>
          <button className="btn bg-green text-white text-sm font-semibold ">
            সাইন আপ
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
