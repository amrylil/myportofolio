import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectDetails from "../components/ui/ProjectDetails";
import ProjectCarousel from "../components/ui/ProjectCarousel";
import { projectsData } from "../data/projectData";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setTimeout(() => setIsFirstRender(false), 100);
    }
  }, [isFirstRender]);

  return (
    <motion.div
      className="container mx-auto p-4 min-h-screen px-4 sm:px-6 lg:px-28 mt-6 sm:mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center gap-1 flex-row mb-6 sm:mb-10">
        <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold text-white leading-tight">
          Post Project Experience
        </h1>
        <motion.div
          className="h-2 bg-green-500 w-[8px] hidden sm:block self-end -translate-y-1"
          initial={{ width: 0 }}
          animate={{ width: "8px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        ></motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 min-h-[600px] lg:h-full">
        <ProjectDetails
          project={projectsData[currentIndex]}
          direction={direction}
          isFirstRender={isFirstRender}
        />
        <ProjectCarousel
          projects={projectsData}
          currentIndex={currentIndex}
          onIndexChange={setCurrentIndex}
          onAnimationStateChange={setIsAnimating}
          onDirectionChange={setDirection}
          isAnimating={isAnimating}
        />
      </div>
    </motion.div>
  );
};

export default Portfolio;
