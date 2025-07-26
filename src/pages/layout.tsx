import { Outlet } from "react-router";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <main className="container py-8 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
