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
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    signOut().then(() => {
      router.push("/");
    });
  };

  return (
    <div className="flex flex-row justify-end font-mono">
      <ThemeToggle className={cn(button_tw_css, `px-4 cursor-pointer`)} />

      <div>|</div>
      {!isSignedIn && (
        <>
          <Link className={button_tw_css} href="/sign-in">
            sign in
          </Link>
          <TextDivider className="pr-1" />
          <Link className={button_tw_css} href="/sign-up">
            sign up
          </Link>
        </>
      )}
      {isSignedIn && (
        <button className={button_tw_css} onClick={handleSignOut}>
          sign out
        </button>
      )}
    </div>
  );
};

export default NavbarSignInOut;
