"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function LoginModal() {
  const handleGoogleLogin = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        shape="round"
        // colorScheme="indigo_300_indigo_100"
        className="w-full min-w-[154px] max-w-[154px] rounded-[24px] px-[34px] font-bold sm:px-5 bg-gradient-to-r from-indigo-300 to-indigo-100"
        >Getting start</Button>
      </DialogTrigger>
      <DialogContent className="bg-white-0 rounded-[20px] p-10">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to ProfNITT</DialogTitle>
          <DialogDescription>
            Welcome to ProfNITT
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleGoogleLogin}>
          <Image
            src="/images/google.png"
            className=" mr-4"
            width={25}
            height={25}
            alt="google"
          />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
