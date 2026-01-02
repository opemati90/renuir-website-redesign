"use client";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import { Loststat } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import { ArrowRight } from "lucide-react";

export const LostSomething = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32"
    >
      <div ref={ref} className="app-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0, 0.6)}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <Typography variant="h2" className="font-bold text-gray-900 text-3xl md:text-4xl">
            How it works
          </Typography>

          <Typography variant="h4" className="mt-4 text-gray-600 font-normal text-lg">
            Three steps to get your stuff back.
          </Typography>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {Loststat.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={fadeIn("up", "tween", 0.2 + index * 0.15, 0.6)}
              className="flex flex-col items-center text-center gap-6"
            >
              <div className="relative">
                <div
                  className={`flex items-center justify-center h-28 w-28 rounded-2xl border-2 border-gray-200 ${stat.bg} shadow-sm`}
                >
                  <stat.icon className={`h-10 w-10 ${stat.iconColor}`} />
                </div>

                <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary-600 text-white text-sm flex items-center justify-center font-bold shadow-lg">
                  {stat.order}
                </span>
              </div>

              <div className="space-y-2">
                <Typography variant="h4" className="font-bold text-gray-900 text-xl">
                  {stat.value}
                </Typography>

                <Typography
                  variant="smallText"
                  className="text-gray-600 max-w-xs leading-relaxed"
                >
                  {stat.label}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link href="#waitlist">
            <Button size="lg" className="px-8 h-12 rounded-xl font-semibold bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/20">
              Get early access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
