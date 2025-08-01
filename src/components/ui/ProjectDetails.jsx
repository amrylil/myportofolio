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

  // Ambil konfigurasi tombol berdasarkan tipe proyek, ubah ke huruf kecil agar cocok
  const buttonConfig = project.type
    ? demoButtonConfig[project.type.toLowerCase()]
    : null;

  return (
    <motion.div
      className="w-[40%] hidden md:block space-y-3 text-slate-50 pr-5 pt-3"
      key={project.id} // Sebaiknya gunakan ID unik dari proyek
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Bagian Judul, Deskripsi, dan Teknologi tetap sama... */}
      <div className="h-14 mb-2">
        <motion.h1
          className="font-bold text-3xl text-green-400"
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

      <div className="h-[70px] overflow-hidden mb-3">
        <motion.p
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

      <div className="h-40">
        <motion.h4
          className="text-green-400 font-semibold text-lg mt-2"
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
        <motion.div className="grid grid-cols-3 gap-2 mt-3">
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
          className="flex gap-2 items-end"
          initial={isFirstRender ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="flex rounded-md text-slate-900 justify-center items-center bg-slate-50 cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <h3 className="mx-3 font-bold">Github</h3>
                <FaGithubSquare className="text-4xl" />
              </motion.div>
            </a>
          )}

          {project.demoUrl && buttonConfig && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="flex rounded-md text-slate-900 justify-center items-center bg-slate-50 p-0.5 group cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <h3 className="mx-3 font-bold">{buttonConfig.text}</h3>
                <motion.div
                  className="bg-slate-900 rounded-md p-1.5"
                  transition={{ duration: 0.3 }}
                >
                  <GrFormNextLink className="group-hover:rotate-0 rotate-45 transition-all duration-300 text-xl text-slate-50" />
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
