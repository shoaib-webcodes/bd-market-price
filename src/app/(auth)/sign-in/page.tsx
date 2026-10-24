
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 




  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Connect your authentication API here.
    console.log({ email, password });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f1f6f1] px-4 py-10">
      <div className="w-full max-w-100">
        {/* Heading */}
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#202820]">
            সাইন ইন
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            বিস্তারিত দাম, বাজার তুলনা ও টুলকিট দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </header>

        {/* Sign In Card */}
        <section className="rounded-2xl border border-gray-200/80 bg-white/75 p-5 shadow-sm sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-800"
              >
                ইমেইল
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            
                required
                className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-gray-800"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               
                required
                className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Error */}
            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#078b42] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#067536] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-[0.99]"
            >
              সাইন ইন
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-0.5 flex-1 bg-gray-400" />
            <span className="text-xs text-gray-600">অথবা</span>
            <div className="h-0.5 flex-1 bg-gray-400" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() =>
                setError("Google sign-in এখনো সংযুক্ত করা হয়নি।")
              }
              className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-2 py-2.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              {/* Google Icon */}
              <svg
                viewBox="0 0 48 48"
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                  transform="translate(3 4)"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.73 7.18l7.63 5.92c4.45-4.1 7.14-10.14 7.14-17.57Z"
                  transform="translate(-1 0)"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.9 23.9 0 0 0 0 21.56l7.98-6.19Z"
                  transform="translate(3 0)"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.91-5.78l-7.63-5.92c-2.12 1.42-4.89 2.26-8.28 2.26-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                  transform="translate(3 0)"
                />
              </svg>

              <span>Google দিয়ে চালিয়ে যান</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setError("GitHub sign-in এখনো সংযুক্ত করা হয়নি।")
              }
              className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-2 py-2.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              {/* GitHub Icon */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 fill-current"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.23-5.12 5.5.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>

              <span>GitHub দিয়ে চালিয়ে যান</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-[#078b42] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </section>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-600 transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
