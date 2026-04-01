// Create a search input component that allows users to search for products
// Search input should:

// Update URL based on query
// Trigger a rerender of /products page
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";

export const SearchInput = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/products?search=${encodeURIComponent(query)}`);
    }

    return (
        <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="border rounded-lg px-3 py-1 text-sm"
            />
            <Button type="submit" variant={"default"}>Search</Button>
        </form>
    );
}