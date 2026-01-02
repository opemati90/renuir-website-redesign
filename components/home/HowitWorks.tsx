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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="how-it-works"
      className="bg-gray-50/50 py-24 md:py-32"
    >
      <div ref={ref} className="app-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0, 0.6)}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <Typography variant="h2" className="font-bold text-gray-900 text-3xl md:text-5xl tracking-tight mb-6">
            How it works
          </Typography>

          <Typography variant="h4" className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed">
            Three simple steps to get your belongings back. No hassle, no endless searching.
          </Typography>
        </motion.div>

        {/* Image and Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("right", "tween", 0.2, 0.6)}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 ring-1 ring-gray-100">
              <Image
                src="/images/work.png"
                alt="How Renuir works"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Steps */}
          <div className="order-1 lg:order-2 space-y-10">
            {Loststat.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={fadeIn("left", "tween", 0.3 + index * 0.15, 0.6)}
                className="flex items-start gap-8 group"
              >
                <div className="relative flex-shrink-0 pt-1">
                  <div
                    className="flex items-center justify-center h-16 w-16 rounded-2xl bg-white border border-gray-100 shadow-sm text-primary-600 font-black text-2xl group-hover:scale-110 transition-transform duration-300"
                  >
                    {stat.order}
                  </div>
                </div>

                <div className="space-y-3">
                  <Typography variant="h4" className="font-bold text-gray-900 text-xl md:text-2xl tracking-tight">
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="smallText"
                    className="text-gray-500 leading-relaxed text-base md:text-lg font-medium"
                  >
                    {stat.label}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center"
        >
          <Link href="/#waitlist">
            <Button size="lg" className="px-10 h-16 rounded-2xl font-bold text-lg bg-primary-600 hover:bg-primary-700 text-white shadow-xl shadow-primary-600/20 hover:shadow-2xl hover:shadow-primary-600/30 hover:-translate-y-0.5 transition-all duration-300">
              Get started now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
