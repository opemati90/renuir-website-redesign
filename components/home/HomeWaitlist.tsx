"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import { Mail, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export const EarlyAccessSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Waitlist email:", values.email);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="waitlist" className="bg-white py-20 md:py-28">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="app-container max-w-3xl text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100">
          <span className="text-sm font-medium text-gray-700">
            Launching soon
          </span>
        </div>

        <Typography variant="h1" className="font-bold text-gray-900 text-3xl md:text-4xl mb-4 mt-6">
          Be the first to know
        </Typography>

        <Typography variant="h4" className="text-gray-600 font-normal text-lg mb-8">
          Join the waitlist and we&apos;ll notify you when Renuir launches.
        </Typography>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        className="pl-12 h-12 text-base rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="h-12 px-6 rounded-lg font-semibold bg-primary-600 hover:bg-primary-700 text-white"
            >
              Join waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>

        <p className="mt-4 text-sm text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};
