"use client";

import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const VerifyButton = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleVerify = async () => {
    const verifyEmailToken = searchParams.get("token");
    try {
      const res = await fetch("/api/user/verifyemail", {
        method: "POST",
        body: JSON.stringify({ verifyEmailToken }),
      });
      const data = await res.json();

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        className="px-6 py-4 w-full rounded-sm hover:bg-black hover:text-white border border-black hover:border-black transition-all duration-300 text-xl"
        onClick={handleVerify}
      >
        Click here to verify
      </button>
    </div>
  );
};

export default VerifyButton;
