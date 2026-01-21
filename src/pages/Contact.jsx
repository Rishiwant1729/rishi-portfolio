import { motion } from "framer-motion";
import React, { useState } from "react";
import { socialIcons } from "../constants";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://getform.io/f/aejezolb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        // Auto-clear success message after 5 seconds
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Contact Me - Rishiwant</title>
        <meta
          name="description"
          content="Get in touch with Rishiwant. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to rishiwant.maurya2024@nst.rishihood.edu.in"
        />
        <meta property="og:title" content="Contact Me - Rishiwant" />
        <meta
          property="og:description"
          content="Get in touch with Rishiwant. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to rishiwant.maurya2024@nst.rishihood.edu.in"
        />
        <meta property="og:image" content="http://localhost:5173/banner.png" />
        <meta property="og:url" content="http://localhost:5173/contact" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Me - Rishiwant" />
        <meta
          name="twitter:description"
          content="Get in touch with Rishiwant. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to rishiwant.maurya2024@nst.rishihood.edu.in"
        />
        <meta name="twitter:image" content="http://localhost:5173/banner.png" />
      </Helmet>

      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-10">
        <h1 className="text-center text-white md:text-5xl text-3xl font-bold font-sans-serif md:mb-5 mb-10">
          Contact Me:
        </h1>

        <div className="flex flex-col-reverse md:flex-row justify-around mt-10 w-[100%]">
          <div className="md:w-[50%] w-[100%]  my-16">
            <div className="text-white mb-16">
              <h1 className="text-bold text-2xl font-semibold">Need a chat?</h1>
              {/* TODO: Update Calendly/cal.com link with your actual booking URL */}
              <a href="https://cal.com/rishiwant-krek/15min" target="_blank">
                <p className="my-5 text-center underline underline-offset-8 font-sans-serif text-xl w-fit mx-auto p-1 tracking-widest hover:bg-[#ef4444]/10 transition rounded-sm	">
                  Schedule a meeting
                </p>
              </a>
            </div>
            <h2 className="text-white font-bold text-2xl mb-3">
              Send A Message
            </h2>
            {/* TODO: Verify GetForm endpoint is active and receiving submissions */}
            <form
              onSubmit={handleSubmit}
            >
              <div className="flex flex-row  justify-between">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  name="Name"
                  className="mt-1 block w-[45%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  name="Email"
                  className="mt-1 block w-[45%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
                />
              </div>
              <div className="flex flex-col py-3 gap-3">
                <input
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  name="Message"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#ef4444] hover:bg-red-800 ease-in-out duration-150 text-white  w-fit self-center p-2 px-4 rounded-lg disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Submit"}
                </button>
                {formStatus === "success" && (
                  <div className="text-center text-green-400 font-semibold">
                    ✓ Thank you! Message sent successfully.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="text-center text-red-400 font-semibold">
                    ✗ Failed to send. Please try again or email directly.
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-evenly md:my-10 my-5">
              {socialIcons.map((item) => (
                <a href={item.link} key={item.name} target="_blank">
                  <div className="flex flex-row items-center justify-between w-fit">
                    <div className=" grid place-items-center rounded-[50%] w-10 h-10 cursor-pointer hover:bg-[#ef4444] ">
                      <i className={`${item.class} text-white`}></i>
                    </div>
                    <h2 className="text-white/50 text-lg ">{item.text}</h2>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-white">
              <h1 className="text-bold text-2xl font-semibold">
                Or you can write a mail directly to
              </h1>
              {/* TODO: Update email address - currently has mismatch between href and display text */}
              <a href="mailto:rishiwant.maurya2024@nst.rishihood.edu.in">
                <p className="my-5 text-center underline underline-offset-8 font-sans-serif text-xl tracking-widest	">
                  rishiwant.maurya2024@nst.rishihood.edu.in
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
