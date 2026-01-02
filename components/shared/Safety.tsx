import { Typography } from "@/components/ui/typography";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Tips | Renuir",
  description: "Safety guidelines for using Renuir's lost and found platform",
};

export default function SafetyPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Safety Tips
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Last updated: January 2025
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">

        <section className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-lg">
            At Renuir, your safety is our top priority. Whether you&apos;re
            reporting a lost item, claiming a found item, or meeting someone to
            retrieve your belongings, following these safety guidelines will help
            ensure a positive experience.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            For Item Owners (Lost Items)
          </h3>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Verifying Your Identity
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Be prepared to provide specific details about your item that only the
                true owner would know
              </li>
              <li>Have proof of purchase or photos of the item if available</li>
              <li>
                Use the secure messaging system within Renuir rather than sharing
                personal contact information immediately
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Meeting to Retrieve Items
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Always meet in public, well-lit locations with security cameras if
                possible
              </li>
              <li>
                Consider meeting at a police station, library, or shopping center
              </li>
              <li>Bring a friend or family member with you</li>
              <li>Inform someone you trust about where you&apos;re going and when</li>
              <li>Meet during daylight hours when possible</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            For Finders (Found Items)
          </h3>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Reporting Found Items
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Take clear photos of the item from multiple angles</li>
              <li>Note the exact location and time you found the item</li>
              <li>
                Keep the item in a safe place until it&apos;s returned to its owner
              </li>
              <li>
                Do not share identifying details publicly that could allow fraudulent
                claims
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Verifying Claimants
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Ask specific questions about the item that only the true owner would
                know
              </li>
              <li>Request proof of ownership when appropriate</li>
              <li>
                Use Renuir&apos;s verification features to confirm the claimant&apos;s
                identity
              </li>
              <li>
                Trust your instincts. If something feels wrong, don&apos;t proceed
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            For Businesses Using Renuir
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Establish a dedicated secure area for storing found items</li>
            <li>Train staff on proper verification procedures</li>
            <li>Keep detailed records of all lost and found transactions</li>
            <li>
              Use Renuir&apos;s business dashboard to track item custody chain
            </li>
            <li>
              Follow your organization&apos;s policies for handling lost property
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Protecting Your Personal Information
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Never share sensitive personal information (SSN, bank details,
              passwords)
            </li>
            <li>Be cautious of requests for payment before receiving your item</li>
            <li>Report suspicious behavior to Renuir immediately</li>
            <li>Use strong, unique passwords for your Renuir account</li>
            <li>Enable two-factor authentication when available</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Recognizing Scams
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">Be aware of these common warning signs:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Requests for upfront payment or &quot;shipping fees&quot; before
              return
            </li>
            <li>Pressure to act quickly or urgently</li>
            <li>Unwillingness to meet in safe, public locations</li>
            <li>
              Vague descriptions of the item that don&apos;t match your lost
              property
            </li>
            <li>Requests to communicate outside of the Renuir platform</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Reporting Concerns
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you encounter suspicious activity or feel unsafe at any point,
            please:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Report the user or listing through Renuir&apos;s reporting feature
            </li>
            <li>Contact our Trust & Safety team at <a href="mailto:safety@renuir.com" className="text-primary-600 hover:text-primary-700">safety@renuir.com</a></li>
            <li>If you feel in immediate danger, contact local law enforcement</li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="p-6 bg-primary-50 rounded-xl border border-primary-100">
            <p className="text-gray-900 font-semibold mb-2">Remember:</p>
            <p className="text-gray-700 leading-relaxed">
              Renuir is committed to creating a safe
              platform for reuniting people with their belongings. If you ever have
              concerns about your safety, trust your instincts and don&apos;t hesitate
              to reach out to our support team.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
