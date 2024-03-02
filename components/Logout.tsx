// components/Logout.tsx

"use client";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await signOut();
        router.push("/login");
      }}
      className="bg-gray-500 text-white p-2 rounded my-2 hover:bg-gray-700"
    >
      Sign out
    </button>
  );
}