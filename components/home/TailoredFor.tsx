"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { features } from "../utils/data/homeItems";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("business");

  return (
    <section className="app-container mt-28" id="features">
      <div className="text-center max-w-2xl mx-auto">
        <Typography variant="h2" className="font-semibold">
          Built for how you actually use it
        </Typography>

        <Typography
          variant="h4"
          className="text-gray-600 font-normal mt-2 leading-7"
        >
          Different needs, same goal: getting stuff back to its owner, fast.
        </Typography>

        {/* Toggle */}
        <div className="inline-flex mt-8 rounded-lg border border-gray-200 bg-gray-50 p-1">
          <Button
            size="sm"
            variant={audience === "business" ? "default" : "ghost"}
            className="rounded-md"
            onClick={() => setAudience("business")}
          >
            For Business
          </Button>
          <Button
            size="sm"
            variant={audience === "consumer" ? "default" : "ghost"}
            className="rounded-md"
            onClick={() => setAudience("consumer")}
          >
            For Consumers
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-100">
              <feature.icon className="h-6 w-6 text-gray-700" />
            </div>

            <Typography variant="h5" className="font-semibold mt-4 mb-2">
              {feature.title}
            </Typography>

            <Typography
              variant="smallText"
              className="text-gray-600 text-sm leading-6"
            >
              {feature.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};
