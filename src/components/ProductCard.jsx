import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";
const ProductCard = ({ product, isOnCart }) => {
  const { addLocalStorageStateValue } = useLocalStorage("cartItems", []);

  const handleAddToCart = () => {
    addLocalStorageStateValue(product);
  };
  const notify = () => toast("Product added to cart!");

  return (
    <div className="border rounded-lg shadow-lg hover:shadow-xl transition p-4 bg-white">
      <img
        src={product.image || "/images/placeholder.png"}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      {!isOnCart && (
        <button
          onClick={() => {
            handleAddToCart();
            notify();
          }}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
