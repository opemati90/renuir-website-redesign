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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="waitlist" className="bg-gray-50 py-16 md:py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn("up", "tween", 0, 0.5)}
        className="app-container max-w-4xl text-center"
      >
        <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-primary-50 border border-primary-100 shadow-sm">
          <Sparkles className="h-4 w-4 text-primary-600 fill-primary-600/10" />
          <span className="text-sm font-bold text-primary-800 uppercase tracking-wider">
            Coming Soon
          </span>
        </div>

        <Typography variant="h2" className="font-black text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-6 mt-8 tracking-tightest">
          Ready to join the network?
        </Typography>

        <Typography variant="h4" className="text-gray-500 font-normal text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Be the first to experience the new standard in property recovery. Sign up for early access today.
        </Typography>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-2 rounded-[2rem] shadow-2xl border border-gray-100"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormControl>
                      <div className="relative group">
                        <Mail className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                        <Input
                          {...field}
                          placeholder="Enter your email"
                          className="pl-14 h-16 text-lg rounded-2xl border-none focus:ring-0 bg-transparent placeholder:text-gray-400 shadow-none"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="absolute -bottom-6 left-6" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto h-16 px-10 rounded-2xl font-black text-lg bg-primary-600 hover:bg-primary-700 text-white shadow-xl shadow-primary-600/20 transition-all active:scale-[0.98]"
              >
                Join the Waitlist
                <ArrowRight className="ml-2.5 h-6 w-6" />
              </Button>
            </form>
          </Form>
        </div>

        <p className="mt-10 text-gray-400 font-medium">
          Professional. Secure. Guaranteed privacy.
        </p>
      </motion.div>
    </section>
  );
};
