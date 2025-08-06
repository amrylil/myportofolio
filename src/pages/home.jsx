import { motion } from "framer-motion";
import {
  FaDownload,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ulil-amry-363a841b3/",
      label: "LinkedIn",
    },
    { icon: FaGithub, href: "https://github.com/AmryLil", label: "GitHub" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/amrylil_/",
      label: "Instagram",
    },
    { icon: FaGoogle, href: "mailto:ulilamry432@gmail.com", label: "Email" },
  ];

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
          {/* Location */}
          <div className="items-center gap-2 text-gray-400 hidden md:inline-flex">
            <FaMapMarkerAlt className="text-green-500" />
            <span>Makassar, Indonesia</span>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className=" items-center gap-4 justify-center lg:justify-start hidden md:flex">
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 max-w-20"></div>
              <span className="text-gray-300 font-medium  tracking-wider text-sm">
                CONNECT
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 max-w-20"></div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="https://export-download.canva.com/DtThY/DAGHjlDtThY/90/0-1285082337035381457.pdf"
              className="group inline-flex items-center gap-3 px-6 py-2  bg-green-500 text-slate-950 font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <FaDownload className="w-4 h-4 group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>

            <button className="group items-center gap-3 px-6 py-2 border-2 border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 hover:border-green-400 transition-all duration-300 backdrop-blur-sm hidden md:inline-flex">
              <span>View Projects</span>
              <div className="w-4 h-4 rounded-full border-2 border-current group-hover:animate-spin"></div>
            </button>
          </div>
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
