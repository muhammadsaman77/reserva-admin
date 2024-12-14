// routes/index.tsx
import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return redirect("/admin");
};

export default function Index() {
  return null; // Tidak ada tampilan karena selalu di-redirect
}
