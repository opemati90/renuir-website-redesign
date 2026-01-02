"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/Renuirlogo-1.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { menuItems } from "../utils/data/menuItems";
import MobileNav from "./MobileNav";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-50 border-b border-gray-100 shadow-sm">
      <div className="app-container flex justify-between items-center py-4">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Image
            src={Logo}
            alt="Renuir Logo"
            width={100}
            height={32}
            className="w-auto h-8 md:h-9"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-2">
          {menuItems.map((item, index) => (
              <Link
              key={index}
                href={item.href}
                className={clsx(
                "px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
          ))}
          
          <div className="w-px h-6 bg-gray-200 mx-4" />
          
          <Link href="/#waitlist">
            <Button variant="default" className="px-6 rounded-xl font-bold bg-gray-900 hover:bg-black text-white shadow-md transition-all duration-200 active:scale-[0.98]">
              Join waitlist
            </Button>
          </Link>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
