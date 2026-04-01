import { getFilteredProductsAdvanced } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";
import { SearchInput } from "@/components/ui/search-input";

export default async function ProductsPage({
  searchParams
}) {
  const { search } = await searchParams;
  const products = await getFilteredProductsAdvanced({
    search: search
  });

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <SearchInput />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}