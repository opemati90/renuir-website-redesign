import { Typography } from "@/components/ui/typography";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Renuir",
  description: "Cookie Policy for Renuir's website and services",
};

export default function CookiesPage() {
  return (
    <>
      <Typography variant="h2" className="mb-4 text-black">
        Cookie Policy
      </Typography>

      <Typography variant="lead" className="mb-8 italic">
        Last updated: December 10, 2025
      </Typography>

      <div className="prose prose-blue max-w-none space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          1. Introduction
        </h3>
        <p>
          Welcome to Renuir. These Terms and Conditions (&quot;Terms&quot;)
          govern your use of our website and services (collectively, the
          &quot;Service&quot;). By accessing or using the Service, you agree to
          be bound by these Terms. If you do not agree to these Terms, please do
          not use our Service.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          2. Eligibility
        </h3>
        <p>
          You must be at least 16 years of age to use the Service. By using the
          Service, you represent and warrant that you meet this age requirement
          and have the legal capacity to enter into these Terms.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          3. Account Registration
        </h3>
        <p>
          Some features of the Service may require you to create an account. You
          agree to provide accurate, current, and complete information during
          registration and to update such information as necessary. You are
          responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          4. Use of Service
        </h3>
        <p>
          Renuir provides a platform for reporting and matching lost and found
          items. You agree to use the Service only for lawful purposes and in
          accordance with these Terms. You must not:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Submit false reports or claim items that do not belong to you</li>
          <li>Use the Service to facilitate illegal activities</li>
          <li>Impersonate any person or entity</li>
          <li>Upload malicious software or content</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt the Service or servers</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          5. User Content
        </h3>
        <p>
          You retain ownership of any content you submit to the Service (such as
          item descriptions and images). By submitting content, you grant Renuir
          a non-exclusive, worldwide, royalty-free license to use, display, and
          process that content for the purpose of providing the Service and
          facilitating lost-and-found matches.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          6. Intellectual Property
        </h3>
        <p>
          The Service and its original content, features, and functionality are
          and will remain the exclusive property of Renuir UG
          (haftungsbeschränkt) and its licensors. Our trademarks, logos, and
          service marks may not be used without our prior written consent.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          7. Third-Party Services
        </h3>
        <p>
          The Service may contain links to third-party websites or services.
          Renuir does not control and is not responsible for the content,
          privacy policies, or practices of third-party sites. Your use of
          third-party services is at your own risk.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          8. Disclaimer of Warranties
        </h3>
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
          WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
          GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR
          ERROR-FREE. WE DO NOT GUARANTEE THE SUCCESSFUL RETURN OF ANY LOST
          ITEM.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          9. Limitation of Liability
        </h3>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, RENUIR AND ITS DIRECTORS,
          EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, AND AFFILIATES SHALL NOT BE
          LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
          PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA,
          USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS
          TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          10. Indemnification
        </h3>
        <p>
          You agree to indemnify, defend, and hold harmless Renuir and its
          officers, directors, employees, and agents from any claims, damages,
          losses, or expenses (including reasonable attorneys&apos; fees)
          arising out of your use of the Service, your violation of these Terms,
          or your violation of any rights of a third party.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          11. Governing Law
        </h3>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the Federal Republic of Germany, without regard to its
          conflict of law provisions. Any legal action or proceeding arising
          under these Terms shall be brought exclusively in the courts located
          in Berlin, Germany.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          12. Dispute Resolution
        </h3>
        <p>
          <strong>Informal Resolution:</strong> Before filing any formal legal
          claim, you agree to contact us at legal@renuir.com to attempt to
          resolve any dispute informally. We will try to resolve the dispute
          within 30 days.
        </p>
        <p>
          <strong>EU Online Dispute Resolution:</strong> The European Commission
          provides a platform for online dispute resolution (OS) available at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . We are not obliged to participate in dispute resolution proceedings
          before a consumer arbitration board.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          13. Termination
        </h3>
        <p>
          We may terminate or suspend your access to the Service immediately,
          without prior notice or liability, for any reason, including without
          limitation if you breach these Terms. Upon termination, your right to
          use the Service will immediately cease.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          14. Severability
        </h3>
        <p>
          If any provision of these Terms is found to be unenforceable or
          invalid, that provision shall be limited or eliminated to the minimum
          extent necessary so that these Terms shall otherwise remain in full
          force and effect.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          15. Changes to Terms
        </h3>
        <p>
          We reserve the right to modify or replace these Terms at any time. We
          will notify you of any material changes by posting the new Terms on
          this page and updating the &quot;Last updated&quot; date. Your
          continued use of the Service after any such changes constitutes your
          acceptance of the new Terms.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6">
          16. Contact Us
        </h3>
        <p>
          If you have any questions about these Terms, please contact us at:
          <br />
          Email: legal@renuir.com
          <br />
          Address: Renuir UG (haftungsbeschränkt), Hönower Wiesenweg 57, 10318
          Berlin, Germany
        </p>
      </div>
    </>
  );
}
