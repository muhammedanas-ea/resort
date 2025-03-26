import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Untitled design (1).png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
  };

  const navItems = ["HOME", "ABOUT US", "ROOM", "BLOG", "CONTACT US"];

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container  px-4 lg:px-8 py-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-28 h-10">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-sm">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                onClick={() => handleTabClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative py-2 playfair px-1 tracking-wider ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 origin-left transition-all duration-300 
                    ${
                      activeTab === item
                        ? "scale-x-100 bg-[#B59D71]"
                        : "scale-x-0 group-hover:scale-x-100 bg-white"
                    }`}
                ></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className={`flex gap-2 items-center text-sm font-medium border ${
                scrolled
                  ? "border-[#B59D71] hover:bg-amber-400/10"
                  : "border-white hover:bg-white/10"
              } justify-center px-6 py-2 rounded-lg transition-colors duration-300`}
              onClick={() => (window.location.href = "tel:8157880985")}
            >
              <span className={scrolled ? "text-[#B59D71]" : "text-white"}>
                Book Now
              </span>
              <IoIosArrowRoundForward
                className={scrolled ? "text-[#B59D71]" : "text-white"}
                size={20}
              />
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <IoClose
                className={`text-2xl ${scrolled ? "text-white" : "text-white"}`}
              />
            ) : (
              <IoMenu
                className={`text-2xl ${scrolled ? "text-white" : "text-white"}`}
              />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black lg:hidden z-40"
                onClick={toggleMobileMenu}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className="fixed top-0 right-0 h-full w-80 bg-black border-l border-gray-800 shadow-2xl z-50 p-6 lg:hidden"
              >
                <div className="flex justify-end mb-10">
                  <motion.button
                    onClick={toggleMobileMenu}
                    whileTap={{ scale: 0.9 }}
                    className="p-2"
                  >
                    <IoClose className="text-2xl text-white" />
                  </motion.button>
                </div>

                <motion.div className="flex flex-col space-y-8">
                  {navItems.map((item) => (
                    <motion.a
                      key={item}
                      href="#"
                      onClick={() => handleTabClick(item)}
                      variants={mobileItemVariants}
                      className={`text-xl playfair font-medium ${
                        activeTab === item ? "text-[#B59D71]" : "text-white"
                      }`}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.button
                    variants={mobileItemVariants}
                    className="flex gap-3 items-center text-sm font-medium border border-[#B59D71] text-[#B59D71] justify-center px-6 py-3 rounded-full mt-8"
                    onClick={() => {
                      window.location.href = "tel:8157880985";
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span>Book Now</span>
                    <IoIosArrowRoundForward size={20} />
                  </motion.button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
