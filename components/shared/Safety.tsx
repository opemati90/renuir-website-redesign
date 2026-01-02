import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";
import { ShieldCheck, UserCheck, MapPin, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Safety Guidelines | Renuir",
  description: "Safety guidelines for using Renuir's lost and found platform",
};

export default function SafetyPage() {
  const guidelines = [
    {
      title: "For Item Owners",
      icon: UserCheck,
      items: [
        "Provide specific details that only the true owner would know.",
        "Keep proof of purchase or original item photos available.",
        "Use Renuir's secure messaging for initial communication.",
        "Always meet in public, well-lit locations with security cameras."
      ]
    },
    {
      title: "For Finders",
      icon: ShieldCheck,
      items: [
        "Take clear photos of the item from multiple angles.",
        "Record the exact time and location where the item was found.",
        "Store the item securely until the recovery is coordinated.",
        "Verify identity before handing over high-value belongings."
      ]
    },
    {
      title: "Safe Meeting Tips",
      icon: MapPin,
      items: [
        "Meet at public landmarks, stations, or community centers.",
        "Bring a friend or notify someone of your meeting details.",
        "Schedule meetings during daylight hours.",
        "Trust your instincts—if something feels off, do not proceed."
      ]
    }
  ];

  return (
    <div className="max-w-4xl space-y-16 py-10">
      <section className="space-y-6">
        <div className="space-y-4">
          <Typography variant="h1" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Safety Guidelines
          </Typography>
          <div className="w-16 h-1 bg-primary-600 rounded-full" />
        </div>
        <p className="text-gray-500 font-medium">Last updated: January 2025</p>
        <p className="text-gray-600 leading-relaxed text-xl max-w-2xl">
          Your safety is our priority. These guidelines ensure a secure and positive experience for both owners and finders.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8">
        {guidelines.map((group, i) => (
          <section key={i} className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary-50 rounded-2xl text-primary-600">
                <group.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">{group.title}</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {group.items.map((item, j) => (
                <li key={j} className="flex gap-4 text-gray-600 leading-relaxed font-medium">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="p-10 bg-red-50 border border-red-100 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center">
        <div className="p-4 bg-white rounded-3xl text-red-600 shadow-sm">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-black text-red-950">Reporting Concerns</h3>
          <p className="text-red-900/80 font-medium leading-relaxed">
            Encountered suspicious activity? Report users immediately through the platform or email <span className="font-bold">safety@renuir.com</span>. In case of emergency, contact local authorities.
          </p>
        </div>
      </section>
    </div>
  );
}
