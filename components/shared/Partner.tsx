import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";
import { Building2, Globe, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Partner with Us | Renuir",
  description: "Become a Renuir partner and streamline your lost-and-found operations",
};

export default function PartnerPage() {
  const benefits = [
    {
      title: "Reduced Costs",
      desc: "Automate your entire workflow and save hundreds of staff hours annually.",
      icon: Building2
    },
    {
      title: "Better Experience",
      desc: "Help guests recover belongings faster with network-wide smart matching.",
      icon: Users
    },
    {
      title: "Secure & Compliant",
      desc: "Enterprise-grade security with full audit trails and GDPR compliance.",
      icon: ShieldCheck
    },
    {
      title: "Global Network",
      desc: "Connect with airports, hotels, and transit hubs across the globe.",
      icon: Globe
    }
  ];

  return (
    <div className="max-w-5xl space-y-20 py-10">
      <section className="space-y-8">
        <div className="space-y-4">
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Partner with Renuir
          </Typography>
          <div className="w-16 h-1 bg-primary-600 rounded-full" />
        </div>
        <p className="text-gray-600 leading-relaxed text-xl md:text-2xl max-w-3xl">
          Transform your lost and found operations from a manual burden into a professional service that builds customer loyalty.
        </p>
        <Link href="mailto:partnerships@renuir.com">
          <Button size="lg" className="h-14 px-10 rounded-2xl font-black text-lg bg-gray-900 hover:bg-black text-white shadow-xl mt-4">
            Become a Partner
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, i) => (
          <div key={i} className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
              <benefit.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-4">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg font-medium">{benefit.desc}</p>
          </div>
        ))}
      </div>

      <section className="p-12 bg-gray-900 rounded-[3rem] text-white text-center space-y-8">
        <h3 className="text-3xl md:text-4xl font-black tracking-tight">Ready to streamline your venue?</h3>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Join leading hotels, airports, and transport providers who trust Renuir to manage their property recovery.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="mailto:partnerships@renuir.com">
            <Button className="w-full sm:w-auto h-14 px-10 rounded-2xl font-black text-lg bg-white text-gray-900 hover:bg-gray-100">
              Contact Partnerships
            </Button>
          </Link>
          <Link href="/#waitlist">
            <Button variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-2xl font-black text-lg border-gray-700 text-white hover:bg-gray-800">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
