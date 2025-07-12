import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-between px-6 py-4 bg-transparent text-gray-700 dark:text-gray-300 text-sm mt-16">
      <div className="text-left flex-1">&copy; {new Date().getFullYear()} Gaia. All rights reserved.</div>
      <div className="flex gap-4">
        <Link href="/cookies-policy" className="hover:underline">Cookies Policy</Link>
        <Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
      </div>
    </footer>
  );
} 