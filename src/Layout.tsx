import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
