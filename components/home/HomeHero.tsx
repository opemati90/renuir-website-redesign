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
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { CheckCircleIcon, Mail, ArrowRight, Sparkles } from "lucide-react";
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
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="bg-white pt-20 md:pt-28 pb-16 md:pb-24">
      <div ref={containerRef} className="app-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeIn("up", "tween", 0, 0.6)}
            className="flex-1 lg:flex-[0.45] space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100"
            >
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Join the waitlist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
              <Typography
                variant="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
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
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Typography
                variant="h4"
                className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal"
              >
                The lost & found platform that actually works. Report once, and
                we&apos;ll search everywhere for you in real time.
              </Typography>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-4"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row gap-3 max-w-2xl"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <Input
                              {...field}
                              placeholder="Enter your email"
                              className="pl-14 h-14 text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white shadow-sm"
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
                    className="h-14 px-8 font-semibold rounded-xl bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300"
                  >
                    Join waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-100">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600" />
                </div>
                <Typography variant="smallText" className="text-gray-700 font-medium text-base">
                  Smart matching
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-100">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600" />
                </div>
                <Typography variant="smallText" className="text-gray-700 font-medium text-base">
                  Free for individuals
                </Typography>
              </div>
            </motion.div>

            {/* Learn more link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-2"
            >
              <Link
                href="/#how-it-works"
                className="inline-flex items-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
              >
                Learn how it works
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 lg:flex-[0.55] w-full flex items-center justify-center min-h-[400px] lg:min-h-[600px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/hero.png"
                alt="Renuir platform illustration"
                width={1090}
                height={1500}
                priority
                className="w-full h-auto max-w-full object-contain"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
