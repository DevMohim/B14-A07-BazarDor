"use client";

import Logo from "@/assets/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Btns from "./Btns";
import { getNavLinks } from "@/utils/Data";
import MobileNavLinks from "./MobileNavLinks";
import toast from "react-hot-toast";

type NavLinks = Awaited<ReturnType<typeof getNavLinks>>;

const time = new Date().toLocaleDateString("bn-BD", {
  timeZone: "Asia/Dhaka",
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const TopHeader = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [navLinks, setNavLinks] = useState<NavLinks | null>(null);

  

  useEffect(() => {
    getNavLinks()
      .then(setNavLinks)
      .catch((error) => toast.error("Navigation links load failed:", error));
  }, []);

  return (
    <section className="border-b-2 border-b-black/5 px-4 relative">
      <div className="container mx-auto flex items-center justify-between gap-4 py-2">
        <button
          type="button"
          className="btn btn-circle lg:hidden"
          aria-expanded={isClick}
          onClick={() => setIsClick((open) => !open)}
        >
          {isClick ? "✕" : "☰"}
        </button>

        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green">
              <Image src={Logo} alt="Bazar-Dor logo" />
            </div>
          </Link>

          <div>
            <h1 className="text-xl font-bold text-dark">বাজার দর</h1>
            <p className="text-xs">{time}</p>
          </div>
        </div>

        <Btns />
      </div>

      {isClick && navLinks && (
        <div className="lg:hidden absolute top-16 left-0 z-100 w-full bg-white">
          <MobileNavLinks navLinks={navLinks} />
        </div>
      )}
    </section>
  );
};

export default TopHeader;
