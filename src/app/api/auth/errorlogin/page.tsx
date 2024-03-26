"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { FunctionComponent } from "react";

const Signout: FunctionComponent = () => {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className={`text-4xl pb-10 font-extrabold text-center text-white`}>ERROR PLEASE LOGIN<Image src="/img/image-11@2x.png" alt="Your Image" width={400} height={400} /></h1>
      
      <Button
        type="button"
        className="w-[10%] font-serif text-black bg-yellow-500 hover:bg-yellow-600 my-2"
        
      >
        Login
      </Button>
    </main>
  );
};

export default Signout;
