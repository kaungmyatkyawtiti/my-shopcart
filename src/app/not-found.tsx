import Link from "next/link";
import { History } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-6xl sm:text-7xl font-extrabold text-destructive mb-6 animate-bounce-slow">
        404
      </h1>

      <p className="mb-8 text-lg sm:text-xl text-foreground animate-fade-in">
        Oops! The page you’re looking for does not exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-shop-violet hover:bg-shop-violet/80 font-semibold rounded-lg shadow transform hover:scale-105"
      >
        <span className="text-white flex items-center gap-1">
          <History size={20} />
          Go Back
        </span>
      </Link>

      <span className="absolute top-10 left-10 text-text text-3xl animate-pulse">
        ★
      </span>

      <span className="absolute bottom-10 right-10 text-5xl animate-pulse">
        ✨
      </span>
    </div>
  );
}
