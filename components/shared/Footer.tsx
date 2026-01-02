import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/images/renuir-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="app-container py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-5 pr-0 md:pr-20">
            <Link href="/" className="inline-block mb-8 transition-opacity hover:opacity-90">
              <Image
                src={Logo}
                alt="Renuir Logo"
                width={110}
                height={32}
                className="h-8 md:h-9 w-auto"
              />
            </Link>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              A professional platform dedicated to reuniting owners with their lost belongings through automated matching and a secure network of partner venues.
            </p>

            <div className="mt-10 space-y-2 text-sm">
              <p className="text-gray-300 font-bold">Renuir UG (haftungsbeschränkt)</p>
              <p>Hönower Wiesenweg 57, 10318 Berlin, Germany</p>
              <p className="pt-2">
                <a href="mailto:info@renuir.com" className="text-primary-400 hover:text-primary-300 font-bold transition-colors">
                  info@renuir.com
                </a>
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 mt-10">
              {[
                { icon: Twitter, href: "https://twitter.com/renuir", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com/company/renuir", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/renuir", label: "Instagram" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-4 text-base">
              <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Partners</h4>
            <ul className="space-y-4 text-base">
              <li><Link href="/partner" className="hover:text-white transition-colors">Become a Partner</Link></li>
              <li><Link href="/safety" className="hover:text-white transition-colors">Safety Guidelines</Link></li>
              <li><a href="mailto:partnerships@renuir.com" className="hover:text-white transition-colors">Contact Partnerships</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-sm mb-6 leading-relaxed">Join our waitlist to be the first to know when we launch in new locations.</p>
            <Link href="/#waitlist">
              <Button className="w-full h-12 rounded-xl font-bold bg-primary-600 hover:bg-primary-500 text-white transition-all">
                Join waitlist
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 mt-20 pt-10 flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
          <span className="text-gray-500">© 2025 Renuir. All rights reserved.</span>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-medium">
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
