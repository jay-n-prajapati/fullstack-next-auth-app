"use client";
import { signup } from "@/lib/actions";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  message : ''
}

const SignUpPage = () => {
  // const [state , formAction] = useFormState(signup , initialState)
  // const [user, setUser] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSignUp = async () => {
  //   if (!user.username || !user.password || !user.email) {
  //     toast.error("Fields Can't be empty");
  //     return;
  //   }

  //   try {
  //     const res = await fetch("/api/user/signup", {
  //       method : 'POST',
  //       body: JSON.stringify(user),
  //     });
  //     const data = await res.json();
  //     toast.success(data.message)
  //   } catch (error: any) {
  //     toast.error(error.message);
  //   }
  // };

  const userSignUp = async (formdata : FormData) => {
      const response = await signup(formdata)
      toast.success(response)
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="w-[40vw] border border-[#b2b2b2] rounded-md p-8 shadow-xl flex flex-col gap-6">
        <form action={userSignUp} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              // value={user.username}
              // onChange={handleChange}
              placeholder="enter your name"
              className="border border-[#b2b2b2] p-2 w-full rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={user.email}
              // onChange={handleChange}
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
                // value={user.password}
                // onChange={handleChange}
                placeholder="enter your password"
                className="border border-[#b2b2b2] p-2 w-full rounded-sm"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="cpassword">Confirm Password</label>
            <div>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                // value={user.password}
                // onChange={handleChange}
                placeholder="enter your password"
                className="border border-[#b2b2b2] p-2 w-full rounded-sm"
              />
            </div>
          </div>
        <div>
          <button
            className="bg-black text-white px-4 py-2 w-full rounded-sm hover:bg-white border border-transparent hover:text-black hover:border-black transition-all duration-300 font-semibold"
            // onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        </form>
        <div>
          <p className="text-center">
            Already have an account ?{" "}
            <span className="text-blue-500">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
