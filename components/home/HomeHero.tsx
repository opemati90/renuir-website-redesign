"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import Link from "next/link";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { CheckCircleIcon, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../Variants";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

const HomeHero = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Waitlist email:", values.email);
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white pt-24 md:pt-32 pb-24 md:pb-32">
      <div ref={containerRef} className="app-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            className="flex-1 space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100"
            >
              <div className="h-2 w-2 rounded-full bg-primary-600 animate-pulse" />
              <span className="text-sm font-medium text-primary-700">
                Join the waitlist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-3"
            >
              <Typography
                variant="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                Lost it?
                <br />
                <span className="text-primary-600">Renuir it.</span>
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Typography
                variant="h4"
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                The lost & found platform that actually works. Report once, and
                we&apos;ll search everywhere for you in real time.
              </Typography>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-2"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row gap-3 max-w-xl"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <Input
                              {...field}
                              placeholder="Enter your email"
                              className="pl-12 h-14 text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0"
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
                    className="h-14 px-8 font-semibold rounded-xl bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-200"
                  >
                    Join waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <Typography variant="smallText" className="text-gray-700 font-medium">
                  Smart matching
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <Typography variant="smallText" className="text-gray-700 font-medium">
                  Free for individuals
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <Typography variant="smallText" className="text-gray-700 font-medium">
                  Real-time search
                </Typography>
              </div>
            </motion.div>

            {/* Learn more link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-2"
            >
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors group"
              >
                Learn how it works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full lg:w-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-primary-200/10 rounded-3xl blur-3xl" />
              <img
                src="/images/hero.png"
                alt="Renuir platform illustration"
                className="relative w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
