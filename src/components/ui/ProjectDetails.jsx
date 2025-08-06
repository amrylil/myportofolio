import React from "react";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import Cardtech from "./TechCard"; // Pastikan nama file ini sesuai

// --- Konfigurasi untuk Tombol Demo ---
// Kita definisikan di luar agar tidak dibuat ulang setiap render
const demoButtonConfig = {
  frontend: { text: "Demo" },
  fullstack: { text: "Demo" },
  backend: { text: "Docs" }, // Untuk Backend, teksnya adalah "Docs"
  mobile: { text: "Download" }, // Untuk Mobile, teksnya adalah "Download"
  "ui/ux": { text: "View Design" }, // Untuk UI/UX, kita gunakan "View Design"
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, backgroundColor: "#10b981" },
  tap: { scale: 0.95 },
};

const ProjectDetails = ({ project, direction, isFirstRender }) => {
  if (!project) return null;

  const buttonConfig = project.type
    ? demoButtonConfig[project.type.toLowerCase()]
    : null;

  return (
    <motion.div
      className="w-full lg:w-[40%] space-y-3 text-slate-50 lg:pr-5 pt-3 order-2 lg:order-1"
      key={project.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-2 hidden md:block">
        <motion.h1
          className="font-bold text-2xl md:text-3xl text-green-400 leading-tight"
          initial={
            isFirstRender
              ? { opacity: 1 }
              : { opacity: 0, x: direction === "left" ? 50 : -50 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {project.title}
        </motion.h1>
      </div>

      <div className="mb-3 h-24 md:h-auto">
        <motion.p
          className="text-sm md:text-base leading-relaxed"
          initial={
            isFirstRender
              ? { opacity: 1 }
              : { opacity: 0, x: direction === "left" ? 50 : -50 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {project.description}
        </motion.p>
      </div>

      <div className="mb-4 hidden md:block">
        <motion.h4
          className="text-green-400 font-semibold text-base md:text-lg mt-2 mb-3"
          initial={
            isFirstRender
              ? { opacity: 1 }
              : { opacity: 0, x: direction === "left" ? 50 : -50 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Technologies.
        </motion.h4>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {project.techStack.map((tech, index) => (
            <motion.div
              key={`${project.id}-${tech.name}`}
              initial={
                isFirstRender
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              className="transform origin-center"
            >
              <Cardtech title={tech.name} icon={tech.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {(project.url || project.demoUrl) && (
        <motion.div
          className="flex flex-row sm:flex-row gap-2 items-stretch"
          initial={isFirstRender ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.div
                className="flex h-full items-center justify-center gap-2 rounded-md text-slate-900 bg-slate-50 cursor-pointer px-4 py-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <h3 className="font-bold text-sm md:text-base">Github</h3>
                <FaGithubSquare className="text-2xl md:text-3xl" />
              </motion.div>
            </a>
          )}

          {project.demoUrl && buttonConfig && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.div
                className="flex h-full items-center justify-center gap-2 rounded-md text-slate-900 bg-slate-50 cursor-pointer px-4 py-2 group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <h3 className="font-bold text-sm md:text-base">
                  {buttonConfig.text}
                </h3>
                <motion.div
                  className="bg-slate-900 rounded-md p-1 flex items-center justify-center"
                  transition={{ duration: 0.3 }}
                >
                  <GrFormNextLink className="group-hover:rotate-0 rotate-45 transition-all duration-300 text-lg md:text-xl text-slate-50" />
                </motion.div>
              </motion.div>
            </a>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};
export default ProjectDetails;
