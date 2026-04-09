import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <div className="uppercase">
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
};

export default Navbar;
