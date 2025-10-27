import arrow from "../assets/arrow.svg";
import data from "/data.json";

const Contact = () => {
  return (
    <>
      <section id="projects">
        <div className="text-center pt-[96px] mb-[80px]">
          <div>
            <h2 className="text-[24px] font-semibold">Portfolio</h2>
            <p className="text-[15px] text-[#757575] mb-[64px]">
              Recent Projects
            </p>
          </div>
          <div className="flex justify-center gap-[12px] mb-[24px]">
            <h3 className="text-[16px] py-[4px] px-[12px] mb-[32px] rounded-[8px] hover:bg-[#333333] hover:text-[#fff] cursor-pointer">
              All
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-[48px] max-w-[700px] px-[16px] mx-auto">
            {data.map((project) => {
              return (
                <Card
                  key={project.id}
                  title={project.title}
                  img={project.img}
                  link={project.link}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const Card = ({ title, img, link }) => {
  return (
    <div className="flex flex-col justify-center items-start max-w-[300px] mx-auto p-[16px] rounded-[18px] shadow-[0_0_8px_rgba(0,0,0,0.1)] bg-white">
      <img className="rounded-[12px]" src={img} alt="Image" />
      <h3 className="text-[16px] text-[#333333] font-medium mt-[24px] mb-[8px]">
        {title}
      </h3>
      <a
        target="_blank"
        className="group flex gap-[4px] font-medium text-[13px] text-[#757575] cursor-pointer"
        href={link}
      >
        <span>Link</span>
        <img
          className="w-[17px] h-[17px] translate-y-[1px] transition duration-300 group-hover:translate-x-[4px]"
          src={arrow}
          alt="icon"
        />
      </a>
    </div>
  );
};
