"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { features } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("business");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="app-container py-20 md:py-32" id="features">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.6)}
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
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex mt-10 rounded-xl border border-gray-200 bg-gray-50 p-1.5 shadow-sm"
        >
          <Button
            size="sm"
            variant={audience === "business" ? "default" : "ghost"}
            className="rounded-lg px-6"
            onClick={() => setAudience("business")}
          >
            For Business
          </Button>
          <Button
            size="sm"
            variant={audience === "consumer" ? "default" : "ghost"}
            className="rounded-lg px-6"
            onClick={() => setAudience("consumer")}
          >
            For Consumers
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("up", "tween", 0.3 + index * 0.1, 0.5)}
            className="group p-6 border border-gray-200 rounded-xl bg-white hover:border-primary-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors">
              <feature.icon className="h-7 w-7 text-primary-600" />
            </div>

            <Typography variant="h5" className="font-semibold mt-5 mb-3 text-gray-900">
              {feature.title}
            </Typography>

            <Typography
              variant="smallText"
              className="text-gray-600 text-sm leading-relaxed"
            >
              {feature.description}
            </Typography>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
