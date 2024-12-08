import Sidebar from "~/components/Sidebar";
import { Outlet, redirect } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { auth } from "~/services/firebase";
import { getUserSnapshot } from "~/services/auth";

export const loader: LoaderFunction = async () => {
  const user = auth.currentUser;

  if (!user) {
    return redirect("/login");
  }
  const userSnapshot = await getUserSnapshot(user.uid);
  if (userSnapshot.exists()) {
    return {
      roles: userSnapshot.data().roles,
    };
  }
  return null;
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
