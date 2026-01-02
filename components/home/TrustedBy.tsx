"use client";
import { Typography } from "@/components/ui/typography";
import { trustedByStats } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

export const TrustedByStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-white border-b border-gray-100 py-16 md:py-24">
      <div ref={ref} className="app-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {trustedByStats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={fadeIn("up", "tween", index * 0.1, 0.5)}
              className="flex flex-col items-center gap-4 py-6"
            >
              <div
                className={`flex items-center justify-center h-14 w-14 rounded-xl ${stat.bg} shadow-sm`}
              >
                <stat.icon className={`h-7 w-7 ${stat.iconColor}`} />
              </div>

              <Typography variant="h3" className="font-bold text-gray-900">
                {stat.value}
              </Typography>

              <Typography
                variant="h4"
                className="text-gray-600 text-sm text-center font-medium"
              >
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
