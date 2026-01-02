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

import { Mail, ArrowRight, Sparkles } from "lucide-react";
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
    <section id="waitlist" className="bg-gray-50 py-24 md:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="app-container max-w-4xl text-center"
      >
        <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-primary-50/80 border border-primary-100 backdrop-blur-sm mb-8">
          <Sparkles className="h-4 w-4 text-primary-600 fill-primary-600/10" />
          <span className="text-sm font-bold text-primary-800 tracking-tight">
            Be the first to know when we launch
          </span>
        </div>

        <Typography variant="h1" className="font-black text-gray-900 text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tightest leading-tight">
          Ready to Renuir?
        </Typography>

        <Typography variant="h4" className="text-gray-500 font-medium text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the waitlist today for early access and exclusive updates. No spam, just progress.
        </Typography>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormControl>
                    <div className="relative group">
                      <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        className="pl-14 h-16 text-lg rounded-2xl border-2 border-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 bg-white shadow-sm transition-all placeholder:text-gray-400"
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
              className="h-16 px-10 text-lg font-bold rounded-2xl bg-primary-600 hover:bg-primary-700 text-white shadow-xl shadow-primary-600/20 hover:shadow-2xl hover:shadow-primary-600/30 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
            >
              Join the list
              <ArrowRight className="ml-2.5 h-6 w-6" />
            </Button>
          </form>
        </Form>

        <p className="mt-8 text-sm font-bold text-gray-400">
          Already 500+ people waiting.
        </p>
      </motion.div>
    </section>
  );
};
