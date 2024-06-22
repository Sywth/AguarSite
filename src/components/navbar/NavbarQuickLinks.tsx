"use client";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../ThemeToggle";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { button_tw_css } from "../style_constants";
import TextDivider from "../TextDivider";

type NavbarSignInOutProps = React.HTMLProps<HTMLDivElement> & {};

const NavbarSignInOut: React.FC<NavbarSignInOutProps> = ({
  className,
  ...props
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-end font-mono pl-4 pb-4 pt-2 text-xl ">
      <Link className={button_tw_css} href="/persona">
        Persona
      </Link>
      <TextDivider />
      <Link className={button_tw_css} href="/gather">
        Gather
      </Link>
      <TextDivider />
      <Link className={button_tw_css} href="/playground">
        Playground
      </Link>
      <TextDivider />
      <Link className={button_tw_css} href="/api-dashboard">
        API
      </Link>
    </div>
  );
};

export default NavbarSignInOut;
