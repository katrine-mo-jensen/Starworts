import { Outlet } from "react-router-dom";
import { Navigation } from "../components/nav/Navigation";
import { Footer } from "../components/footer/Footer";

export const Layout = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
};
