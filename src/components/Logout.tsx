"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Logout = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    const res = await fetch("/api/user/logout");
    const data = await res.json();
    router.push("/login");
    toast.success(data.message);
  };
  return (
    <button
      className="px-3 py-2 w-full my-3 rounded-sm hover:bg-black hover:text-white border border-black hover:border-black transition-all duration-300 text-md"
      onClick={handleLogOut}
    >
      logout
    </button>
  );
};

export default Logout;
