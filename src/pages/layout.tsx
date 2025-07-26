import { type MetaFunction, Outlet } from "react-router";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

// Layout Meta - Basic HTML meta tags
export const meta: MetaFunction = () => {
  return [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charset: "utf-8" },

    // PWA & Mobile
    { tagName: "link", rel: "manifest", href: "/manifest.json" },
    {
      tagName: "link",
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.png",
    },
    { tagName: "link", rel: "apple-touch-icon", href: "/logo.png" },

    // Performance optimizations
    {
      tagName: "link",
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    { tagName: "link", rel: "dns-prefetch", href: "https://fonts.gstatic.com" },

    // Security
    { name: "referrer", content: "origin-when-cross-origin" },
  ];
};

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
