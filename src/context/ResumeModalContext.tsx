"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ResumeModalContextType {
  isResumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType>({
  isResumeOpen: false,
  openResume: () => {},
  closeResume: () => {},
});

export function ResumeModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  // Keyboard shortcut: Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isResumeOpen) {
        closeResume();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResumeOpen]);

  // Lock scroll on background when modal is open
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isResumeOpen]);

  return (
    <ResumeModalContext.Provider
      value={{ isResumeOpen, openResume, closeResume }}
    >
      {children}
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  return useContext(ResumeModalContext);
}
