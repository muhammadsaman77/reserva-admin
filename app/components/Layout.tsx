import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/Sidebar";
export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1  p-8 bg-gray-100 text-black">
        <Outlet />
      </main>
    </div>
  );
}
