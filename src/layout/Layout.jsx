import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
