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

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="faq" className="bg-white py-20 md:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.6)}
        className="app-container max-w-4xl py-12"
      >
        <div className="text-center mb-12">
          <Typography variant="h1" className="font-bold text-gray-900 text-3xl md:text-4xl mb-4">
            Questions? We&apos;ve got answers.
          </Typography>

          <Typography
            variant="lead"
            className="text-gray-600 font-normal text-lg"
          >
            Here&apos;s what people usually want to know.
          </Typography>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="rounded-xl border border-gray-200 px-6 py-4 bg-white hover:border-primary-200 transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline data-[state=open]:text-primary-600 py-2">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-gray-700 text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};
