"use server";

import { cookies } from "next/headers";


// sign up user

export const signup = async (formdata: FormData) => {
  const username = formdata.get("username");
  const email = formdata.get("email");
  const password = formdata.get("password");
  const cpassword = formdata.get("cpassword");

  if (!username || !email || !password || !cpassword) {
    return "all fields are required";
  }

  if (password !== cpassword) {
    return "password must match";
  }

  const user = {
    username,
    email,
    password,
  };

  const res = await fetch("http://localhost:3000/api/user/signup", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = await res.json();

  return data.message;
};

// export const login = async (formdata: FormData) => {
//   const email = formdata.get("email");
//   const password = formdata.get("password");
//   if (!email || !password) {
//     return"all fields are required";
//   }
//   const res = await fetch("http://localhost:3000/api/user/login", {
//     method: "POST",
//     body: JSON.stringify({email , password}),
//   });
//   const data = await res.json();
//   return data;
// };

export const getUser = async () => {
  const res = await fetch("http://localhost:3000/api/user/profile", {
    method : 'POST',
    body: JSON.stringify({ token: cookies().get("token") }),
  });
  const data = await res.json();
  return data;
};
