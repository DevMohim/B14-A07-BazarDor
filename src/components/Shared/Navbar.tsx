import TopHeader from "../TopHeader";
import NavLinks from "../NavLinks";
import MarqueeTexts from "../MarqueeTexts";

const Navbar = async () => {
  return (
    <>
      <header className="bg-headerBg/95 ">
        {/* top header with logo and signUp signIn btn */}
        <TopHeader />
        {/* Navigation item from header */}
        <NavLinks />
      </header>

      {/* marquee */}
      <MarqueeTexts />
    </>
  );
};

export default Navbar;
