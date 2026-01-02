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
import { CheckCircleIcon, Mail } from "lucide-react";
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
    <section className="bg-white pt-0 md:pt-12">
      <div className="app-container flex flex-col md:flex-row gap-12 basis items-center pb-20">
        <div className="basis-full md:basis-[1/2]">
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
              <span className="text-sm font-medium text-gray-700">
                Waitlist Now Open
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
              className="text-gray-600 mt-3 leading-8 max-w-lg font-normal"
            >
              The lost & found platform that actually works. Report once, and
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
                  className="h-12 px-6 font-semibold rounded-lg bg-primary-600 hover:bg-primary-700"
                >
                  Join waitlist
                </Button>
              </form>
            </Form>
            <Link href="#how-it-works" className="text-sm text-primary-600 hover:text-primary-700 transition-colors mt-2">
              Learn more →
            </Link>

            <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
              <div className="flex flex-row gap-2 items-center">
                <CheckCircleIcon className="text-primary-600" />
                <Typography variant="smallText">Smart matching</Typography>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CheckCircleIcon className="text-primary-600" />
                <Typography variant="smallText">
                  Free for individuals
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-[1/2]">
          <img
            src="/images/hero.png"
            alt="Renuir platform illustration"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
