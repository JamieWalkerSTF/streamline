import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: sessionData } = useSession();
  return (
    <>
      <Link href="/">Index</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/setup/new-workspace">New Workspace</Link>
      <button
        className="bg-blue-500"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </>
  );
}

export default Header;
