import { motion } from "framer-motion";
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="container h-screen md:px-28 pt-8 w-full">
      <div className="flex md:flex-row flex-col-reverse h-screen items-center justify-center md:justify-between gap-y-8">
        <div className="md:w-[55%] w-full flex flex-col gap-y-5 animate-fade-right justify-center md:justify-start items-center md:items-start ">
          <div>
            <div className="md:text-5xl text-2xl font-bold text-gray-50">
              Hi, It's <span className="text-green-500 ">Ulil Amry AQ</span>
            </div>
            <div className="md:text-2xl text-lg font-bold text-green-500 mt-2">
              <span className="md:text-3xl text-xl text-gray-50">
                I'm a {` `}
              </span>
              <TypeAnimation
                sequence={["Student", 1500, "Web Developer", 1500]}
                wrapper="span"
                speed={20}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="text-sm text-gray-50 text-center px-4 md:px-0 md:text-start">
            Keep learning and growing every day to build a brighter future
            filled with endless opportunities and success.
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <h1 className="font-semibold text-white tracking-wider text-sm">
                Socmed
              </h1>
              <div className="h-[2px] bg-green-500 w-[53%]"></div>
            </div>
            <div className=" flex gap-4 text-gray-50">
              <a href="https://www.linkedin.com/in/ulil-amry-363a841b3/">
                <FaLinkedin size={20} className="socmed" />
              </a>
              <a href="https://github.com/AmryLil">
                <FaGithub size={20} className="socmed" />
              </a>
              <a href="https://www.instagram.com/amrylil_/">
                <FaInstagram size={20} className="socmed" />
              </a>
              <a href="mailto:ulilamry432@gmail.com">
                <FaGoogle size={20} className="socmed" />
              </a>
            </div>
          </div>
          <a
            href="https://export-download.canva.com/DtThY/DAGHjlDtThY/90/0-1285082337035381457.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240608%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240608T010629Z&X-Amz-Expires=72629&X-Amz-Signature=100dee11ff0710e491bad4c55bc7a37bdc1b57627b8a9ca6d5d2989f5fc49aca&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Ulil%2520Amry%2520CV.pdf&response-expires=Sat%2C%2008%20Jun%202024%2021%3A16%3A58%20GMT"
            className="transition-all w-40 px-4 py-1 rounded-lg border border-green-700 font-bold tracking-wide text-gray-50 hover:bg-green-600 hover:shadow-off hover:shadow-green-700 text-center"
          >
            Download CV
          </a>
        </div>
        <div className="relative md:p-8 p-6 ">
          <div className=" shadow-tipis  md:h-[400px] md:w-[400px] h-[230px] w-[230px] overflow-hidden   transition-all animate-fade-up animate-once animate-duration-[1000ms] rounded-lg mix-blend-lighten">
            <img
              src="images/anuku2.png"
              alt="photo"
              className="overflow-hidden z-40 filter  brightness-90 shadow-inner 0 "
            />
          </div>

          <motion.svg
            className="transition-all animate-fade-up animate-once animate-duration-[1000ms] md:w-[390px] w-[250px] absolute md:top-14 md:right-9 top-7 right-3"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cy="253"
              cx="253"
              r="250"
              stroke="#15803d"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.circle>
          </motion.svg>
        </div>
      </div>
    </div>
  );
};
export default Home;
