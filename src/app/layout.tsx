import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BodyProviders } from "@/lib/BodyProviders";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar/Navbar";
import Content from "@/components/Content";
import React from "react";
import { TanstackProviders } from "@/lib/TanstackProviders";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aguar",
  description:
    "A host of tools to give the level control between the population and government",
};

type BodyProps = {
  children: React.ReactNode;
};
const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <body
      className={cn(
        inter.className,
        "text-grey text-stone-900 dark:text-zinc-50 bg-zinc-50 dark:bg-black"
      )}
    >
      <BodyProviders>
        <Navbar className="px-4 pt-4 bg-stone-100 dark:bg-slate-950 sticky top-0 z-10" />
        <main className="text-5xl">
          <Content>{children}</Content>
        </main>
      </BodyProviders>
    </body>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <TanstackProviders>
        <html lang="en">
          <Body>{children}</Body>
        </html>
      </TanstackProviders>
    </ClerkProvider>
  );
}
