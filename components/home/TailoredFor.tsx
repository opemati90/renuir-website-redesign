"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { businessFeaturesData, consumerFeaturesData } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import { clsx } from "clsx";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("business");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = audience === "business" ? businessFeaturesData : consumerFeaturesData;

  return (
    <section className="app-container py-10 md:py-12" id="features">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="text-center max-w-3xl mx-auto"
      >
        <Typography variant="h2" className="font-bold text-gray-900 text-4xl md:text-5xl tracking-tight">
          Solutions for everyone
        </Typography>

        <Typography
          variant="h4"
          className="text-gray-500 font-normal mt-6 text-xl leading-relaxed"
        >
          Professional lost and found management for businesses, and a simplified recovery experience for people.
        </Typography>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200">
            <button
              className={clsx(
                "px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                audience === "business" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              )}
              onClick={() => setAudience("business")}
            >
              For Business
            </button>
            <button
              className={clsx(
                "px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                audience === "consumer" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              )}
              onClick={() => setAudience("consumer")}
            >
              For Consumers
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={`${audience}-${index}`}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("up", "tween", 0.1 + index * 0.1, 0.4)}
            className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
              <feature.icon className="h-7 w-7" />
            </div>

            <Typography variant="h4" className="font-bold mt-6 mb-3 text-gray-900 text-xl">
              {feature.title}
            </Typography>

            <Typography
              variant="smallText"
              className="text-gray-500 text-base leading-relaxed"
            >
              {feature.description}
            </Typography>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
