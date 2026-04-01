"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/lib/products";
import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/navigation";

export const ProductDetails = ({ product }: { product: Product }) => {
  const { addItem } = useCartStore();
  const router = useRouter();

  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdding(true);

    // optimistic UI update
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    // Fake short delay for UX
    setTimeout(() => {
      setAdding(false);
      setAdded(true);
    }, 300);
  };

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-md object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="text-2xl text-primary font-semibold">${product.price}</p>

        <p className="text-gray-700 dark:text-gray-300">
          A premium quality {product.name}. Perfect for comfort and style.
        </p>

        {/* Add to Cart Button */}
        {!added ? (
          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-60"
            disabled={adding}
          >
            {adding ? "Adding..." : "Add to cart"}
          </button>
        ) : (
          <div className="flex gap-4 mt-4">
            <span className="text-green-600 font-medium">✓ Added to cart</span>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => router.push("/cart")}
            >
              Go to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};