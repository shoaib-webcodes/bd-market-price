import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import Navlinks from "./Navlinks";
import { SiCardmarket } from "react-icons/si";
import UserSignInUpInfo from "./UserSignInUpInfo";

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
        <header className="w-full border-b border-gray-200 bg-white pt-5 ">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between ">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white text-lg p-3">
                        
                          BD
                
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span className="text-xl md:text-2xl font-bold leading-5 text-gray-900">
                           বাজার দর
                        </span>
                        <span className="text-md md:text-xl leading-3 text-gray-500">
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

              {/* User Information related sign in and sign up */}

              <UserSignInUpInfo></UserSignInUpInfo>
            
            </div>

            {/* Navlinks */}
            <Suspense fallback={<p>Loading</p>}>
                <Navlinks></Navlinks>
            </Suspense>
        </header>
    );
};

export default Header;