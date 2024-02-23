import Link from "next/link";
import React from "react";
import NavbarSignInOut from "./NavbarSignInOut";
import NavbarUserInfo from "./NavbarUserInfo";
import Logo from "../../../public/svgs/Logo";

export type NavbarProps = React.HTMLProps<HTMLDivElement> & {};
export const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex justify-between items-start">
        <Link
          className="flex flex-row justify-center items-center hover:bg-zinc-500 pr-4"
          href="/"
        >
          <Logo className="h-12 w-12 px-3" />
          <div className="text-2xl font-medium  duration-75">Aguar</div>
        </Link>
        <NavbarSignInOut />
      </div>
      <NavbarUserInfo className="pb-4 font-mono group" />
    </div>
  );
};
