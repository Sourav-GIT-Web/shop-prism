"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function FilterSidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [min, setMin] = useState(searchParams.get("min") || "");
    const [max, setMax] = useState(searchParams.get("max") || "");
    const [sort, setSort] = useState(searchParams.get("sort") || "");

    const applyFilters = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (min) params.set("min", min);
        else params.delete("min");

        if (max) params.set("max", max);
        else params.delete("max");

        if (sort) params.set("sort", sort);
        else params.delete("sort");

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <aside className="flex flex-col gap-4">
            <div>
                <label className="block text-sm">Min Price</label>
                <input
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                    className="border rounded px-2 py-1 w-full"
                />
            </div>

            <div>
                <label className="block text-sm">Max Price</label>
                <input
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    className="border rounded px-2 py-1 w-full"
                />
            </div>

            <div>
                <label className="block text-sm">Sort</label>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border rounded px-2 py-1 w-full"
                >
                    <option value="">Relevance</option>
                    <option value="price_asc">Price (low to high)</option>
                    <option value="price_desc">Price (high to low)</option>
                    <option value="newest">Newest</option>
                </select>
            </div>

            <button
                onClick={applyFilters}
                className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
                Apply Filters
            </button>
        </aside>
    );
}