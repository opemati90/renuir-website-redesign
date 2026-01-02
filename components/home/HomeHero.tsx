"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { CheckCircleIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { transition1 } from "../Transition";
import { fadeIn } from "../Variants";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";

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

  return (
    <motion.section className="bg-linear-to-b from-white to-primary-10  pt-0 md:pt-12">
      <div className="app-container flex flex-col md:flex-row gap-12 basis items-center pb-20">
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="basis-full md:basis-[1/2] "
        >
          <div className="flex flex-col gap-6  items-center md:items-start">
            <div className="inline-flex items-center rounded-full border border-border shadow-xs px-3 py-2">
              <div className="h-2.5 w-2.5 rounded-full animate-[pulse-primary_1.2s_ease-in-out_infinite]" />

              <span className="ml-2 text-sm font-medium text-primary-700">
                Waitlist Now open
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1 mt-4">
              <Typography variant="h1" className="text-black  font-bold">
                Lost it?
              </Typography>
              <Typography variant="h1" className="text-primary-600 font-bold">
                Renuir it.
              </Typography>
            </div>
            <Typography
              variant="h4"
              className="text-dark-700 mt-3 leading-8 max-w-lg font-normal"
            >
              The AI-powered lost & found that actually works. Report once, and
              we&apos;ll search everywhere for you in real time.
            </Typography>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-row items-center justify-center gap-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-90">
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                          <Input
                            {...field}
                            placeholder="Enter your email"
                            className="pl-10 h-12 rounded-xl"
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
                  className="h-12 px-6 font-bold rounded-xl bg-primary-700 hover:bg-dark-400 shadow-lg shadow-primary-200"
                >
                  Join →
                </Button>
              </form>
            </Form>
            <Typography variant="smallText" className="">
              See how it works →
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
              <div className="flex flex-row gap-2 items-center">
                <CheckCircleIcon className="text-primary-600" />
                <Typography variant="smallText">AI-powered matching</Typography>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CheckCircleIcon className="text-primary-600" />
                <Typography variant="smallText">
                  Free for individuals
                </Typography>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="basis-full md:basis-[1/2] ">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            src="/images/hero.png"
            alt="renuir image"
            className="max-w-120"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
