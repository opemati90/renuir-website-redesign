import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Renuir",
  description: "Terms and Conditions for using Renuir's services",
};

export default function TermsPage() {
  const sections = [
    {
      title: "1. Service Overview",
      content: "Renuir provides a professional platform for reporting and matching lost and found property. By using our service, you agree to provide accurate information and use the platform only for its intended purpose of property recovery."
    },
    {
      title: "2. Eligibility",
      content: "You must be at least 16 years of age to use Renuir. By accessing the service, you represent that you meet this requirement and have the legal capacity to enter into these terms."
    },
    {
      title: "3. Prohibited Conduct",
      content: (
        <ul className="space-y-3">
          {[
            "Submitting false reports or fraudulent claims",
            "Impersonating other individuals or entities",
            "Interfering with platform security or integrity",
            "Using the service for illegal activities"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {item}
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "4. Intellectual Property",
      content: "The platform, including its original content, features, and functionality, are the exclusive property of Renuir UG (haftungsbeschränkt). Our trademarks and logos may not be used without prior written consent."
    },
    {
      title: "5. Limitation of Liability",
      content: "While we strive for 100% recovery rates, Renuir is provided 'as is'. We cannot guarantee the successful return of every item and are not liable for property that remains lost or damaged."
    }
  ];

  return (
    <div className="max-w-4xl space-y-16 py-10">
      <section className="space-y-6">
        <div className="space-y-4">
          <Typography variant="h1" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Terms & Conditions
          </Typography>
          <div className="w-16 h-1 bg-primary-600 rounded-full" />
        </div>
        <p className="text-gray-500 font-medium">Last updated: January 2025</p>
        <p className="text-gray-600 leading-relaxed text-xl max-w-2xl">
          Please review these terms carefully before using the Renuir platform. Your use of the service constitutes acceptance of these conditions.
        </p>
      </section>

      <div className="space-y-12">
        {sections.map((section, i) => (
          <section key={i} className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm space-y-4">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">{section.title}</h3>
            <div className="text-gray-600 leading-relaxed text-lg">
              {section.content}
            </div>
          </section>
        ))}

        <section className="space-y-6 pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-black text-gray-900 tracking-tight">Governing Law</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            These terms are governed by the laws of the Federal Republic of Germany. Any disputes shall be handled exclusively in the courts of Berlin, Germany.
          </p>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <p className="text-gray-700">
              Questions? Contact our legal team: <span className="font-bold text-gray-900">legal@renuir.com</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
