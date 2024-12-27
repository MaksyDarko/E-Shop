import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-gray-700 text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <NavLink
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Go Back to Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
