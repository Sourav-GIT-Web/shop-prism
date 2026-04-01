"use client";

import { useCartStore } from "@/store/cart-store";

export function MiniCart() {
    const { items } = useCartStore();

    return (
        <div className="relative">
            <a href="/cart" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
                🛒 {items.length}
            </a>
        </div>
    );
}