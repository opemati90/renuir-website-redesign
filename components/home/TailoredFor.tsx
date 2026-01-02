"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { businessFeatures, consumerFeatures } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("consumer");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = audience === "business" ? businessFeatures : consumerFeatures;

  return (
    <section className="app-container py-24 md:py-32" id="features">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="text-center max-w-3xl mx-auto"
      >
        <Typography variant="h2" className="font-bold text-gray-900 text-3xl md:text-5xl tracking-tight">
          Built for how you actually use it
        </Typography>

        <Typography
          variant="h4"
          className="text-gray-500 font-medium mt-6 text-lg md:text-xl leading-relaxed"
        >
          Different needs, same goal: getting stuff back to its owner, fast.
        </Typography>

        {/* Toggle */}
        <div className="inline-flex mt-10 rounded-xl bg-gray-100 p-1.5 ring-1 ring-gray-200">
          <Button
            size="lg"
            variant={audience === "consumer" ? "default" : "ghost"}
            className={audience === "consumer" ? "rounded-lg font-bold bg-white text-gray-900 shadow-sm hover:bg-white" : "rounded-lg font-bold text-gray-500 hover:text-gray-900"}
            onClick={() => setAudience("consumer")}
          >
            For Individuals
          </Button>
          <Button
            size="lg"
            variant={audience === "business" ? "default" : "ghost"}
            className={audience === "business" ? "rounded-lg font-bold bg-white text-gray-900 shadow-sm hover:bg-white" : "rounded-lg font-bold text-gray-500 hover:text-gray-900"}
            onClick={() => setAudience("business")}
          >
            For Business
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.4)}
            className="p-8 border border-gray-100 rounded-2xl bg-white shadow-xs hover:shadow-md hover:border-gray-200 transition-all duration-300"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary-50 text-primary-600 mb-6">
              <feature.icon className="h-7 w-7" />
            </div>

            <Typography variant="h4" className="font-bold mb-3 text-gray-900 text-xl">
              {feature.title}
            </Typography>

            <Typography
              variant="smallText"
              className="text-gray-500 text-base leading-relaxed font-medium"
            >
              {feature.description}
            </Typography>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
