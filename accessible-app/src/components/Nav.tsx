import type { FC } from "react";
import useLocation from "@/hooks/useLocation";

const navLinks = [
  { id: "nav-home", href: "/", label: "Home" },
  { id: "nav-about", href: "/about", label: "About" },
  { id: "nav-services", href: "/services", label: "Services" },
  { id: "nav-contact", href: "/contact", label: "Contact" },
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
            <li key={link.id}>
              <a
                className={`block border-y-4 border-transparent px-4 py-1 font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 ${isActive ? "border-b-blue-600 bg-gray-200 text-blue-950" : "text-blue-600"}`}
                href={link.href}
                title={link.label}
                aria-current={isActive ? "page" : undefined}
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
