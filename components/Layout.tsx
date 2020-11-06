import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="container">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold border-b-4 border-black">
          <Link href="/">MVP Starter</Link>
        </h1>
        <button className="px-6 py-2 font-medium uppercase border-2 border-orange-600 rounded-md hover:text-white hover:bg-orange-600">
          Sign up
        </button>
      </header>

      {children}

      <footer className="flex items-center justify-center p-4 space-x-4 border border-t">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/twitter.svg" width={30} height={30} />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/facebook.svg" width={30} height={30} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/instagram.svg" width={30} height={30} />
        </a>
      </footer>
    </div>
  );
}
