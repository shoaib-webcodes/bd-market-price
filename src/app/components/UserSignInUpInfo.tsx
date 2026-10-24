
'use client'
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import toast from "react-hot-toast";




const UserSignInUpInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log("User after sign up",user);

    const handleSignOut = async () => {
        await authClient.signOut();
        toast.success("Log out successfully!")
    }
    return (

        <>
        {
            user ?
           <div className="relative group">
  <button className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
      {user.name?.charAt(0).toUpperCase()}
    </div>
    <span>{user.name}</span>
  </button>

  <div className="absolute right-0 top-full z-50 mt-2 hidden w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg group-hover:block">
    <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
      <p className="font-semibold text-gray-800">{user.name}</p>
      <p className="truncate text-sm text-gray-500">{user.email}</p>
    </div>

    <div className="p-2">
      <Link
        href="/profile"
        className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Profile
      </Link>

      <Link
        href="/settings"
        className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Settings
      </Link>

      <button
        onClick={handleSignOut}
        className="w-full rounded-lg px-4 py-2 text-left text-red-600 hover:bg-red-50"
      >
        Sign Out
      </button>
    </div>
  </div>
</div>
            :
            <nav className="flex items-center gap-4 sm:gap-6">
                    <Link
                        href="/sign-in"
                        className="text-xs font-medium text-gray-700 hover:text-emerald-600 sm:text-sm"
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
        }
        </>
          



    );
};

export default UserSignInUpInfo;