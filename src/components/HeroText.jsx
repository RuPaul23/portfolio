import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
    "Remote \nSensing",
    "Game \nDeveloper",
    "CAD \nDesign",
    "Robotics",
    "AI/ML",
    "AR/VR",
    "UI/UX \nDesign",
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 md:mt-40 flex flex-col items-center justify-center text-center whitespace-pre-line px-4">
      <motion.h1
        className="text-3xl md:text-4xl font-medium"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        Hi, I'm Rohit Paul
      </motion.h1>

      <motion.p
        className="text-4xl md:text-5xl font-medium text-neutral-300 mt-2 mb-2 md:mt-3 md:mb-3"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
      >
        Crafting the Future of
      </motion.p>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
        className="mb-6 md:mb-8"
      >
        <FlipWords
          words={words}
          className="font-black text-white text-5xl whitespace-pre-line flex justify-center items-center text-center w-full break-words max-w-full"
        />
      </motion.div>

      <motion.p
        className="text-3xl md:text-4xl font-medium text-neutral-300"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.8 }}
      >
      by Engineering Experiences
      </motion.p>
    </div>
  );
};

export default HeroText;
