// components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-24 bg-black text-white">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 justify-center">
          {/* Footer menu items */}
        </div>
        <div className="text-gray-300 text-sm mt-8">
          © 2023 Web Titans. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
