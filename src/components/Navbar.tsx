import Link from "next/link";
import { loadEnv } from "@/lib/envLoader";

export default function Navbar() {
  const { SITE_NAME } = loadEnv();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">{SITE_NAME}</Link>
      <div className="space-x-4">
        <Link href="/upload" className="hover:underline">Upload `.env`</Link>
        <Link href="/products" className="hover:underline">Products</Link>
      </div>
    </nav>
  );
}
