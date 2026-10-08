"use client";
import { signOut, useSession } from "@/lib/auth-cilent";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

const Btns = () => {
  const { data: session } = useSession();
  const [isMenuClick ,setIsMenuClick] = useState<boolean>(false)
  const router =  useRouter()

  const handleSignOut = async() => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          setIsMenuClick(false)
          router.push("/signin");
        },
      },
    });
    
  }



  const handleMenuClick = () => {
    setIsMenuClick(!isMenuClick)
  }

  return (
    <div className="flex items-center gap-4 relative">
      <div>
        {session?.user ? (
          <>
            <div
              onClick={handleMenuClick}
              className="flex gap-2 hover:bg-dark/20 px-4 py-2 transition duration-200 ease-in rounded-lg cursor-pointer"
            >
              <div className="bg-green w-8 h-8 rounded-lg flex justify-center items-center mr-2">
                <h1 className="font-bold font-sans text-white px-2 py-0.5 ">
                  {session?.user.name.slice(0, 1)}
                </h1>
              </div>
              <h1 className="text-xl font-sans text-dark font-semibold -mr-3">
                {session?.user.name}
              </h1>
              <p>
                <RiArrowDropDownFill className="w-8 h-8" />
              </p>
            </div>
          </>
        ) : (
          <div className=" flex items-center gap-4">
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
          </div>
        )}
      </div>
      <div
        className={`absolute z-100 bg-white py-5 pl-5 pr-24 rounded-xl border-2 border-stroke  ${isMenuClick ? "top-14 right-2" : "-top-96 -right-3"}`}
      >
        <h1 className="text-lg text-dark/50 font-medium">
          {session?.user.name}
        </h1>
        <p className="text-sm text-dark/50  mb-3">
          {session?.user.email}
        </p>
        <Link href='/profile'>
          <h3 className="text-dark mb-2 ">👤 আমার প্রোফাইল</h3>
        </Link>
        <h3 onClick={handleSignOut} className="text-red-600 cursor-pointer">
          ↩ সাইন আউট
        </h3>
      </div>
    </div>
  );
};

export default Btns;
