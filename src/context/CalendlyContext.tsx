"use client";

import React, { createContext, useContext, useEffect, ReactNode } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

interface CalendlyContextType {
  openCalendly: (url?: string) => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Ensure native Calendly assets are available in DOM
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    if (!document.getElementById("calendly-widget-js")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = (url = "https://calendly.com/nytkode/30min") => {
    if (typeof window === "undefined") return;

    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      window.Calendly.initPopupWidget({ url });
    } else {
      // If script is still loading, wait for it or inject and run
      const existingScript = document.getElementById("calendly-widget-js") as HTMLScriptElement;
      if (existingScript) {
        existingScript.addEventListener("load", () => {
          window.Calendly?.initPopupWidget({ url });
        });
      } else {
        const script = document.createElement("script");
        script.id = "calendly-widget-js";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
          window.Calendly?.initPopupWidget({ url });
        };
        document.body.appendChild(script);
      }
    }
  };

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
};

