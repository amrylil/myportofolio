import React, { forwardRef, useState } from "react";
import { TechStackArray, ToolsDataArray } from "../data/techData";
import SkillCard from "../components/ui/SkillCard";

const About = forwardRef(() => {
  const [skillsData, setSkillsData] = useState(TechStackArray);

  const handleBtnSkills = (data) => {
    return () => setSkillsData(data);
  };

  return (
    <div className="container h-fit md:px-28 px-5  flex-col gap-8 ">
      {/* about */}
      <div
        className={`bg-white/10 p-10 flex flex-col  md:px-10 text-slate-50 justify-center items-center rounded-md md:rounded md:h-[430px] animated-element`}
      >
        <div className="flex gap-12 md:flex-row flex-col justify-center items-center">
          <div
            className={`md:h-80 md:w-80 h-60 w-60 rounded-full overflow-hidden  hover:shadow-off  transition-all  border-[4px] border-slate-200 shadow-tipis shadow-green-500 brightness-90 animated-scale `}
          >
            <img src="images/lil2.jpeg" alt="" className="w-full" />
          </div>
          <div className="md:w-[60%] w-full px-10 flex flex-col gap-3 md:justify-center text-justify -translate-y-1">
            <div
              className={`flex gap-2 items-center justify-start  animated-translateX`}
            >
              <div className="h-1 w-52 md:w-80 bg-green-500 text-lg font-semibold"></div>
              <div className="text-xl font-bold">ABOUT</div>
            </div>
            <p className="animated-translateY">
              My name is Ulil Amry Al Qadri, born in Kodeoha on November 8,
              2003. I am the second of three siblings with a deep passion for
              information technology, particularly in software engineering. I am
              dedicated to continuously learning and developing my skills in
              this field, believing in IT's crucial role in advancing the world.
              With strong determination, I aspire to excel in software
              engineering and make meaningful contributions to the tech
              industry.
            </p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className=" flex flex-col gap-7 mt-3">
        <div className="flex items-center text-slate-50 gap-1 animated-card">
          <div className="text-lg">Skills</div>
          <div className="h-0.5 w-40 bg-green-500"></div>
        </div>
        <div className="flex gap-4 animated-card">
          <button
            onClick={handleBtnSkills(TechStackArray)}
            className="px-5 py-1.5 rounded bg-white/10 text-slate-50 font-semibold text-sm hover:bg-green-500 hover:scale-110 hover:shadow-off hover:shadow-green-500 transition-all hover:text-slate-900"
          >
            Tech Stack
          </button>
          <button
            onClick={handleBtnSkills(ToolsDataArray)}
            className="px-5 py-1.5 rounded bg-white/10 text-slate-50 font-semibold text-sm hover:bg-green-500 hover:scale-110 hover:shadow-off hover:shadow-green-500 transition-all hover:text-slate-900"
          >
            Tools
          </button>
        </div>
        <div className={`grid md:grid-cols-5 md:gap-8 gap-5 grid-cols-2`}>
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              color={skill.color}
              Classname={"animated-card"}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
export default About;
