import Logo from "@/assets/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
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
        <div className="lg:hidden">
          <label className="btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
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
          <Link href='/signup'>
            <button className="btn bg-green text-white text-sm font-semibold ">
              সাইন আপ
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
