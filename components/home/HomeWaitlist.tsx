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
        className="app-container max-w-4xl text-center"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center justify-center gap-0 max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-2 group focus-within:ring-4 focus-within:ring-primary-500/5 transition-all"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        className="pl-14 h-14 text-base border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent placeholder:text-gray-400 font-medium"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto h-14 px-10 text-base font-bold rounded-xl sm:rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20 transition-all active:scale-95"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>

        <p className="mt-8 text-sm font-medium text-gray-400 tracking-tight">
          Professional. Secure. Guaranteed privacy.
        </p>
      </motion.div>
    </section>
  );
};
