import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};
const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, backgroundColor: "#10b981" },
  tap: { scale: 0.95 },
};

const ProjectCarousel = ({
  projects,
  currentIndex,
  onIndexChange,
  onAnimationStateChange,
  onDirectionChange,
  isAnimating,
}) => {
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handlePrev = () => {
    if (isAnimating) return;
    onAnimationStateChange(true);
    onDirectionChange("left");
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    onIndexChange(newIndex);
  };

  const handleNext = () => {
    if (isAnimating) return;
    onAnimationStateChange(true);
    onDirectionChange("right");
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(newIndex);
  };

  useEffect(() => {
    const autoRotate = setTimeout(() => {
      if (!isAnimating && hoveredIndex === null) {
        handleNext();
      }
    }, 5000);
    return () => clearTimeout(autoRotate);
  }, [currentIndex, isAnimating, hoveredIndex]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const elementWidth = scrollContainer.scrollWidth / projects.length;
      scrollContainer.scrollTo({
        left: elementWidth * currentIndex,
        behavior: "smooth",
      });
    }
    const timeoutId = setTimeout(() => onAnimationStateChange(false), 700);
    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const progressPercentage = ((currentIndex + 1) / projects.length) * 100;

  return (
    <motion.div
      className="flex flex-col items-end gap-2 md:w-[60%] w-full relative animated-translateY"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex border rounded-lg overflow-hidden border-green-600 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full h-[400px] gap-3 hover:shadow-lg hover:shadow-green-600/30 transition-all duration-300"
          style={{ scrollBehavior: "smooth" }}
          onMouseEnter={() => setHoveredIndex(currentIndex)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.imageUrl}
              className="flex-shrink-0 snap-center w-full h-full cursor-pointer relative"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover content-start h-full w-full"
                variants={imageVariants}
                initial="initial"
                whileHover="hover"
                animate={hoveredIndex === index ? "hover" : "initial"}
                layoutId={`project-image-${index}`}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 md:hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold text-lg">{project.title}</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-600 px-2 py-1 rounded"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs bg-green-600/50 px-2 py-1 rounded">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {currentIndex + 1}/{projects.length}
        </motion.div>

        <motion.div
          className="absolute -bottom-2 left-0 h-1 bg-green-500"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>

      <div className="flex justify-between w-full mt-4">
        <motion.button
          onClick={handlePrev}
          className="transform bg-green-600 p-2 rounded-full shadow-lg"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <GrFormPrevious size={28} />
        </motion.button>
        <div className="flex items-center gap-1">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full cursor-pointer ${
                index === currentIndex ? "w-6 bg-green-500" : "w-2 bg-gray-500"
              }`}
              onClick={() => {
                if (!isAnimating) {
                  onDirectionChange(index > currentIndex ? "right" : "left");
                  onIndexChange(index);
                }
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
        <motion.button
          onClick={handleNext}
          className="transform bg-green-600 p-2 rounded-full shadow-lg"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <GrFormNext size={28} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCarousel;
