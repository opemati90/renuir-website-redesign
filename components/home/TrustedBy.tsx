"use client";
import { Typography } from "@/components/ui/typography";
import { trustedByStats } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

export const TrustedByStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white border-y border-gray-100 py-12 md:py-16">
      <div ref={ref} className="app-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 lg:divide-x divide-gray-100">
          {trustedByStats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={fadeIn("up", "tween", index * 0.1, 0.4)}
              className="flex flex-col items-center gap-3 px-4"
            >
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-primary-600 transition-colors`}
              >
                <stat.icon className={`h-6 w-6`} />
              </div>

              <div className="text-center">
                <Typography variant="h3" className="font-black text-gray-900 text-2xl tracking-tight">
                  {stat.value}
                </Typography>

                <Typography
                  variant="smallText"
                  className="text-gray-500 text-sm font-bold uppercase tracking-wider mt-1"
                >
                  {stat.label}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
