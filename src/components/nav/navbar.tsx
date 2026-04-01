"use client";

import Link from "next/link";
import { useState } from "react";
import { MiniCart } from "../cart/mini-cart";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-black/50 backdrop-blur-md border-b">
      <div className="max-w mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-bold">
          Shop Prism
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary" aria-current="page">Home</Link>
          <Link href="/products" className="hover:text-primary" aria-current="page">Products</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <MiniCart />
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </nav>
  );
}