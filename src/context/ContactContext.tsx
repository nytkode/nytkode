"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ContactModal } from "@/components/ContactModal";

interface ContactContextType {
  openContact: (subject?: string) => void;
  closeContact: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);

  const openContact = (sub?: string) => {
    setSubject(sub);
    setIsOpen(true);
  };

  const closeContact = () => {
    setIsOpen(false);
    setSubject(undefined);
  };

  return (
    <ContactContext.Provider value={{ openContact, closeContact }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={closeContact}
        defaultSubject={subject}
      />
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};
