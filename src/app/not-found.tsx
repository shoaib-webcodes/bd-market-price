
import React from 'react';
import Link from "next/link";
import { Home, SearchX } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <SearchX size={80} className="mb-4 text-emerald-500" />

      <h1 className="text-7xl font-extrabold text-gray-800">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-700">
        Page Not Found!
      </h2>

      <p className="mt-2 max-w-md text-gray-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        <Home size={20} />
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;