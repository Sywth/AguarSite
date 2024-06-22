import Link from "next/link";
import React from "react";
import NavbarSignInOut from "./NavbarSignInOut";
import NavbarUserInfo from "./NavbarUserInfo";
import Logo from "../../../public/svgs/Logo";
import NavbarQuickLinks from "./NavbarQuickLinks";
import { cn } from "@/lib/utils";
import TextDivider from "../TextDivider";
import { hover_tw_css } from "../style_constants";

type NavbarLogoProps = {
  className?: string;
};
const NavbarLogo: React.FC<NavbarLogoProps> = ({ className }) => {
  return (
    <Link
      className={cn("flex flex-row  items-center ", className, hover_tw_css)}
      href="/"
    >
      <Logo className="h-12 w-12 px-3" />
      <TextDivider className="pr-1" />
      <div className="flex flex-row text-2xl space-x-4">
        <NavbarUserInfo className="" />
        <div className="">Aguar</div>
      </div>
    </Link>
  );
};

export type NavbarProps = React.HTMLProps<HTMLDivElement> & {};
export const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex justify-between items-start ">
        <div>
          <NavbarLogo />
          <NavbarQuickLinks />
        </div>

        <div>
          <NavbarSignInOut />
        </div>
      </div>
    </div>
  );
};
