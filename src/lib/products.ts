import products from "@/data/products.json";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const getAllProducts = async (): Promise<Product[]> => {
  return products as Product[];
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  return products.find((p) => p.id === id);
};

export const getProductCategories = async () => {
  const categories = new Set<string>();
  products.forEach((p) => {
    if (p.category) {
      categories.add(p.category);
    }
  });
  return Array.from(categories);
};

export const getFilteredProductsAdvanced = async ({
  category,
  search,
  minPrice,
  maxPrice,
  sort
}) => {
  let result = [...products];

  // Filter category
  if (category) {
    result = result.filter((p) => p.category === category);
  }

  // Search
  if (search) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Price filters
  if (minPrice) result = result.filter((p) => p.price >= Number(minPrice));
  if (maxPrice) result = result.filter((p) => p.price <= Number(maxPrice));

  // Sorting
  if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
  if (sort === "newest") result.sort((a, b) => b.id - a.id);

  return result;
};