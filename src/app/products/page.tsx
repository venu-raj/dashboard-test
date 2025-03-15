import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { loadEnv } from "@/lib/envLoader";

export default function Products() {
  const { PRODUCTS } = loadEnv();
  const products = JSON.parse(PRODUCTS);

  return (
    <div>
      <Navbar />
      <header className="text-center py-10 bg-gray-700 text-white">
        <h1 className="text-3xl font-bold">Available Products</h1>
      </header>
      <main className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </main>
    </div>
  );
}
