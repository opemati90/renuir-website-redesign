"use client";

import { Typography } from "../ui/typography";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

const HomeQuote = () => {
  const quoteText =
    "We've all been there. That sinking feeling when you realize your bag is gone. Then comes the worst part: calling every place you visited, repeating the same description, hoping someone picked it up.";
  const quoteText2 =
    "We're building Renuir because that process is broken. One report should be enough. We want to make it easy to get your stuff back, and easy for good people to return what they find.";
  const words = quoteText.split(" ");
  const words2 = quoteText2.split(" ");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 10,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-primary-10 " id="about">
      <div className="app-container py-24">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" className="font-bold">
              Why we&apos;re building this
            </Typography>
          </motion.div>

          <div ref={ref} className=" font-normal max-w-3xl mt-6 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-4"
            >
              <Typography variant="h3" className="inline font-medium ">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-1.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </Typography>

              <Typography variant="h3" className="inline font-medium ">
                {words2.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-1.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuote;
