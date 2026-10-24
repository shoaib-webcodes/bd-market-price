
"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import toast from "react-hot-toast";

const UserSignInUpInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);
    const [isSigningOut, setIsSigningOut] = useState(false);

    const handleSignOut = async () => {
        if (isSigningOut) return;

        setIsSigningOut(true);

        try {
            await authClient.signOut();
            setIsOpen(false);
            toast.success("Logged out successfully!");
        } catch {
            toast.error("Failed to log out. Please try again.");
        } finally {
            setIsSigningOut(false);
        }
    };

    return (
        <>
            {user ? (
                <div className="relative">
                    {/* User Dropdown Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-label="Toggle user menu"
                        className="flex items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-gray-100 sm:px-3"
                    >
                        {/* User Avatar */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                            {user.name?.charAt(0).toUpperCase() || "U"}
                        </div>

                        {/* User Name */}
                        <span className="hidden max-w-32 truncate text-sm font-medium text-gray-700 sm:block">
                            {user.name || "User"}
                        </span>

                        {/* Dropdown Arrow */}
                        <svg
                            className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <>
                            {/* Mobile Backdrop */}
                            <button
                                type="button"
                                aria-label="Close user menu"
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 z-40 cursor-default bg-black/10 sm:bg-transparent"
                            />

                            <div className="absolute right-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                                {/* User Information */}
                                <div className="border-b border-gray-100 bg-gray-50 px-4 py-4">
                                    <p className="truncate font-semibold text-gray-800">
                                        {user.name || "User"}
                                    </p>

                                    <p className="mt-1 truncate text-sm text-gray-500">
                                        {user.email || "No email available"}
                                    </p>
                                </div>

                                {/* Menu Items */}
                                <div className="p-2">
                                    <Link
                                        href="/profile"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.1a7.5 7.5 0 0115 0A17.9 17.9 0 0112 22.5a17.9 17.9 0 01-7.5-2.4z"
                                            />
                                        </svg>

                                        <span>Profile</span>
                                    </Link>

                                    <Link
                                        href="/settings"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.5 6h3m-3 12h3m-9-6h15M5.25 4.5h13.5A1.75 1.75 0 0120.5 6.25v11.5a1.75 1.75 0 01-1.75 1.75H5.25a1.75 1.75 0 01-1.75-1.75V6.25A1.75 1.75 0 015.25 4.5z"
                                            />
                                        </svg>

                                        <span>Settings</span>
                                    </Link>
                                </div>

                                {/* Sign Out */}
                                <div className="border-t border-gray-100 p-2">
                                    <button
                                        type="button"
                                        onClick={handleSignOut}
                                        disabled={isSigningOut}
                                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 15l3-3m0 0l-3-3m3 3H9"
                                            />
                                        </svg>

                                        <span>
                                            {isSigningOut
                                                ? "Signing out..."
                                                : "Sign Out"}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <nav className="flex items-center gap-3 sm:gap-6">
                    <Link
                        href="/sign-in"
                        className="text-xs font-medium text-gray-700 transition hover:text-emerald-600 sm:text-sm"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="rounded-md bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:px-4 sm:text-sm"
                    >
                        সাইন আপ
                    </Link>
                </nav>
            )}
        </>
    );
};

export default UserSignInUpInfo;
