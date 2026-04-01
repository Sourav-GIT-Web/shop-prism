import { getFilteredProductsAdvanced } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";
import FilterSidebar from "@/components/filters/filter-sidebar";

export default async function CategoryPage({ params, searchParams }) {

    const { category } = await params;
    const { search, min, max, sort } = await searchParams;
    const products = await getFilteredProductsAdvanced({
        category: category,
        search: search,
        minPrice: min,
        maxPrice: max,
        sort: sort
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10 px-6 py-10">
            <FilterSidebar />
            <div>
                <h1 className="text-2xl font-bold capitalize mb-4">
                    {category}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}