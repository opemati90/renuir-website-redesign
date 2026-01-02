import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Renuir",
  description: "Legal imprint information for Renuir UG",
};

export default function ImprintPage() {
  return (
    <div className="max-w-3xl space-y-12 py-10">
      <section className="space-y-4">
        <Typography variant="h1" className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Imprint
        </Typography>
        <div className="w-16 h-1 bg-primary-600 rounded-full" />
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Information according to § 5 TMG</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            <strong className="text-gray-900">Renuir UG (haftungsbeschränkt)</strong>
            <br />
            Hönower Wiesenweg 57
            <br />
            10318 Berlin
            <br />
            Germany
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Contact</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Email: <a href="mailto:info@renuir.com" className="text-primary-600 hover:underline">info@renuir.com</a>
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Register Entry</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Registered in the Commercial Register (Handelsregister)
            <br />
            Register Court: Amtsgericht Berlin-Charlottenburg
            <br />
            Registration Number: HRB [pending]
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">VAT ID</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            VAT identification number according to § 27a Umsatzsteuergesetz:
            <br />
            [pending registration]
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Responsible for Content (§ 55 Abs. 2 RStV)</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Renuir UG (haftungsbeschränkt)
            <br />
            Hönower Wiesenweg 57
            <br />
            10318 Berlin, Germany
          </p>
        </div>

        <div className="space-y-4 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">EU Dispute Resolution</h3>
          <p className="text-gray-600 leading-relaxed text-base">
            The European Commission provides a platform for online dispute
            resolution (OS):{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-bold underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="text-gray-500 text-sm italic">
            We are not willing or obliged to participate in dispute resolution
            proceedings before a consumer arbitration board.
          </p>
        </div>
      </section>
    </div>
  );
}
