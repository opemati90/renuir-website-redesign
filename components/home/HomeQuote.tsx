"use client";
import { Typography } from "../ui/typography";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

const HomeQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-gray-50 py-20 md:py-28" id="about">
      <div ref={ref} className="app-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0, 0.5)}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center"
        >
          <Typography variant="h2" className="font-bold text-gray-900 text-3xl md:text-4xl mb-8">
            Why we&apos;re building this
          </Typography>

          <div className="space-y-6">
            <Typography variant="h4" className="font-normal text-gray-700 leading-relaxed text-lg">
              We&apos;ve all been there. That sinking feeling when you realize your bag is gone. Then comes the worst part: calling every place you visited, repeating the same description, hoping someone picked it up.
            </Typography>

            <Typography variant="h4" className="font-normal text-gray-700 leading-relaxed text-lg">
              We&apos;re building Renuir because that process is broken. One report should be enough. We want to make it easy to get your stuff back, and easy for good people to return what they find.
            </Typography>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeQuote;
