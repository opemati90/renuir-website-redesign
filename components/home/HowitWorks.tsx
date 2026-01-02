import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import { Loststat } from "../utils/data/homeItems";

export const LostSomething = () => {
  return (
    <section
      id="how-it-works"
      className="mt-32 bg-white border-b border-gray-200"
    >
      <div className="app-container pt-12 md:pt-24 pb-24">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <Typography variant="h2" className="font-semibold">
            How it works
          </Typography>

          <Typography variant="h4" className="mt-4 text-gray-600 font-normal">
            Three steps to get your stuff back.
          </Typography>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Loststat.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="relative">
                <div
                  className={`flex items-center justify-center h-24 w-24 rounded-full border border-gray-200 ${stat.bg}`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
                </div>

                <span className="absolute top-0 right-0 h-6 w-6 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center font-medium">
                  {stat.order}
                </span>
              </div>

              <Typography variant="h4" className="font-bold mt-4">
                {stat.value}
              </Typography>

              <Typography
                variant="smallText"
                className="text-gray-700 max-w-xs"
              >
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link href="#waitlist">
            <Button size="lg" className="px-8 rounded-lg font-semibold">
              Get early access
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
