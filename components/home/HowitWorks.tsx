"use client";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import { Loststat } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const LostSomething = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="how-it-works"
      className="bg-white py-16 md:py-24 overflow-hidden"
    >
      <div ref={ref} className="app-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0, 0.5)}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-24"
        >
          <Typography variant="h2" className="font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
            Simple and efficient
          </Typography>

          <Typography variant="h4" className="text-gray-500 font-normal text-xl md:text-2xl leading-relaxed">
            Recovery in three easy steps.
          </Typography>
        </motion.div>

        {/* Image and Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("right", "tween", 0.2, 0.6)}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50">
              <Image
                src="/images/work.png"
                alt="How Renuir works"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 to-transparent" />
            </div>
            
            {/* Simple decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-50 rounded-2xl -z-10" />
          </motion.div>

          {/* Steps Side */}
          <div className="space-y-10">
            {Loststat.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={fadeIn("left", "tween", 0.3 + index * 0.15, 0.6)}
                className="flex items-start gap-8"
              >
                <div className="relative flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-50 text-primary-600 shadow-sm border border-primary-100/50">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-white border-2 border-primary-600 text-primary-600 text-xs flex items-center justify-center font-black shadow-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="pt-1">
                  <Typography variant="h4" className="font-bold text-gray-900 text-2xl mb-2 tracking-tight">
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="smallText"
                    className="text-gray-500 leading-relaxed text-lg"
                  >
                    {stat.label}
                  </Typography>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={fadeIn("up", "tween", 0.8, 0.5)}
              className="pt-6"
            >
              <Link href="/#waitlist">
                <Button size="lg" className="h-14 px-10 rounded-xl font-bold bg-gray-900 hover:bg-black text-white shadow-lg transition-all duration-300">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
