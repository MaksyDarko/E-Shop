import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";

const fetchProducts = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!response.ok) {
    throw new Error("Products not fetched");
  }
  return response.json();
};

const Products = () => {

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"], 
    queryFn: fetchProducts,
  });


  if (isLoading) {
    return <div className="text-center text-gray-800">Loading products...</div>;
  }


  if (isError) {
    return (
      <div className="text-center text-red-600">
        Failed to load products: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.title,
              price: product.price,
              image: product.images?.[0] || "/images/placeholder.png",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
