import React from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import rajImg from "../assets/self.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>About Me - Risiwant</title>
        <meta
          name="description"
          content="Rishiwant | A Second-Year CS Engineering Student at Newton School Of Technology."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="About Me - Rishiwant" />
        <meta
          property="og:description"
          content="Dive into the profile of Rishiwant, A Second-Year CS Engineering Student at Newton School Of Technology."
        />
        {/* khud ka photo */}
        <meta property="og:image" content={rajImg} />
        <meta property="og:url" content="https://rishi-portfolio-flame.vercel.app/about" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - Rishiwant" />
        <meta
          name="twitter:description"
          content="Dive into the profile of Rishiwant, A Second-Year CS Engineering Student at Newton School Of Technology."
        />
        {/* khud ka photo */}
        <meta name="twitter:image" content={rajImg} />
      </Helmet>
      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-5 lg:p-10">
        <h1 className="text-center text-white md:text-5xl sm:text-3xl text-xl font-bold mb-5">
          About Me:-
        </h1>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="about-me-text lg:px-10 p-2 py-10 md:text-3xl sm:text-xl text-base font-mono text-white/70">
            <p className=" ">
              I am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
                Rishiwant
              </span>
              .  A Second-Year CS Engineering Student at Newton School Of Technology, but I'm into
              multiple things, chasing interests. <br /> I find Web Dev fun.
              <br />
              Also into competitive programming.
              .<br /> Also into Open Source <br />
            </p>
          </div>

          <div className="md:w-[750px] sm:w-[600px] w-full m-auto">
          {/* TODO: Replace rajImg with your actual profile photo */}
            <img
              src={rajImg}
              className=" w-full ease-in aspect-square object-cover rounded-[50%]"
              alt="Rishiwant"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
