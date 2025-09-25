import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import useLocation from "@/hooks/useLocation";

const navLinks = [
  { id: "nav-home", href: "/", label: "Home" },
  { id: "nav-about", href: "/about", label: "About" },
  { id: "nav-services", href: "/services", label: "Services" },
  { id: "nav-contact", href: "/contact", label: "Contact" },
];

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav id="hamburger-menu" className="relative" aria-label="Main navigation">
      <button
        title="Toggle menu"
        aria-controls="hamburger-menu-list"
        aria-expanded={open}
        aria-label="Menu"
        className={`${open ? "bg-gray-200" : "bg-gray-100"} cursor-pointer rounded p-2 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600`}
        onClick={() => setOpen(!open)}
      >
        <HamburgerIcon
          className={`${open ? "text-blue-950" : "text-blue-600"} transition-colors duration-300`}
          open={open}
          aria-hidden="true"
        />
      </button>
      <ul
        id="hamburger-menu-list"
        className={`absolute top-[calc(100%+0.5rem)] left-0 w-48 overflow-hidden rounded bg-gray-100 font-medium shadow-md transition-all ${
          open ? "block" : "hidden"
        }`}
        role="menu"
      >
        {navLinks.map((link) => (
          <li key={link.id} role="none">
            <a
              href={link.href}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              className={`block px-4 py-2 transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 ${location.pathname === link.href ? "bg-gray-200 text-blue-950" : "text-blue-600"}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
