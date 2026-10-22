


"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    if (password !== confirmPassword) {
      setError("দুটি পাসওয়ার্ড মিলছে না।");
      return;
    }

    // Connect your signup API here.
    console.log({ name, email, password });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f1f6f1] px-4 py-10">
      <div className="w-full max-w-[380px]">
        {/* Heading */}
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#202820]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            বিনামূল্যে সাইন আপ করে সব ফিচার ব্যবহার করুন
          </p>
        </div>

        {/* Signup Card */}
        <div className="rounded-xl border border-gray-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-gray-800"
              >
                নাম
              </label>

              <input
                id="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
                className="w-full rounded-md border border-[#e1e9e1] bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

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
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="w-full rounded-md border border-[#e1e9e1] bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
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
                placeholder="কমপক্ষে ৮ অক্ষর"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-md border border-[#e1e9e1] bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-gray-800"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="আবার লিখুন"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
                className="w-full rounded-md border border-[#e1e9e1] bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#078b42] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#067536] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-[0.99]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-400" />
            <span className="text-xs text-gray-600">অথবা</span>
            <div className="h-px flex-1 bg-gray-400" />
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setError("Google OAuth এখনো সংযুক্ত করা হয়নি।")}
              className="flex items-center justify-center gap-1.5 rounded-md border border-gray-200 px-2 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <span className="font-bold text-base text-[#4285F4]">G</span>
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={() => setError("GitHub OAuth এখনো সংযুক্ত করা হয়নি।")}
              className="flex items-center justify-center gap-1.5 rounded-md border border-gray-200 px-2 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.23-5.12 5.5.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-4 text-center text-xs text-gray-600">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/log-in"
              className="font-semibold text-[#078b42] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-xs text-gray-600 transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
