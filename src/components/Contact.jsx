import email from "../assets/email.svg";
import arrow from "../assets/arrow.svg";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="text-center pt-[96px] mb-[80px]">
          <h2 className="text-[24px] font-semibold">Let's Connect</h2>
          <p className="text-[15px] text-[#757575] mb-[64px]">Contact Me</p>
          <h3 className="text-[20px] font-semibold mb-[24px]">Talk to Me</h3>
          <div className="flex flex-col justify-center items-center max-w-[34rem] mx-auto p-[24px] rounded-[18px] shadow-[0_0_8px_rgba(0,0,0,0.1)] bg-white">
            <img
              className="w-[32px] h-[32px] mb-[4px]"
              src={email}
              alt="icon"
            />
            <h4 className="text-[16px] font-medium mb-[2px]">Email</h4>
            <p className="text-[14px] text-[#757575] font-medium mb-[12px]">
              CodewithSaifii@gmail.com
            </p>
            <a
              className="group flex gap-[4px] font-medium text-[13px] text-[#757575]"
              href="mailto:codewithsaifii@gmail.com"
            >
              <span>Write Me</span>
              <img
                className="w-[17px] h-[17px] translate-y-[1px] transition duration-300 group-hover:translate-x-[4px]"
                src={arrow}
                alt="icon"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
