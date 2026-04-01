"use client";

import Link from "next/link";

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50">
      <div className="w-64 bg-white dark:bg-black h-full p-6 shadow-xl">
        <button onClick={onClose} className="mb-4">✕</button>

        <nav className="flex flex-col gap-4 ml-[-24px] p-6 bg-white dark:bg-black shadow-lg rounded-lg w-64">
          <Link href="/" onClick={onClose}>Home</Link>
          <Link href="/products" onClick={onClose}>Products</Link>
        </nav>
      </div>
    </div>
  );
}