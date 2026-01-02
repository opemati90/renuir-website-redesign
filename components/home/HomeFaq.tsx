"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { faqs } from "../utils/data/homeItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";
import { HelpCircle, ArrowRight } from "lucide-react";

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="faq" className="bg-white py-10 md:py-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="app-container max-w-4xl"
      >
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 mb-8 border border-primary-100">
            <HelpCircle className="h-7 w-7 text-primary-600" />
          </div>
          
          <Typography variant="h2" className="font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
            Frequently Asked Questions
          </Typography>

          <Typography
            variant="h4"
            className="text-gray-500 font-normal text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about the Renuir platform. Can&apos;t find what you&apos;re looking for?{" "}
            <a href="mailto:info@renuir.com" className="text-primary-600 hover:text-primary-700 font-bold transition-colors">
              Contact our team
            </a>
            .
          </Typography>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={fadeIn("up", "tween", 0.2 + index * 0.05, 0.4)}
            >
              <AccordionItem
                value={`item-${index}`}
                className="rounded-[1.5rem] border border-gray-100 bg-gray-50/30 px-8 py-2 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300 data-[state=open]:bg-white data-[state=open]:border-primary-200 data-[state=open]:shadow-lg overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-gray-900 hover:no-underline py-6 data-[state=open]:text-primary-600">
                  <span className="flex-1 pr-4">{faq.question}</span>
                </AccordionTrigger>

                <AccordionContent className="text-gray-600 text-base md:text-lg leading-relaxed pb-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeIn("up", "tween", 0.6, 0.5)}
          className="mt-20 p-8 md:p-12 bg-gray-900 rounded-[2.5rem] text-white shadow-2xl overflow-hidden relative"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-white">
            <div className="flex-1 text-center md:text-left space-y-4">
              <Typography variant="h3" className="text-3xl md:text-4xl font-black tracking-tight leading-tight !text-white">
                More than just an automated platform.
              </Typography>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                Our dedicated support team is here to ensure every lost item has the best chance of finding its way back home.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4 min-w-fit">
              <a
                href="mailto:info@renuir.com"
                className="inline-flex items-center gap-2.5 px-10 py-5 rounded-2xl bg-white text-gray-900 font-black text-xl hover:bg-gray-100 transition-all active:scale-[0.98] shadow-lg"
              >
                Get in touch
                <ArrowRight className="h-6 w-6" />
              </a>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
                Response within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
