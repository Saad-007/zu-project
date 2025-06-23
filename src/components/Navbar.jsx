import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-4 left-0 w-full px-6 flex items-center justify-between z-50">
      {/* Left side: Logo or leave empty if not needed */}
      <div></div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-2">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-xl focus:outline-none"
        >
          <FaBars className="mt-1" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-14 right-4 backdrop-blur-md bg-black/30 rounded-xl shadow-lg w-52 p-5 md:hidden text-white font-semibold text-sm space-y-4 transition-all duration-300 ease-in-out">
          <a
            href="#home"
            className="block hover:text-teal-300 tracking-wide transition duration-200"
          >
            HOME
          </a>
          <a
            href="#about us"
            className="block hover:text-teal-300 tracking-wide transition duration-200"
          >
            ABOUT US
          </a>
          <a
            href="#Donate"
            className="block hover:text-teal-300 tracking-wide transition duration-200"
          >
            DONATE
          </a>
          <a
            href="#Impact"
            className="block hover:text-teal-300 tracking-wide transition duration-200"
          >
            CONTACT US
          </a>

          <hr className="border-white/30" />

          <button className="w-full bg-white text-teal-600 py-2 rounded-lg text-xs font-bold hover:bg-gray-100 transition">
            LOGIN
          </button>
        </div>
      )}
    </div>
  );
};
export default Navbar;
