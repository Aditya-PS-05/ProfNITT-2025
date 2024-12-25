import {Heading, Menubar, MenubarContent, MenubarMenu, MenubarTrigger, Img } from "@/components/Tools";
import { Button } from "../ui/button";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-start ml-11 mr-[86px] gap-5 md:mx-0`}
    >
      <Img
        src="img_image.png"
        width={244}
        height={114}
        alt="Image"
        className="mb-2.5 h-[114px] w-[18%] object-contain md:w-full"
      />
      <div className="mx-auto flex w-full max-w-[874px] items-start justify-between gap-5 self-end md:flex-col md:px-5">
        <Menubar className="mt-3.5 flex flex-wrap gap-[60px] border-none md:gap-5">
          <MenubarMenu>
            <MenubarTrigger>
              <Heading size="headingxs" as="p" className="text-[12px] font-bold text-white-0">
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
            SIGN UP
          </Button>
          <Button
            shape="round"
            // colorScheme="indigo_300_indigo_100"
            className="w-full min-w-[154px] max-w-[154px] rounded-[24px] px-[34px] font-bold sm:px-5"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}