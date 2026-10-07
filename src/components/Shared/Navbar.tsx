
import TopHeader from "../TopHeader";

import NavLinks from "../NavLinks";


const Navbar =() => {

  return (
    <>
      <header className="bg-headerBg">
        {/* top header with logo and signUp signIn btn */}
        <TopHeader />
        {/* Navigation item from header */}
        <NavLinks />
      </header>
      
      {/* marquee */}
      <section>
         
      </section>
    </>
  );
};

export default Navbar;
