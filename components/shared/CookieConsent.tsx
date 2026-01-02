"use client";
import React, { useState, useEffect } from "react";
import { Cookie, X, Settings } from "lucide-react";
import Link from "next/link";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("renuir-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("renuir-cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const consentData = {
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("renuir-cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const consentData = {
      essential: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("renuir-cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-8 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-gray-100 overflow-hidden">
          {!showPreferences ? (
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="hidden md:flex w-16 h-16 bg-primary-50 rounded-2xl items-center justify-center shrink-0 border border-primary-100">
                  <Cookie className="w-8 h-8 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">
                    We value your privacy
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    We use cookies to enhance your browsing experience and analyze our traffic. By clicking
                    &quot;Accept All&quot;, you consent to our use of cookies.
                    Read our{" "}
                    <Link
                      href="/cookies"
                      className="text-primary-600 hover:text-primary-700 font-bold underline"
                    >
                      Cookie Policy
                    </Link>{" "}
                    for more information.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 md:flex-none px-8 py-4 bg-gray-900 text-white rounded-xl font-black text-sm hover:bg-black transition-all shadow-lg active:scale-[0.98]"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex-1 md:flex-none px-8 py-4 bg-gray-50 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  { id: "essential", title: "Essential Cookies", desc: "Required for the website to function properly.", locked: true },
                  { id: "analytics", title: "Analytics Cookies", desc: "Help us understand how visitors interact with our site." },
                  { id: "functional", title: "Functional Cookies", desc: "Enable enhanced functionality and personalization." }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                    {item.locked ? (
                      <div className="px-4 py-1.5 bg-gray-200 text-gray-600 rounded-lg text-xs font-black uppercase tracking-widest">
                        Always On
                      </div>
                    ) : (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences[item.id as keyof typeof preferences]}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              [item.id]: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[20px] after:w-[20px] after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 px-8 py-4 bg-gray-900 text-white rounded-xl font-black text-sm hover:bg-black transition-all shadow-lg active:scale-[0.98]"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
