import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/images/renuir-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#0b1220] to-[#060b16] text-gray-400">
      <div className="app-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white font-semibold">
              <Image
                src={Logo}
                alt="Renuir Logo"
                width={90}
                height={90}
                className="w-[70px] sm:w-[90px] h-auto"
              />
            </div>

            <p className="max-w-md text-sm leading-relaxed">
              Renuir is a trusted platform connecting finders and owners of lost
              items, making it easy to reunite people with their belongings. We
              provide a secure, efficient way for individuals to report, find,
              and return lost items, using smart matching and AI technology.
            </p>

            <div className="mt-6 text-sm space-y-1">
              <p>Renuir UG (haftungsbeschränkt)</p>
              <p>Hönower Wiesenweg 57</p>
              <p>10318 Berlin, Germany</p>
              <p className="mt-3">
                <Link href="mailto:info@renuir.com" className="hover:text-white transition-colors">
                  info@renuir.com
                </Link>
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-6 text-gray-300">
              <Link href="https://twitter.com/renuir" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com/company/renuir" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com/renuir" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
              </Link>
              <Link href="https://tiktok.com/@renuir" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg className="h-4 w-4 cursor-pointer hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#waitlist" className="hover:text-white transition-colors">Join Waitlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <a href="mailto:info@renuir.com" className="hover:text-white transition-colors">Contact Support</a>
              </li>
              <li>
                <Link href="/safety" className="hover:text-white transition-colors">Safety Tips</Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white transition-colors">Partner with Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2025 Renuir UG (haftungsbeschränkt). All rights reserved.</span>

          <div className="flex gap-6">
            <Link href="/imprint">Imprint</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
