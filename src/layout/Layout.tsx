import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
