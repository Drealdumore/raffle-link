"use client";

import { auth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Nav = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <header className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
      <Link href="/">
        <div className="md:text-xl select-none font-cal flex justify-center  gap-1 text-neutral-800">
          <LinkIcon />
          <p>RaffleLink.</p>
        </div>
      </Link>

      {/* TODO  - ADD THE CLERK USER ICON IF AUTHENTICATED OR CREATE MY OWN */}
      {/* DO NOT SHOW THE CREATE RAFFLE WHEN PATHNAME === '/SIGN-IN' && '/SIGN-UP */}

      <nav className="flex gap-6">
        {!isAuth ? (
          <Link
            href="/sign-in"
            className="p-2 bg-neutral-900 rounded-md flex justify-center items-center gap-2 transition-all hover:bg-zinc-800 text-white"
          >
            Create Raffle
          </Link>
        ) : (
          <>
            <Link href="/profile">
              <li>Profile</li>
            </Link>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </>
        )}
      </nav>
    </header>
  );
};

export default Nav;

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-neutral-800"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );
}
