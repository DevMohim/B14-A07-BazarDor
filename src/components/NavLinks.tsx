import { Suspense } from "react";
import { getNavLinks } from "@/utils/Data";
import NavLinksClient from "./NavLinksClients";

const NavLinks = async () => {
  const navLinks = await getNavLinks();

  return (
    <Suspense
      fallback={
        <nav className="hidden border-b-2 border-b-black/5 px-4 py-3 lg:block">
          <div className="container mx-auto flex items-center gap-4" />
        </nav>
      }
    >
      <NavLinksClient navLinks={navLinks} />
    </Suspense>
  );
};

export default NavLinks;
