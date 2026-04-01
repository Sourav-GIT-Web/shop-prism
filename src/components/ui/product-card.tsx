import Image from "next/image";
import { Product } from "@/lib/products";

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        // modify the card with clickable link to product details page
        <a href={`/products/${product.id}`} className="block">
            <div className="rounded-xl border p-4 hover:shadow-lg transition">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-md object-cover"
                />
                <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
            </div>
        </a>
    );
};