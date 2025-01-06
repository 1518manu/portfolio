import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { FiFramer } from "react-icons/fi";
import { PROJECTS } from "../constants/index"; // Import projects array

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Tech = () => {
  return (
    <div
      name="tech"
      className="border-b border-cyan-400 pb-20 lg:mb-60 w-full min-h-screen  text-black"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 py-20 mb-2 text-center bg-gradient-to-r from-violet-900 via-pink-500 to-violet-900 bg-clip-text text-6xl tracking-tighther text-transparent"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-screen-lg mx-auto px-4">
        {[
          { icon: <SiCss3 className="text-blue-500 text-2xl" />, duration: 2 },
          { icon: <SiHtml5 className="text-orange-500 text-2xl" />, duration: 1 },
          { icon: <SiJavascript className="text-yellow-400 text-2xl" />, duration: 2 },
          { icon: <RiReactjsLine className="text-cyan-300 text-2xl" />, duration: 1 },
          { icon: <SiTailwindcss className="text-teal-500 text-2xl" />, duration: 2 },
          { icon: <FiFramer className="text-framer-motion text-2xl" />, duration: 1 },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-600 p-5"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 py-20 mb-2 text-center bg-gradient-to-r from-violet-900 via-pink-500 to-violet-900 bg-clip-text text-6xl tracking-tighther text-transparent"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-xl border border-neutral-600 p-6 bg-gray-900 hover:bg-cyan-900 transition-colors"
          >
            <h3 className="text-xl font-semibold text-cyan-300">{project.name}</h3>
            <p className="mt-2 text-sm text-gray-300">{project.description}</p>
            <button
              onClick={() => window.open(project.link, "_blank")}
              className="mt-4 mx-auto block py-2 px-4 text-sm font-medium text-black border-black bg-gradient-to-r from-pink-900  to-purple-900 hover:from-purple-900 hover:to-pink-900 rounded-lg shadow-lg transition-all duration-300"
            >
              Visit now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
