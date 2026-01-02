import { Typography } from "@/components/ui/typography";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Us | Renuir",
  description:
    "Become a Renuir partner and streamline your lost-and-found operations",
};

export default function PartnerPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Partner with Us
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Streamline your lost-and-found operations
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-lg">
            Join the growing network of businesses and organizations that trust
            Renuir to streamline their lost-and-found operations. Our partnership
            program is designed to help you reduce operational costs, improve
            customer satisfaction, and demonstrate your commitment to service
            excellence.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Why Partner with Renuir?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Reduce Operational Costs:</strong> Automate your
              lost-and-found workflow and reduce staff time spent on manual
              processes
            </li>
            <li>
              <strong>Improve Customer Experience:</strong> Help guests and
              customers quickly recover their belongings with our smart matching
            </li>
            <li>
              <strong>Secure & Compliant:</strong> Enterprise-grade security with
              full audit trails and compliance reporting
            </li>
            <li>
              <strong>Seamless Integration:</strong> Our API integrates with your
              existing systems and workflows
            </li>
            <li>
              <strong>Dedicated Support:</strong> Access to a dedicated account
              manager and priority support
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Partnership Programs
          </h3>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Hospitality Partners
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Perfect for hotels, resorts, and vacation rentals. Streamline guest
              lost-and-found with branded portals, automated notifications, and
              integration with your property management system.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Transportation Partners
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Ideal for airlines, rail companies, ride-share services, and public
              transit. Handle high volumes of lost items efficiently with our bulk
              upload tools and passenger communication features.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Venue & Event Partners
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Great for stadiums, concert halls, conference centers, and theme parks.
              Manage event-specific lost-and-found with temporary portals and
              post-event item disposition workflows.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Retail Partners
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Designed for retail stores, shopping centers, and malls. Provide
              excellent customer service with easy item reporting and streamlined
              claim processes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Educational Partners
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Built for universities, schools, and educational institutions. Help
              students and staff recover lost items across campus with our
              multi-location management features.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Partnership Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h5 className="font-bold text-gray-900 text-lg mb-3">Basic</h5>
              <ul className="text-base mt-2 space-y-2 text-gray-700">
                <li>• Access to Renuir platform</li>
                <li>• Standard support</li>
                <li>• Monthly reporting</li>
              </ul>
            </div>
            <div className="p-6 bg-primary-50 rounded-xl border border-primary-200">
              <h5 className="font-bold text-gray-900 text-lg mb-3">Enterprise</h5>
              <ul className="text-base mt-2 space-y-2 text-gray-700">
                <li>• Custom branded portal</li>
                <li>• API access & integrations</li>
                <li>• Dedicated account manager</li>
                <li>• Priority support</li>
                <li>• Custom analytics dashboard</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Success Stories
          </h3>
          <div className="italic border-l-4 border-primary-400 pl-6 py-4 bg-gray-50 rounded-r-xl">
            <p className="text-gray-700 leading-relaxed">
              &quot;Since implementing Renuir, we&apos;ve reduced the time spent on
              lost-and-found management by 60% and our guest satisfaction scores have
              improved significantly.&quot;
            </p>
            <span className="block text-sm text-gray-600 mt-3 font-medium">
              - Operations Director, Major Hotel Chain
            </span>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Get Started</h3>
          <p className="text-gray-700 leading-relaxed">
            Ready to transform your lost-and-found operations? We&apos;d love to
            hear from you. Contact our partnerships team to discuss how Renuir can
            work for your organization.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Email:</strong> <a href="mailto:partnerships@renuir.com" className="text-primary-600 hover:text-primary-700">partnerships@renuir.com</a>
            </li>
            <li>
              <strong>Schedule a Demo:</strong> Contact us to arrange a personalized
              demonstration
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="p-6 bg-primary-50 rounded-xl border border-primary-100 text-center">
            <p className="font-bold text-gray-900 mb-2">Join our Partner Network Today</p>
            <p className="text-gray-700 text-base">
              Email <a href="mailto:partnerships@renuir.com" className="text-primary-600 hover:text-primary-700 font-semibold">partnerships@renuir.com</a> or join our waitlist to be notified when
              partnership enrollment opens.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
