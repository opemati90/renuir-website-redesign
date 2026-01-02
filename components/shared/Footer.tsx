import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/images/renuir-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#050810] text-gray-400">
      <div className="app-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-4 space-y-10">
            <Link href="/" className="inline-block">
              <Image
                src={Logo}
                alt="Renuir Logo"
                width={110}
                height={38}
                className="w-[100px] h-auto"
              />
            </Link>

            <p className="max-w-sm text-base leading-relaxed text-gray-400 font-medium">
              A professional platform dedicated to reuniting owners with their lost belongings through automated matching and a secure network of partner venues.
            </p>

            <div className="space-y-4 text-sm">
              <div className="space-y-1">
                <p className="text-gray-200 font-bold">Renuir UG (haftungsbeschränkt)</p>
                <p className="text-gray-500 font-medium tracking-tight">Hönower Wiesenweg 57, 10318 Berlin, Germany</p>
              </div>
              <p>
                <Link href="mailto:info@renuir.com" className="text-gray-400 hover:text-white transition-colors font-medium">
                  info@renuir.com
                </Link>
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <Link href="https://twitter.com/renuir" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="https://linkedin.com/company/renuir" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="https://instagram.com/renuir" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-1" />

          {/* Product */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-black text-white mb-8 uppercase tracking-[0.2em]">Product</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li>
                <Link href="/#features" className="text-gray-500 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-500 hover:text-white transition-colors">How it Works</Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-500 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-500 hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-black text-white mb-8 uppercase tracking-[0.2em]">Partners</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li>
                <Link href="/partner" className="text-gray-500 hover:text-white transition-colors">Become a Partner</Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-500 hover:text-white transition-colors">Safety Guidelines</Link>
              </li>
              <li>
                <a href="mailto:info@renuir.com" className="text-gray-500 hover:text-white transition-colors">Contact Partnerships</a>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[11px] font-black text-white mb-8 uppercase tracking-[0.2em]">Stay Updated</h4>
            <p className="text-sm font-medium text-gray-500 leading-relaxed">
              Join our waitlist to be the first to know when we launch in new locations.
            </p>
            <Link href="/#waitlist" className="block">
              <button className="w-full h-12 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm shadow-lg shadow-primary-600/20 transition-all active:scale-[0.98]">
                Join waitlist
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium text-gray-600">
          <p>© 2025 Renuir. All rights reserved.</p>

          <div className="flex items-center gap-8">
            <Link href="/imprint" className="hover:text-white transition-colors">Imprint</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
