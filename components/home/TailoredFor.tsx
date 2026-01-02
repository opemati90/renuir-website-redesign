"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { businessFeatures, consumerFeatures } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("business");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = audience === "business" ? businessFeatures : consumerFeatures;

  return (
    <section className="app-container py-20 md:py-28" id="features">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="text-center max-w-3xl mx-auto"
      >
        <Typography variant="h2" className="font-bold text-gray-900 text-3xl md:text-4xl">
          Built for how you actually use it
        </Typography>

        <Typography
          variant="h4"
          className="text-gray-600 font-normal mt-4 text-lg leading-relaxed"
        >
          Different needs, same goal: getting stuff back to its owner, fast.
        </Typography>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex mt-8 rounded-lg border border-gray-200 bg-gray-50 p-1"
        >
          <Button
            size="sm"
            variant={audience === "business" ? "default" : "ghost"}
            className="rounded-md px-5"
            onClick={() => setAudience("business")}
          >
            For Business
          </Button>
          <Button
            size="sm"
            variant={audience === "consumer" ? "default" : "ghost"}
            className="rounded-md px-5"
            onClick={() => setAudience("consumer")}
          >
            For Consumers
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.4)}
            className="p-8 border border-gray-200 rounded-2xl bg-white hover:border-primary-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary-100/50 ring-1 ring-primary-100">
              <feature.icon className="h-7 w-7 text-primary-600" />
            </div>

            <Typography variant="h5" className="font-bold mt-6 mb-3 text-gray-900 text-lg">
              {feature.title}
            </Typography>

            <Typography
              variant="smallText"
              className="text-gray-600 text-base leading-relaxed"
            >
              {feature.description}
            </Typography>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
