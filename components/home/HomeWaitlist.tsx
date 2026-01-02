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

import { Mail } from "lucide-react";

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

  return (
    <section id="waitlist" className="bg-gray-50 py-24 md:py-32">
      <div className="app-container max-w-3xl text-center">
        <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1.5">
          <span className="text-sm font-medium text-gray-700">
            Launching soon
          </span>
        </div>
        <Typography variant="h1" className="font-bold text-black mb-3 mt-4">
          Be the first to know
        </Typography>

        <Typography variant="h4" className=" mb-10 font-medium">
          Join the waitlist and we&apos;ll notify you when Renuir launches.
        </Typography>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
              className="h-12 px-6 rounded-lg bg-gray-900 hover:bg-gray-800"
            >
              Join waitlist
            </Button>
          </form>
        </Form>

        <p className="mt-4 text-sm text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
