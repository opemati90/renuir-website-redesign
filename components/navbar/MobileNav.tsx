/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { menuItems } from "../utils/data/menuItems";
import { Typography } from "@/components/ui/typography";

const MobileNav = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  return (
    <section className="lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <button aria-label="Open menu" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu size={24} className="text-gray-700" />
          </button>
        </SheetTrigger>

        <SheetContent side="top" className="w-full">
          <SheetHeader className="text-left">
            <SheetTitle className="mt-6 mb-8 flex flex-wrap justify-end">
                <Link href="/#waitlist">
                <Button variant="outline" size="sm">Join waitlist</Button>
              </Link>
            </SheetTitle>

            <div className="flex flex-col space-y-4 pb-6">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <Link href={item.href}>
                    <Typography
                      variant="h3"
                      as="div"
                      className={clsx(
                        pathname === item.href ||
                          pathname.startsWith(item.href + "/")
                          ? "text-primary-600"
                          : "text-foreground hover:text-gray-500",
                        "font-medium"
                      )}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
