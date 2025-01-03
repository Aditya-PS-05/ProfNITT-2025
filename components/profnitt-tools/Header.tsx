import {Heading, Menubar, MenubarContent, MenubarMenu, MenubarTrigger, Img } from "@/components/Tools";
import { Button } from "../ui/button";
import React from "react";

import Link from "next/link";
import { CustomUser } from "../../app/api/auth/[...nextauth]/options";
import LoginModal from "../auth/LoginModel";

export default function Header({ user }: { user: CustomUser | null }) {
  return (
    <div
      className={`flex md:flex-col justify-between items-start ml-11 mr-[86px] gap-5 md:mx-0 border-2 border-red-500`}
    >
      <Img
        src="img_image.png"
        width={244}
        height={114}
        alt="Image"
        className="mb-2.5 h-[114px] w-[18%] object-contain md:w-full"
      />
      <div className="mx-[50px] flex w-full max-w-[1000px] items-start justify-between gap-5 self-end md:flex-col md:px-5">
        <Menubar className="m-2 flex flex-wrap gap-[60px] border-none md:gap-5">
          <MenubarMenu>
            <MenubarTrigger>
              <Heading size="headingxs" as="p" className="text-[12px] font-bold text-white-0 self-center">
                ABOUT
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Heading size="headingxs" as="p" className="text-[12px] font-bold text-white-0">
                SERVICES
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Heading size="headingxs" as="p" className="text-[12px] font-bold text-white-0">
                TOOLS
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Heading size="headingxs" as="p" className="text-[12px] font-bold text-white-0">
                EXPLORE
              </Heading>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <div className="flex w-[40%] justify-between gap-5 self-center md:w-full">
          <Button
            variant="outline"
            shape="round"
            className="w-full min-w-[154px] max-w-[154px] rounded-[24px] !border-2 px-8 font-bold sm:px-5"
          >
            <p className="text-white-0">SIGN UP</p>
          </Button>
          <Button
            shape="round"
            // colorScheme="indigo_300_indigo_100"
            className="w-full min-w-[154px] max-w-[154px] rounded-[24px] px-[34px] font-bold sm:px-5 bg-gradient-to-r from-indigo-300 to-indigo-100"
          >
            Login
          </Button>
          {!user ? <LoginModal /> : <Link href="/dashboard">Dashboard</Link>}
        </div>
      </div>
    </div>
  );
}