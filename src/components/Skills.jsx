import tick from "../assets/tick.svg";

const Skills = () => {
  return (
    <>
    <section id="skills">
      <div className="pt-[96px] pb-[45px]">
        <div>
          <h2 className="text-[2.8rem] font-semibold text-center">Skills</h2>
          <p className="text-[1.8rem] text-[#757575] mb-[64px] text-center">
            Technical Lvl
          </p>
        </div>
        <div className="grid justify-center">
          <div className="text-center py-[32px] px-[6rem] bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-[20px]">
            <h3 className="text-[16px] font-semibold mb-[28px]">
              Web Development
            </h3>
            <div className="grid grid-cols-2 gap-[18px]">
              <Item skill={'HTML5'} lvl={'Intermediate'}/>
              <Item skill={'CSS 3'} lvl={'Intermediate'}/>
              <Item skill={'JavaScript'} lvl={'Intermediate'}/>
              <Item skill={'Tailwind CSS'} lvl={'Intermediate'}/>
              <Item skill={'React.JS'} lvl={'Basic'}/>
              <Item skill={'Git'} lvl={'Basic'}/>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Skills;




export const Item = ({skill, lvl}) => {
  return (
    <>
      <div className="grid items-start">
        <div className="flex gap-[8px]">
          <img className="w-[18px] h-[18px] translate-y-[2px]" src={tick} alt="icon" />
          <div>
            <h4 className="text-[16px] text-start">{skill}</h4>
            <p className="text-[13px] text-[#757575] text-start">{lvl}</p>
          </div>
        </div>
      </div>
    </>
  );
};
