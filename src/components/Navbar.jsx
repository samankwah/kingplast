import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/icons/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "AboutUs", path: "/aboutus" },
  { name: "Products", path: "/products" },
  { name: "Features", path: "/features" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-yellow-400 px-4 py-0 text-blue-950 text-center text-sm font-bold hidden md:block">
        All our products are 30% cheaper than Concrete housing
      </div>

      {/* Navbar */}
      <nav className="bg-[#0F172A] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="KingPlast Logo" className="h-12 w-auto" />
            {/* <span className="text-3xl font-bold">KingPlast</span> */}
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {links.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 font-semibold border-b-2 border-yellow-500"
                      : "hover:text-yellow-500"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden bg-white text-blue-950 px-6 py-4"
            ref={mobileMenuRef}
          >
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "block text-yellow-500 font-semibold border-b-2 border-yellow-500"
                        : "block hover:text-yellow-500"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
