

"use client";

import { useState } from "react";
import { authClient } from "../../lib/auth-client";

export default function ProfilePage() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await authClient.updateUser({
                name,
            });

            if (error) {
                alert(error.message);
                return;
            }

            alert("Name updated successfully!");
        } catch {
            alert("Failed to update name.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="text-center space-y-3 text-2xl md:text-3xl mt-3 md:mt-5" >
                <h1>Update User Information</h1>
            </div>
            <form onSubmit={handleUpdate} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 h-100">
                <div>
                    <label htmlFor="name" className="mb-2 block font-medium">
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-emerald-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white disabled:opacity-50"
                >
                    {loading ? "Updating..." : "Update Name"}
                </button>
            </form>
        </div>

    );
}