"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { businessFeatures, consumerFeatures, trustedByStats } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("business");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = audience === "business" ? businessFeatures : consumerFeatures;

  return (
    <section className="bg-white py-24 md:py-32" id="features">
      <div ref={ref} className="app-container">
        {/* Top Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-100 pb-20 mb-20">
          {trustedByStats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={fadeIn("up", "tween", index * 0.1, 0.5)}
              className="flex flex-col items-center text-center gap-3"
            >
              <stat.icon className="h-6 w-6 text-gray-400 stroke-[1.5]" />
              <div className="space-y-1">
                <p className="font-bold text-gray-900 text-lg">{stat.value}</p>
                <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Heading Content */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="text-center max-w-4xl mx-auto"
        >
          <Typography variant="h2" className="font-black text-gray-900 text-4xl md:text-5xl tracking-tightest">
            Solutions for everyone
          </Typography>

          <Typography
            variant="h4"
            className="text-gray-500 font-medium mt-6 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Professional lost and found management for businesses, and a simplified recovery experience for people.
          </Typography>

          {/* Toggle */}
          <div className="inline-flex mt-12 rounded-xl bg-gray-100 p-1.5 ring-1 ring-gray-200/50">
            <Button
              size="lg"
              variant="ghost"
              className={`rounded-lg font-bold px-8 transition-all duration-300 ${audience === "business" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
              onClick={() => setAudience("business")}
            >
              For Business
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className={`rounded-lg font-bold px-8 transition-all duration-300 ${audience === "consumer" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
              onClick={() => setAudience("consumer")}
            >
              For Consumers
            </Button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={fadeIn("up", "tween", 0.3 + index * 0.1, 0.4)}
              className="p-8 border border-gray-100 rounded-3xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-xl hover:border-gray-200 transition-all duration-500 group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary-50 text-primary-600 mb-8 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 stroke-[2]" />
              </div>

              <Typography variant="h4" className="font-bold mb-4 text-gray-900 text-xl tracking-tight">
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
      </div>
    </section>
  );
};
