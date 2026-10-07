import { INavLinks } from "@/types/types";
import { getNavLinks } from "@/utils/Data";


const NavLinks = async() => {
     const navLinks = await getNavLinks();
   return (
      <nav className=" px-4 py-3 border-b-2 border-b-black/5 hidden lg:block">
                <div className=" flex items-center gap-4 container mx-auto">
                  {navLinks.map((menu: INavLinks, ind: number) => (
                    <li
                      key={ind}
                      className="list-none flex items-center gap-1 cursor-pointer btn border-none rounded-lg"
                    >
                      <p >{menu.icon}</p>
                      <h1 className="text-dark text-sm font-semibold">{menu.nameBn}</h1>
                    </li>
                  ))}
                </div>
              </nav>
   );
};

export default NavLinks;