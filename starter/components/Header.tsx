// components/Header.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-8 px-24 flex items-center justify-between bg-black">
      <div>
        <Image
          src="/logos.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
    <nav className="flex gap-8">
        <Link href="/" legacyBehavior>
            <a className="text-white hover:text-gray-300">Home</a>
        </Link>
        <Link href="/listing" legacyBehavior>
            <a className="text-white hover:text-gray-300">Profile</a>
        </Link>
        <Link href="/submit" legacyBehavior>
            <a className="text-white hover:text-gray-300">Login</a>
        </Link>
    </nav>
    </header>
  );
}
