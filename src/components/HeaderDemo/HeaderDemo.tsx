import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { label: "Demo", hasDropdown: false, path: "/about" },
  { label: "Business", hasDropdown: false, path: null },
  { label: "Developers", hasDropdown: false, path: null },
  { label: "Pricing", hasDropdown: false, path: null },
  { label: "Support", hasDropdown: false, path: null },
];

export const HeaderDemo = (): JSX.Element => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[linear-gradient(37deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] border-b border-white/10 z-50">
      <div className="max-w-[1488px] mx-auto relative flex items-center justify-between px-4 sm:px-6 lg:px-6 h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="TrustVerify"
            className="h-8 sm:h-10 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <button className="inline-flex items-center gap-1 text-[#d8d8d8] text-[17px] hover:text-white transition-colors">
                  {item.label}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
              ) : item.path ? (
                <Link
                  to={item.path}
                  className={`text-[17px] ${
                    location.pathname === item.path
                      ? "text-white font-medium"
                      : "text-[#d8d8d8] hover:text-white"
                  } transition-colors`}
                >
                  {item.label}
                </Link>
              ) : (
                <button className="text-[17px] text-[#d8d8d8] hover:text-white transition-colors">
                  {item.label}
                </button>
              )}
              {location.pathname === item.path && (
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-white rounded-full" />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-[#27ae60] text-white"
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[linear-gradient(37deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-start p-4 space-y-3">
              {navigationItems.map((item, index) =>
                item.path ? (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full text-left text-white text-lg font-medium ${
                      location.pathname === item.path ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={index}
                    className="w-full text-left text-white/80 text-lg font-medium"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
