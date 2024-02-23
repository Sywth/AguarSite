"use client";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../ThemeToggle";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

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
      <Link
        className={
          `mx-4 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-50 dark:hover:text-black ` +
          (isSignedIn ? "line-through" : "")
        }
        href="/sign-in"
      >
        sign in
      </Link>
      <Link
        className={
          `mx-4 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-50 dark:hover:text-black ` +
          (isSignedIn ? "line-through" : "")
        }
        href="/sign-up"
      >
        sign up
      </Link>
      <button
        className={
          `mx-4 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-50 dark:hover:text-black ` +
          (isSignedIn ? "" : "line-through")
        }
        onClick={handleSignOut}
      >
        sign out
      </button>

      <ThemeToggle className="px-4 mx-4 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-50 dark:hover:text-black cursor-pointer" />
    </div>
  );
};

export default NavbarSignInOut;
