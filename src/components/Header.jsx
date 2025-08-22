 import { useState, useEffect } from "react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div   className={`fixed top-0 left-0 w-full z-50 bg-[#fafafa] transition-shadow duration-200 ${
        scrolled ? "shadow-md border-b border-gray-300" : ""
      }`}>
        <div className="flex justify-between w-[1080px] mx-auto py-[16px] items-center">
          <div className="text-[2.8rem] font-semibold ml-[24px]">Portfolio</div>
          <div className="flex gap-[30px] text-[1.6rem] mr-[24px] font-medium">
            <a className="hover:text-[#9fbc49] transition duration-300" href="#home">Home</a>
            <a className="hover:text-[#9fbc49] transition duration-300" href="#skills">Skills</a>
            <a className="hover:text-[#9fbc49] transition duration-300" href="#projects">Projects</a>
            <a className="hover:text-[#9fbc49] transition duration-300" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;