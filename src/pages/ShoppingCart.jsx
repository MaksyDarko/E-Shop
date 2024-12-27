import useLocalStorage from "../hooks/useLocalStorage";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";

const ShoppingCart = () => {
  const {
    localStorageValue: cartItems,
    clearStorage,
    updateQuantity,
    removeFromLocalStorage,
  } = useLocalStorage("cartItems", []);

  const handleClearCart = () => {
    clearStorage();
    toast("All products removed from cart!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isOnCart={true}
              updateQuantity={updateQuantity}
              removeFromLocalStorage={removeFromLocalStorage}
            />
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default ShoppingCart;
