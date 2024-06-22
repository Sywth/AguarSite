"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { button_tw_css } from "../style_constants";
import { cn } from "@/lib/utils";

type NavbarUserInfoProps = React.HTMLProps<HTMLDivElement> & {};

const NavbarUserInfo: React.FC<NavbarUserInfoProps> = ({
  className,
  ...props
}) => {
  const { user, isSignedIn } = useUser();
  return (
    <>
      {isSignedIn && (
        <div className="flex flex-row space-x-4">
          <div children="[" className="italic font-mono" />
          <div
            className={cn("", className)}
            children={`user ${user?.username}`}
          />
          <div children="]" className="italic font-mono" />
          <div children="~" className="font-mono" />
        </div>
      )}
    </>
  );
};

export default NavbarUserInfo;
