import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow sm:ml-[250px]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
