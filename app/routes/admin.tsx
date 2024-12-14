import Sidebar from "~/components/Sidebar";
import { Outlet, redirect } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

import { checkAuth } from "~/services/auth";

export const loader: LoaderFunction = async () => {
  const auth = await checkAuth();

  if (!auth) {
    return redirect("/login");
  }

  return {
    roles: auth.roles,
  };
};

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1  p-8 bg-gray-100 text-black">
        <Outlet />
      </main>
    </div>
  );
}
