import Breadcrumbs from "@/components/nav/breadcrumbs";
import { ProductDetails } from "@/components/ui/product-details";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) return notFound();

    return (
        <div className="px-6 py-10">
            <Breadcrumbs />
            <ProductDetails product={product} />
        </div>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProductById(id);

    return {
        title: `${product?.name} – Shop Prism`,
        description: `Buy ${product?.name} for $${product?.price}. High-quality apparel.`,
        openGraph: {
            title: product?.name,
            images: [product?.image],
        },
    };
}