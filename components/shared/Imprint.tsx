import { Typography } from "@/components/ui/typography";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Renuir",
  description: "Legal imprint information for Renuir UG",
};

export default function ImprintPage() {
  return (
    <>
      <Typography variant="h2" className="mb-8 text-black">
        Imprint
      </Typography>

      <h3 className="text-xl font-semibold text-gray-900">
        Information according to § 5 TMG
      </h3>
      <p>
        <strong>Renuir UG (haftungsbeschränkt)</strong>
        <br />
        Hönower Wiesenweg 57
        <br />
        10318 Berlin
        <br />
        Germany
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Contact</h3>
      <p>Email: info@renuir.com</p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Register Entry
      </h3>
      <p>
        Registered in the Commercial Register (Handelsregister)
        <br />
        Register Court: Amtsgericht Berlin-Charlottenburg
        <br />
        Registration Number: HRB [pending]
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">VAT ID</h3>
      <p>
        VAT identification number according to § 27a Umsatzsteuergesetz:
        <br />
        [pending registration]
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        Responsible for Content (§ 55 Abs. 2 RStV)
      </h3>
      <p>
        Renuir UG (haftungsbeschränkt)
        <br />
        Hönower Wiesenweg 57
        <br />
        10318 Berlin, Germany
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        EU Dispute Resolution
      </h3>
      <p>
        The European Commission provides a platform for online dispute
        resolution (OS):{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700"
        >
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
      <p className="mt-2">
        We are not willing or obliged to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </p>
    </>
  );
}
