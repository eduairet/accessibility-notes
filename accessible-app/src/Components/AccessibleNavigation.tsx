import useLocation from "@/hooks/useLocation";
import type { FC } from "react";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

const AccessibleNavigation: FC = () => {
  const location = useLocation();

  return (
    <nav
      className="w-fit overflow-hidden rounded bg-gray-100 shadow-md"
      id="main-navigation"
      aria-label="Main navigation"
    >
      <ul className="m-0 flex list-none flex-col justify-between p-0 md:flex-row">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;

          return (
            <li key={link.href}>
              <a
                className={`block border-y-4 border-transparent p-4 transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 ${isActive ? "border-b-orange-600 font-bold text-orange-600" : "font-medium text-blue-600"}`}
                href={link.href}
                title={link.label}
                aria-current={isActive ? "page" : undefined}
                tabIndex={0}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AccessibleNavigation;
