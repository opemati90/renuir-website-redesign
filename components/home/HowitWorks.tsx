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
      className="bg-white py-24 md:py-32"
    >
      <div ref={ref} className="app-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0, 0.6)}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-24"
        >
          <Typography variant="h2" className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl mb-6">
            How it works
          </Typography>

          <Typography variant="h4" className="text-gray-600 font-normal text-lg md:text-xl">
            Three steps to get your stuff back.
          </Typography>
        </motion.div>

        {/* Image and Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("right", "tween", 0.2, 0.6)}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200/50">
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
          <div className="order-1 lg:order-2 space-y-8">
            {Loststat.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={fadeIn("left", "tween", 0.3 + index * 0.15, 0.6)}
                className="flex items-start gap-6 p-6 rounded-2xl hover:bg-gray-50/50 transition-colors duration-300"
              >
                <div className="relative flex-shrink-0">
                  <div
                    className={`flex items-center justify-center h-20 w-20 rounded-2xl border-2 border-primary-100 bg-primary-50 shadow-md`}
                  >
                    <stat.icon className={`h-10 w-10 text-primary-600`} />
                  </div>
                  <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary-600 text-white text-sm flex items-center justify-center font-bold shadow-lg ring-2 ring-white">
                    {stat.order}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <Typography variant="h4" className="font-bold text-gray-900 text-xl md:text-2xl">
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="smallText"
                    className="text-gray-600 leading-relaxed text-base"
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
            <Button size="lg" className="px-10 h-14 rounded-xl font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-xl shadow-primary-600/25 hover:shadow-2xl hover:shadow-primary-600/30 transition-all duration-300">
              Get early access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
