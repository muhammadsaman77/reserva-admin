import { json, redirect } from "@remix-run/react";
import { logout } from "~/services/auth";

export const loader = async () => {
  try {
    await logout();
    return redirect("/login");
  } catch (error) {
    return json({ error: (error as Error).message, status: 400 });
  }
};
