"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/Renuirlogo-1.svg";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { menuItems } from "../utils/data/menuItems";

const MobileNav = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-gray-900">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l border-gray-100">
          <div className="flex flex-col h-full bg-white">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <Image
                src={Logo}
                alt="Renuir Logo"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
              <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                <X className="h-6 w-6 text-gray-500" />
              </Button>
            </div>

            <nav className="flex-1 px-4 py-8">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setSheetOpen(false)}
                      className={clsx(
                      "flex items-center px-4 py-4 rounded-xl text-lg font-bold transition-colors",
                      pathname === item.href
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      {item.name}
                  </Link>
                ))}
                </div>
            </nav>

            <div className="p-6 border-t border-gray-50">
              <Link href="/#waitlist" onClick={() => setSheetOpen(false)}>
                <Button className="w-full h-14 rounded-2xl font-black text-lg bg-gray-900 hover:bg-black text-white shadow-xl">
                  Join waitlist
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
