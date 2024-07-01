"use client";
import Link from "next/link";
import React from "react";
import { button_tw_css } from "../../lib/styleConstants";
import TextDivider from "../TextDivider";

type NavbarSignInOutProps = React.HTMLProps<HTMLDivElement> & {};

const NavbarSignInOut: React.FC<NavbarSignInOutProps> = ({
  className,
  ...props
}) => {
  return (
    <div className="flex flex-row justify-end font-mono pl-4 pb-4 pt-2 text-xs md:text-xl space-x-2">
      <Link className={button_tw_css} href="/dashboard/persona">
        Persona
      </Link>
      <TextDivider />
      <Link className={button_tw_css} href="/dashboard/gather">
        Gather
      </Link>
      <TextDivider />
      <Link className={button_tw_css} href="/dashboard/playground">
        Playground
      </Link>
      <TextDivider />
      <Link className={button_tw_css} href="/dashboard/api-dashboard">
        API
      </Link>
    </div>
  );
};

export default NavbarSignInOut;
