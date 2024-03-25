"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleSubmit = async (loginForm: FormData) => {
    const result = await signIn("credentials", {
      email: loginForm.get("email") as string,
      password: loginForm.get("password") as string,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <main className="h-screen w-full flex items-center justify-center">
      
        <div className="md:w-[60%] w-full bg-slate-100 md:rounded-r-lg rounded-lg p-6 flex flex-col justify-center items-center">
          <h1 className={`text-4xl pb-10 font-extrabold text-center text-black`}>Login</h1>
          <form className="w-full" action={handleSubmit}>
            <div className="p-4 space-y-2">
              <label htmlFor="email" className={`text-xl text-black`}> Email </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="p-4 space-y-2">
              <label className={`text-xl text-black`}>Password</label>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-[40%] font-serif text-white bg-primary hover:bg-primaryHover my-2"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
    </main>
  );
}
