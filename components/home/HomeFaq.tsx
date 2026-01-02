"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "../ui/typography";
import { faqs } from "../utils/data/homeItems";
import { HelpCircle, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import Link from "next/link";

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-white py-24 md:py-32" id="faq">
      <div ref={ref} className="app-container max-w-4xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0, 0.5)}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <HelpCircle className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-bold text-primary-700 tracking-tight">FAQ</span>
          </div>

          <Typography
            variant="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tightest mb-6"
          >
            Common questions
          </Typography>

          <Typography variant="h4" className="text-gray-500 font-medium text-lg md:text-xl">
            Everything you need to know about how Renuir helps you find what you lost.
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0.2, 0.5)}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-100 rounded-2xl px-6 bg-white overflow-hidden shadow-xs hover:shadow-sm transition-shadow duration-300 data-[state=open]:border-primary-100 data-[state=open]:bg-primary-50/20"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <span className="text-lg md:text-xl font-bold text-gray-900 pr-4 leading-snug">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <Typography
                    variant="smallText"
                    className="text-gray-600 text-base md:text-lg leading-relaxed font-medium"
                  >
                    {faq.answer}
                  </Typography>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 font-medium mb-6">Still have questions?</p>
          <Link href="mailto:info@renuir.com">
            <button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-black transition-all shadow-xl shadow-gray-200">
              <Mail className="h-5 w-5" />
              Contact Support
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
