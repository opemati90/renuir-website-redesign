"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Nav from "@/components/navbar/Nav";
import { Footer } from "@/components/shared/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 md:pt-48 pb-24">
        <div className="app-container">
          <div className="mb-12">
            <button
              onClick={handleBack}
              className="flex items-center gap-2.5 text-gray-500 hover:text-primary-600 font-bold transition-all group"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 border border-gray-100 group-hover:bg-primary-50 group-hover:border-primary-100 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <span>Back to home</span>
            </button>
          </div>
          
          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
