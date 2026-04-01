"use client";

// Home Page design
import { Button } from "@/components/ui/button";
import ProductCategory from "@/components/ui/product-category";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
            <div className="relative w-full h-96 mb-10">
                <Image
                    src="/hero-banner.jpg"
                    alt="Hero Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Shop Prism</h1>
                    <p className="text-lg mb-6">Your one-stop shop for all your needs</p>
                    <Button className="text-black" variant="outline" onClick={() => router.push('/products')}>Shop Now</Button>
                </div>
            </div>
            <div className="p-2 text-center w-full">
                <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
                <ProductCategory />
            </div>
        </main>
    );
}