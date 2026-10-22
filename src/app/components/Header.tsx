import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import Navlinks from "./Navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

// 1. Create a small async component that performs the dynamic work
async function CurrentDate() {
    await connection();

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
    });

    return <>{date}</>;
}

const Header = () => {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between ">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white text-[5px] p-2">
                        
                            <FontAwesomeIcon
                                icon={faSeedling}
                            
                            />
                
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span className="text-2xl font-bold leading-5 text-gray-900">
                            বাজার দর
                        </span>
                        <span className="text-xl leading-3 text-gray-500">
                            {/* 2. Wrap the dynamic component in Suspense */}
                            <Suspense
                                fallback={
                                    <span className="text-xl leading-3 text-gray-500">
                                        তারিখ লোড হচ্ছে...
                                    </span>
                                }
                            >
                                <CurrentDate />
                            </Suspense>
                        </span>
                    </div>
                </Link>

                <nav className="flex items-center gap-4 sm:gap-6">
                    <Link
                        href="/login"
                        className="text-xs font-medium text-gray-700 hover:text-emerald-600 sm:text-sm"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/register"
                        className="rounded-md bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:px-4 sm:text-sm"
                    >
                        সাইন আপ
                    </Link>
                </nav>
            </div>

            {/* Navlinks */}
            <Suspense fallback={<p>Loading</p>}>
                <Navlinks></Navlinks>
            </Suspense>
        </header>
    );
};

export default Header;