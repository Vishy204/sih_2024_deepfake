import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ loginAction }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute flex items-center justify-center bg-[#26586c] border-b-2 border-black h-[8vh] md:h-[12vh] px-2 md:px-10 w-full font-protest z-[1000]">
      {/* Wrapper to center the logo and menu items */}
      <div className="flex w-full justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="" // Add your image source here
              width={150}
              height={150}
              alt=""
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-12 text-white font-bold text-4xl tracking-wider">
          <Link to="/">
            <li className="hover:underline text-white">Home</li>
          </Link>
          <li className="hover:underline">
            <a href="/about">About</a>
          </li>
          <Link to="/upload">
            <li className="hover:underline">Upload File</li>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden block" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? "cross-icon.svg" : "burger-menu.svg"}
            width={50}
            height={50}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
          />
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-6xl font-bold font-pixeboy z-[1001]">
          {/* Cross Icon in the Full-Screen Menu */}
          <button className="absolute top-5 right-5" onClick={toggleMenu}>
            <img
              src="cross-icon.svg"
              width={75}
              height={75}
              alt="Close Menu"
            />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col gap-8 mt-12">
            <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              Home
            </li>
            <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              Tracks
            </li>
            <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              About
            </li>
            <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              FAQ
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
