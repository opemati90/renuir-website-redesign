import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Renuir",
  description: "Cookie Policy for Renuir's website and services",
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <Typography variant="h2" className="mb-2 text-gray-900 font-bold">
          Cookie Policy
        </Typography>
        <Typography variant="lead" className="text-gray-600">
          Last updated: January 2025
        </Typography>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">1. Introduction</h3>
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy explains how Renuir UG (haftungsbeschränkt) ("we", "us", or "our") uses cookies and similar tracking technologies on our website and mobile application (collectively, the "Service"). This policy should be read alongside our Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">2. What Are Cookies?</h3>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow a website to recognize your device and store some information about your preferences or past actions.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">3. Types of Cookies We Use</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Session management</li>
                <li>Security and fraud prevention</li>
                <li>Cookie consent preferences</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Page views and navigation patterns</li>
                <li>Time spent on pages</li>
                <li>Error tracking</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Language preferences</li>
                <li>User interface customization</li>
                <li>Remembering form data</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">4. Third-Party Cookies</h3>
          <p className="text-gray-700 leading-relaxed">
            We may use third-party services that set cookies on your device. These services help us analyze website usage and improve our services. We do not control these third-party cookies, and you should review their respective privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">5. Managing Cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies. You can also delete cookies that have already been set.</li>
            <li><strong>Cookie Preferences:</strong> Use our cookie consent banner to customize which cookies you accept.</li>
            <li><strong>Opt-Out Tools:</strong> You can opt out of certain third-party analytics cookies through their respective opt-out pages.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Please note that disabling certain cookies may impact your experience on our website, as some features may not function properly.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">6. Cookie Retention</h3>
          <p className="text-gray-700 leading-relaxed">
            Cookies are stored on your device for different periods:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically up to 12 months) or until you delete them</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">7. Updates to This Policy</h3>
          <p className="text-gray-700 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">8. Contact Us</h3>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about our use of cookies, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <p className="text-gray-700">
              <strong>Email:</strong> privacy@renuir.com
              <br />
              <strong>Address:</strong> Renuir UG (haftungsbeschränkt)
              <br />
              Hönower Wiesenweg 57, 10318 Berlin, Germany
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
