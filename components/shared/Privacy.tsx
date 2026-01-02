import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Renuir",
  description: "Renuir's Privacy Policy detailing how we handle your data",
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Personal Data</h4>
            <p className="text-gray-600 leading-relaxed">
              We collect personally identifiable information, such as your name and email address, only when voluntarily provided (e.g., when joining the waitlist or reporting an item).
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Item Data</h4>
            <p className="text-gray-600 leading-relaxed">
              When reporting lost or found property, we collect descriptions, images, and location data to facilitate automated matching.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Technical Data</h4>
            <p className="text-gray-600 leading-relaxed">
              We automatically collect technical info like IP address, browser type, and usage patterns to ensure platform security and performance.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Facilitate automated lost and found matching",
            "Communicate match updates and alerts",
            "Improve our matching systems and accuracy",
            "Prevent fraudulent activity and reports",
            "Provide professional customer support",
            "Send service updates (with your consent)"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl text-gray-700 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
              {item}
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "3. Data Disclosure & Security",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We never sell your personal data. Information is only shared with verified business partners strictly for the purpose of property recovery. Contact details are only revealed after a confirmed match and your explicit permission.
          </p>
          <div className="p-6 bg-primary-50 border border-primary-100 rounded-2xl">
            <p className="text-primary-900 font-medium">
              All data is encrypted in transit and at rest using industry-standard security protocols.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "4. Your Rights (GDPR & CCPA)",
      content: (
        <p className="text-gray-600 leading-relaxed">
          You have the right to access, correct, or delete your personal data at any time. We strictly adhere to GDPR (EU) and CCPA (California) regulations regarding data portability and the right to be forgotten.
        </p>
      )
    }
  ];

  return (
    <div className="max-w-4xl space-y-16 py-10">
      <section className="space-y-6">
        <div className="space-y-4">
          <Typography variant="h1" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Privacy Policy
          </Typography>
          <div className="w-16 h-1 bg-primary-600 rounded-full" />
        </div>
        <p className="text-gray-500 font-medium">Last updated: January 2025</p>
        <p className="text-gray-600 leading-relaxed text-xl max-w-2xl">
          At Renuir, we take your privacy seriously. This policy outlines how we safeguard your information while helping you recover what matters.
        </p>
      </section>

      <div className="space-y-16">
        {sections.map((section, i) => (
          <section key={i} className="space-y-6">
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">{section.title}</h3>
            {section.content}
          </section>
        ))}

        <section className="p-10 bg-gray-900 rounded-[2.5rem] text-white space-y-6">
          <h3 className="text-3xl font-black tracking-tight">Contact Us</h3>
          <p className="text-gray-400 text-lg">Questions about your privacy? Reach out to our Data Protection Officer.</p>
          <div className="pt-4 space-y-2">
            <p className="font-bold text-xl">privacy@renuir.com</p>
            <p className="text-gray-400">Renuir UG (haftungsbeschränkt)<br />Hönower Wiesenweg 57, 10318 Berlin, Germany</p>
          </div>
        </section>
      </div>
    </div>
  );
}
