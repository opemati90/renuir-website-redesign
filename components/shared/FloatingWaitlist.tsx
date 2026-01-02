"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FloatingWaitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed it
    const dismissed = localStorage.getItem("renuir-floating-waitlist-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show after scrolling past hero section
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) {
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
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-600 rounded-xl shadow-2xl px-6 py-4 flex items-center justify-between gap-4">
          <p className="text-white font-medium text-base md:text-lg">
            Ready to join the waitlist?
          </p>
          
          <div className="flex items-center gap-3">
            <Link href="/#waitlist">
              <Button
                size="sm"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg px-6 h-10"
              >
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

