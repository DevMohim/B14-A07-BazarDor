'use client'
import { INavLinks } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksClientProps {
  navLinks: INavLinks[];
}
const MobileNavLinks = ({ navLinks }: NavLinksClientProps) => {
  const pathname = usePathname();
  return (
    <nav className=" border-b-2 border-b-black/5 px-4 py-3 lg:block">
      <div className="container mx-auto grid grid-cols-4 items-center gap-x-1 gap-y-2">
        {navLinks.map((menu) => {
          const isActive = pathname === `/category/${menu.slug}`;

          return (
            <Link
              href={`/category/${menu.slug}`}
              key={menu.slug}
              className={`btn flex items-center gap-1 rounded-lg border-none ${
                isActive ? "bg-green text-white" : ""
              }`}
            >
              <span>{menu.icon}</span>
              <span className="text-sm font-semibold">{menu.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavLinks;