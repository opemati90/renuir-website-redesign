import { Typography } from "@/components/ui/typography";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Us | Renuir",
  description:
    "Become a Renuir partner and streamline your lost-and-found operations",
};

export default function PartnerPage() {
  return (
    <>
      <Typography variant="h2" className="mb-4 text-black">
        Partner with Us
      </Typography>

      <p>
        Join the growing network of businesses and organizations that trust
        Renuir to streamline their lost-and-found operations. Our partnership
        program is designed to help you reduce operational costs, improve
        customer satisfaction, and demonstrate your commitment to service
        excellence.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Why Partner with Renuir?
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Reduce Operational Costs:</strong> Automate your
          lost-and-found workflow and reduce staff time spent on manual
          processes
        </li>
        <li>
          <strong>Improve Customer Experience:</strong> Help guests and
          customers quickly recover their belongings with our AI-powered
          matching
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

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Partnership Programs
      </h3>

      <h4 className="text-lg font-medium text-gray-800 mt-4">
        Hospitality Partners
      </h4>
      <p>
        Perfect for hotels, resorts, and vacation rentals. Streamline guest
        lost-and-found with branded portals, automated notifications, and
        integration with your property management system.
      </p>

      <h4 className="text-lg font-medium text-gray-800 mt-4">
        Transportation Partners
      </h4>
      <p>
        Ideal for airlines, rail companies, ride-share services, and public
        transit. Handle high volumes of lost items efficiently with our bulk
        upload tools and passenger communication features.
      </p>

      <h4 className="text-lg font-medium text-gray-800 mt-4">
        Venue & Event Partners
      </h4>
      <p>
        Great for stadiums, concert halls, conference centers, and theme parks.
        Manage event-specific lost-and-found with temporary portals and
        post-event item disposition workflows.
      </p>

      <h4 className="text-lg font-medium text-gray-800 mt-4">
        Retail Partners
      </h4>
      <p>
        Designed for retail stores, shopping centers, and malls. Provide
        excellent customer service with easy item reporting and streamlined
        claim processes.
      </p>

      <h4 className="text-lg font-medium text-gray-800 mt-4">
        Educational Partners
      </h4>
      <p>
        Built for universities, schools, and educational institutions. Help
        students and staff recover lost items across campus with our
        multi-location management features.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Partnership Benefits
      </h3>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h5 className="font-semibold text-gray-900">Basic</h5>
          <ul className="text-sm mt-2 space-y-1">
            <li>• Access to Renuir platform</li>
            <li>• Standard support</li>
            <li>• Monthly reporting</li>
          </ul>
        </div>
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h5 className="font-semibold text-gray-900">Enterprise</h5>
          <ul className="text-sm mt-2 space-y-1">
            <li>• Custom branded portal</li>
            <li>• API access & integrations</li>
            <li>• Dedicated account manager</li>
            <li>• Priority support</li>
            <li>• Custom analytics dashboard</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Success Stories
      </h3>
      <p className="italic border-l-4 border-primary-400 pl-4 py-2 bg-gray-50">
        &quot;Since implementing Renuir, we&apos;ve reduced the time spent on
        lost-and-found management by 60% and our guest satisfaction scores have
        improved significantly.&quot;
        <span className="block text-sm text-gray-500 mt-2">
          - Operations Director, Major Hotel Chain
        </span>
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Get Started</h3>
      <p>
        Ready to transform your lost-and-found operations? We&apos;d love to
        hear from you. Contact our partnerships team to discuss how Renuir can
        work for your organization.
      </p>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li>
          <strong>Email:</strong> partnerships@renuir.com
        </li>
        <li>
          <strong>Schedule a Demo:</strong> Contact us to arrange a personalized
          demonstration
        </li>
      </ul>

      <p className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100 text-center">
        <strong>Join our Partner Network Today</strong>
        <br />
        <span className="text-sm">
          Email partnerships@renuir.com or join our waitlist to be notified when
          partnership enrollment opens.
        </span>
      </p>
    </>
  );
}
