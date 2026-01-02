import { Typography } from "@/components/ui/typography";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Renuir",
  description: "Renuir's commitment to digital accessibility",
};

export default function AccessibilityPage() {
  return (
    <>
      <Typography variant="h2" className="mb-4 text-black">
        Accessibility Statement
      </Typography>

      <Typography variant="lead" className="mb-8 italic">
        Last updated: December 10, 2025
      </Typography>

      <p>
        Renuir is committed to ensuring digital accessibility for people with
        disabilities. We are continually improving the user experience for
        everyone and applying the relevant accessibility standards to guarantee
        we provide equal access to all users.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Our Commitment
      </h3>
      <p>
        We strive to conform to the Web Content Accessibility Guidelines (WCAG)
        2.1 at Level AA. These guidelines help make web content more accessible
        to people with a wide range of disabilities, including:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Visual impairments (blindness, low vision, color blindness)</li>
        <li>Hearing impairments</li>
        <li>Motor impairments</li>
        <li>Cognitive disabilities</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Accessibility Features
      </h3>
      <p>Our website includes the following accessibility features:</p>

      <h4 className="text-lg font-medium text-gray-800 mt-4">
        Navigation & Structure
      </h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>Consistent navigation throughout the site</li>
        <li>Clear heading hierarchy for easy content scanning</li>
        <li>Skip-to-content links for keyboard users</li>
        <li>Descriptive page titles and section headings</li>
      </ul>

      <h4 className="text-lg font-medium text-gray-800 mt-4">Visual Design</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Sufficient color contrast ratios for text and interactive elements
        </li>
        <li>Text can be resized up to 200% without loss of functionality</li>
        <li>No content flashes more than three times per second</li>
        <li>Focus indicators for keyboard navigation</li>
      </ul>

      <h4 className="text-lg font-medium text-gray-800 mt-4">Content</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>Alternative text for images and non-text content</li>
        <li>Clear and simple language</li>
        <li>Meaningful link text</li>
        <li>Error identification and suggestions for form inputs</li>
      </ul>

      <h4 className="text-lg font-medium text-gray-800 mt-4">
        Assistive Technology Support
      </h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>Compatible with screen readers (NVDA, JAWS, VoiceOver)</li>
        <li>Keyboard-only navigation support</li>
        <li>ARIA landmarks and labels where appropriate</li>
        <li>Support for browser zoom and text-only zoom</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Known Limitations
      </h3>
      <p>
        While we strive to adhere to WCAG 2.1 Level AA, we acknowledge that
        there may be some limitations. We are actively working to address:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Some older PDF documents may not be fully accessible</li>
        <li>
          Third-party content or applications may not meet the same
          accessibility standards
        </li>
        <li>
          Some complex interactive features may have limited accessibility
          support
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Browser & Assistive Technology Compatibility
      </h3>
      <p>Our website is designed to be compatible with the following:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Recent versions of Chrome, Firefox, Safari, and Edge</li>
        <li>
          Screen readers: NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS),
          TalkBack (Android)
        </li>
        <li>Voice recognition software</li>
        <li>Screen magnification software</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Feedback & Contact
      </h3>
      <p>
        We welcome your feedback on the accessibility of Renuir. If you
        encounter accessibility barriers or have suggestions for improvement,
        please contact us:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Email:</strong> accessibility@renuir.com
        </li>
        <li>
          <strong>Mail:</strong> Renuir UG (haftungsbeschränkt), Accessibility
          Team, Hönower Wiesenweg 57, 10318 Berlin, Germany
        </li>
      </ul>
      <p className="mt-4">
        We try to respond to accessibility feedback within 2 business days and
        aim to resolve issues within 10 business days.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Assessment & Review
      </h3>
      <p>
        We regularly assess our website for accessibility compliance through:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Automated accessibility testing tools</li>
        <li>Manual testing with assistive technologies</li>
        <li>Periodic third-party accessibility audits</li>
        <li>User feedback and testing</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Legal Compliance
      </h3>
      <p>
        This statement is part of our commitment to comply with applicable
        accessibility laws and regulations, including:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Americans with Disabilities Act (ADA)</li>
        <li>Section 508 of the Rehabilitation Act</li>
        <li>European Accessibility Act (EAA)</li>
        <li>EN 301 549 (European Standard)</li>
      </ul>
    </>
  );
}
