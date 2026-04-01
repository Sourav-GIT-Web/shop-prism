'use client';
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";

export default function CartPage() {
    const { items, removeItem } = useCartStore();

    if (items.length === 0) {
        return (
            <div className="px-6 py-10">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                <p className="text-gray-600 mt-4">Your cart is currently empty.</p>
            </div>
        );
    }

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="px-6 py-10">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            <div className="flex flex-col gap-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-start gap-4">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="rounded-md object-cover"
                        />
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-600">${item.price} × {item.quantity}</p>
                            <button
                                className="text-sm text-red-600 mt-2"
                                onClick={() => removeItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <div className="border-t pt-4">
                    <p className="text-xl font-semibold">Total: ${total}</p>
                </div>
            </div>
        </div>
    );
}