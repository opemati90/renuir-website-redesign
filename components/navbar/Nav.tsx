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
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-200 shadow-sm">
      <div className="app-container flex justify-between items-center py-3 md:py-4">
        <Link href="/">
          <Image
            src={Logo}
            alt="Renuir Logo"
            width={90}
            height={90}
            className="w-[70px] sm:w-[90px] h-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                className={clsx(
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-primary"
                    : "text-foreground hover:text-primary-700",
                  "px-4 font-semibold"
                )}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <Link href="/#waitlist" className="hidden lg:block">
            <Button variant="default" className="rounded-lg font-semibold shadow-sm hover:shadow-md transition-shadow">
              Join waitlist
            </Button>
          </Link>
        </div>

        {/* Button */}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
