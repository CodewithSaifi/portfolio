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

  const [show, setShow] = useState(true);

  return (
    <>
      <header>
        <div
          className={`fixed top-0 left-0 w-full z-20 bg-[#fafafa] transition-shadow duration-200 ${
            scrolled ? "shadow-md border-b border-gray-300" : ""
          }`}
        >
          <div className="flex justify-between max-w-[1080px] mx-auto py-[16px]">
            <div className="text-[2.8rem] font-semibold ml-[24px]">
              Portfolio
            </div>
            <div className="md:flex hidden gap-[30px] text-[1.6rem] mr-[24px] font-semibold items-center">
              <a
                className="hover:text-[#9fbc49] transition duration-300"
                href="#home"
              >
                Home
              </a>
              <a
                className="hover:text-[#9fbc49] transition duration-300"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="hover:text-[#9fbc49] transition duration-300"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="hover:text-[#9fbc49] transition duration-300"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="fixed z-50 top-[16px] right-[24px]"
            onClick={() => setShow(!show)}
          >
            <div
              className={`transition-transform duration-500 ease-in-out ${
                show ? "rotate-0" : "rotate-90"
              }`}
            >
              {show ? (
                <svg
                  className="w-[24px] h-[24px]"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-[24px] h-[24px]"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  ></path>
                </svg>
              )}
            </div>
          </button>

          <div
            className={`fixed left-0 right-0 h-[250px] pt-[70px] px-[18px] bg-white z-30 shadow-[0_-2px_18px_rgba(0,0,0,0.1)] rounded-bl-[24px] rounded-br-[24px] transition-all duration-500 ease-in-out ${
              show ? "-top-[250px]" : "top-[0px]"
            }`}
          >
            <div className="grid grid-cols-3 gap-[32px] justify-center items-center">
              <NavBtn
                link={"#home"}
                text={"Home"}
                img={
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                }
              />
              <NavBtn
                link={"#skills"}
                text={"Skills"}
                img={
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                }
              />
              <NavBtn
                link={"#projects"}
                text={"Projects"}
                img={
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                }
              />
              <NavBtn
                link={"#contact"}
                text={"Contact"}
                img={
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                }
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

const NavBtn = ({ text, img, link }) => {
  return (
    <a className="w-fit mx-auto group" href={link}>
      <div className="flex flex-col justify-center items-center w-[80px] h-[52px] cursor-pointer">
        <svg
          className="w-[22px] text-[#333333] transition duration-300 group-hover:text-[#9fbc49]"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {img}
        </svg>
        <p className="text-[14px] font-semibold text-[#333333] transition duration-300 group-hover:text-[#9fbc49]">
          {text}
        </p>
      </div>
    </a>
  );
};
