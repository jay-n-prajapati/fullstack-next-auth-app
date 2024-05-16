"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (formdata: FormData) => {
    const email = formdata.get("email");
    const password = formdata.get("password");
    if (!email || !password) {
      toast.error("All fields are required");
    }
    const res = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      router.push("/profile");
      return;
    }
    toast.error(data.message);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-[40vw] border border-[#b2b2b2] rounded-md p-8 shadow-xl flex flex-col gap-6">
        <form action={handleLogin} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              className="border border-[#b2b2b2] p-2 w-full rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="enter your password"
                className="border border-[#b2b2b2] p-2 w-full rounded-sm"
              />
            </div>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 w-full rounded-sm hover:bg-white border border-transparent hover:text-black hover:border-black transition-all duration-300 font-semibold">
              Log In
            </button>
          </div>
        </form>
        <div>
          <p className="text-center">
            Do not have an account ?{" "}
            <span className="text-blue-500">
              <Link href="/signup">SignUp</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
