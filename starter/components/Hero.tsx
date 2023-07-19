// components/Hero.js
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow bg-black-900">
      <div className="flex items-center justify-center">
        <Image
          src="/banner.jpg"
          alt="Hero Image"
          width={800}
          height={300}
          className="object-cover"
        />
      </div>
    </main>
  );
}
