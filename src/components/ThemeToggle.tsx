"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { toast } from "./ui/use-toast";

const ThemeToggle = ({ className }: { className: string }) => {
  const { theme, setTheme } = useTheme();

  // We have do this because of SSR and hydration issues caused by useTheme
  const [themeText, setThemeText] = useState<"dark" | "light">("dark");
  useEffect(() => {
    setThemeText(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <div
      className={className}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        toast({
          title: "Changed Theme",
          description: `Theme is now ${theme === "dark" ? "light" : "dark"}`,
        });
      }}
    >
      theme is {" " + themeText}
    </div>
  );
};

export default ThemeToggle;
