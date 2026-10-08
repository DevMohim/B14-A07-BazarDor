"use client";
import { useSession } from "@/lib/auth-cilent";
import Image from "next/image";
import Link from "next/link";

const Btns = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-4">
      {session?.user ? (
        <>
          <div className="flex gap-2 bg-dark/30 px-4 py-2 rounded-lg cursor-pointer">
            <div className="bg-green  w-8 h-8 rounded-full flex justify-center items-center ">
              <h1 className="font-bold font-sans text-white px-2 py-0.5">
                {session?.user.name.slice(0, 1)}
              </h1>
            </div>
            <h1 className="text-2xl text-dark font-semibold">{session?.user.name}</h1>
          </div>
        </>
      ) : (
        <>
          <Link href="/signin">
            <button className="btn border-none text-sm font-semibold ">
              সাইন ইন
            </button>
          </Link>
          <Link href="/signup">
            <button className="btn bg-green text-white text-sm font-semibold ">
              সাইন আপ
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Btns;
