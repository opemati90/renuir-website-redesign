"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FloatingWaitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("renuir-floating-waitlist-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 1000 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("renuir-floating-waitlist-dismissed", "true");
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-6 md:p-10 animate-slide-up pointer-events-none">
      <div className="max-w-xl mx-auto pointer-events-auto">
        <div className="bg-gray-900 rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] p-2 pl-6 flex items-center justify-between gap-4 border border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <p className="text-white font-black text-sm tracking-tight hidden sm:block">
              Ready to recover your items?
            </p>
            <p className="text-white font-black text-sm tracking-tight sm:hidden">
              Join the waitlist
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Link href="/#waitlist">
              <Button
                size="sm"
                className="bg-white text-gray-900 hover:bg-gray-100 font-black rounded-2xl px-6 h-12 shadow-xl active:scale-[0.98] transition-all"
              >
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <button
              onClick={handleDismiss}
              className="text-gray-500 hover:text-white transition-colors p-3 rounded-2xl"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
