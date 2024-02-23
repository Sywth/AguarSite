"use client";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

type BodyProvidersProps = {
  children?: React.ReactNode;
};
const BodyProviders: React.FC<BodyProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      {children}
      <Toaster />
    </ThemeProvider>
  );
};

export { BodyProviders };
