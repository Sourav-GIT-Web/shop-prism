"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();

  const crumbs = ["Home", ...segments];

  return (
    <nav className="text-sm text-gray-500 flex gap-2">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i === 0 ? (
            <Link href="/">{c}</Link>
          ) : (
            <>
              › <span className="capitalize">{c}</span>
            </>
          )}
        </span>
      ))}
    </nav>
  );
}