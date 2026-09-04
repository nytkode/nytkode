import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  variant?: "dark" | "light" | "auto";
}

export const NytKodeLogo: React.FC<LogoProps> = ({
  className = "",
  size = 52,
  variant = "auto",
}) => {
  if (variant === "light") {
    return (
      <div
        className={`inline-flex items-center shrink-0 select-none ${className}`}
        style={{ height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nytkode-white.svg"
          alt="NytKode Logo"
          style={{ height: size, width: "auto" }}
          className="block object-contain"
        />
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div
        className={`inline-flex items-center shrink-0 select-none ${className}`}
        style={{ height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nytkode-no-bg.svg"
          alt="NytKode Logo"
          style={{ height: size, width: "auto" }}
          className="block object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center shrink-0 select-none ${className}`}
      style={{ height: size }}
    >
      {/* Light background (default): black logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/nytkode-no-bg.svg"
        alt="NytKode Logo"
        style={{ height: size, width: "auto" }}
        className="block dark:hidden object-contain"
      />
      {/* Dark background: white logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/nytkode-white.svg"
        alt="NytKode Logo"
        style={{ height: size, width: "auto" }}
        className="hidden dark:block object-contain"
      />
    </div>
  );
};
