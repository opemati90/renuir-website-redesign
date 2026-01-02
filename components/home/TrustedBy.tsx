import { Typography } from "@/components/ui/typography";
import { trustedByStats } from "../utils/data/homeItems";

export const TrustedByStats = () => {
  return (
    <section className="border-b border-gray-200">
      <div className="app-container pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustedByStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 py-8"
            >
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-lg ${stat.bg}`}
              >
                <stat.icon className={`h-7 w-7 ${stat.iconColor}`} />
              </div>

              <Typography variant="h3" className="font-semibold">
                {stat.value}
              </Typography>

              <Typography
                variant="h4"
                className="text-gray-600 text-sm text-center -mt-2"
              >
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
