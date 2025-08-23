import hand from "../assets/hand.svg";
import resume from "../assets/resume.svg";
import myPic from "../assets/my-pic.png";
const Hero = () => {
  return (
    <>
      <div className="grid w-[1080px] pt-[120px] mx-auto gap-[24px]">
        <div className="grid grid-cols-[120px_auto_auto] gap-[24px] mx-[24px] my-[90px]">
          <div className="flex flex-col gap-[20px] justify-center">
            <a href="https://github.com/CodewithSaifi" target="_blank">
              <svg
                className="w-[24px] text-[#333333] hover:text-[#9fbc49] transition-colors duration-300 cursor-pointer"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/codewithsaifi" target="_blank">
              <svg
                className="w-[24px] text-[#333333] hover:text-[#9fbc49] transition-colors duration-300 cursor-pointer"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <div>
            <div className="flex gap-[8px]">
              <h1 className="text-[6rem] font-semibold">Md Saifullah</h1>
              <img
                className="translate-y-[-2px]"
                src={hand}
                width={"50px"}
                alt="."
              />
            </div>
            <p className="text-[2.2rem] my-[16px]">FrontEnd Developer</p>
            <p className="text-[#757575] text-[1.6rem] mb-[48px]">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <button className="bg-[#333333] hover:bg-[#9fbc49] transition duration-300 cursor-pointer text-[16px] font-semibold text-white py-[18px] px-[32px] rounded-[16px] flex gap-[8px]">
              Resume <img src={resume} alt="" />
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url(${myPic})`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
            }}
            className="morphing flex w-[300px] h-[300px] justify-center order-1 mx-auto shadow-[inset_0_0_0_9px_#e0e0e04d]"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
