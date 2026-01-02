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
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="faq" className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.6)}
        className="app-container max-w-4xl"
      >
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-6"
          >
            <HelpCircle className="h-8 w-8 text-primary-600" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Typography variant="h2" className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl mb-4">
              Frequently Asked Questions
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typography
              variant="h4"
              className="text-gray-600 font-normal text-lg md:text-xl max-w-2xl mx-auto"
            >
              Everything you need to know about Renuir. Can't find what you're looking for?{" "}
              <a href="mailto:info@renuir.com" className="text-primary-600 hover:text-primary-700 underline">
                Contact us
              </a>
              .
            </Typography>
          </motion.div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300 data-[state=open]:border-primary-300 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-gray-900 hover:no-underline py-4 data-[state=open]:text-primary-600 group">
                  <span className="flex-1 pr-4">{faq.question}</span>
                </AccordionTrigger>

                <AccordionContent className="text-gray-700 text-base md:text-lg leading-relaxed pt-2 pb-4">
                  <div className="pl-0">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          <Typography variant="h4" className="text-gray-700 mb-4 font-medium">
            Still have questions?
          </Typography>
          <a
            href="mailto:info@renuir.com"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Get in touch with our support team
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
