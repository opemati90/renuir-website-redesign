"use client";
import { Typography } from "../ui/typography";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import Image from "next/image";

const HomeQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-gray-50 py-24 md:py-32" id="about">
      <div ref={ref} className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("right", "tween", 0.2, 0.6)}
            className="space-y-10"
          >
            <div className="space-y-6">
              <Typography variant="h2" className="font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                Why we&apos;re building this
              </Typography>
              
              <div className="w-20 h-1.5 bg-primary-600 rounded-full" />
            </div>

            <div className="space-y-8">
              <Typography variant="h4" className="font-normal text-gray-600 leading-relaxed text-xl md:text-2xl">
                We&apos;ve all been there. That sinking feeling when you realize your bag is gone. Then comes the worst part: repeating the same description everywhere, hoping someone picked it up.
              </Typography>

              <Typography variant="h4" className="font-normal text-gray-600 leading-relaxed text-xl md:text-2xl">
                We&apos;re building Renuir because that process is fundamentally broken. One report should be enough. We want to make it easy to get your stuff back, and just as easy for people to return what they find.
              </Typography>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("left", "tween", 0.3, 0.6)}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-gray-200/50">
              <Image
                src="/images/Building.png"
                alt="Our mission at Renuir"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
            
            {/* Subtle highlight */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100/50 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuote;
