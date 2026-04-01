// Create product category list component that shows all categories and links to category page
'use client';
import { getProductCategories } from "@/lib/products";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductCategory = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const cats = await getProductCategories();
            setCategories(cats);
        };
        fetchCategories();
    }, []);

    return (
        <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
                <Link
                    key={category}
                    href={`/products/category/${category}`}
                    className="block text-lg font-medium text-gray-700 hover:text-blue-500"
                >
                    {/* Tiles for ${category} */}
                    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold capitalize">{category}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductCategory;