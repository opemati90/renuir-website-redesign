import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { faqs } from "../utils/data/homeItems";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-12">
      <div className="app-container max-w-3xl py-12">
        <Typography variant="h1" className="text-center font-semibold">
          Questions? We&apos;ve got answers.
        </Typography>

        <Typography
          variant="lead"
          className="text-center text-gray-600 font-normal mt-2"
        >
          Here&apos;s what people usually want to know.
        </Typography>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4 mt-12"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border border-gray-200 px-6 py-2"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline data-[state=open]:text-primary-600">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
