"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

type NavbarUserInfoProps = React.HTMLProps<HTMLDivElement> & {};

const NavbarUserInfo: React.FC<NavbarUserInfoProps> = ({ ...props }) => {
  const x = useUser();
  return (
    <div {...props}>
      signed in as
      <div className="px-4 group-hover:text-slate-400 duration-100 italic inline-block">
        {x.isSignedIn ? x.user.fullName : "anon"}
      </div>
    </div>
  );
};

export default NavbarUserInfo;
