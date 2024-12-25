"use client";

// import { Button, Input, Text, Heading, Img, Separator } from "@/components/ui";
import { Button } from "../ui/button";
import { Input } from "../Tools/Input";
import { Text } from "../Tools/Text";
import { Heading } from "../Tools/Heading";
import { Img } from "../Tools/Img";
import { Separator } from "../ui/separator";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex px-10 sm:px-5 bg-blue_gray-900_01`}>
      <div className="mb-12 flex w-full flex-col gap-11">
        <Separator orientation="horizontal" className="h-px rounded-[1px] bg-white-1" />
        <div className="flex items-center justify-between gap-5 md:flex-col">
          <div className="flex w-[44%] flex-col items-start gap-[42px] md:w-full">
            <Heading 
              size="headings"
              as="h4"
              className="ml-1 font-poppins text-[24px] font-semibold text-white-0 md:ml-0 md:text-[22px]"
            >
              ProfNIITT TOOLS
            </Heading>
            <div className="flex items-center gap-[30px] self-stretch sm:flex-col">
              <div className="flex flex-1 gap-2.5 sm:self-stretch">
                <Img src="img_settings.svg" width={14} height={30} alt="Settings" className="h-[30px]" />
                <Heading
                  size="body_bold_18px"
                  as="h6"
                  className="font-poppins text-[18px] font-semibold text-white-0"
                >
                  ProfNIITT Tools 2024
                </Heading>
              </div>
              <Link href="#">
                <Heading
                  size="body_bold_18px"
                  as="h6"
                  className="font-poppins text-[18px] font-semibold text-white-0"
                >
                  Privacy policy
                </Heading>
              </Link>
              <Link href="#">
                <Heading
                  size="body_bold_18px"
                  as="h6"
                  className="font-poppins text-[18px] font-semibold text-white-0"
                >
                  Cookies policy
                </Heading>
              </Link>
            </div>
          </div>
          <div className="flex w-[42%] flex-col items-start gap-3.5 self-end md:w-full">
            <Text size="body_18px" as="p" className="font-poppins text-[18px] font-normal text-white-0">
              Updates right to your Inbox
            </Text>
            <div className="flex gap-6 self-stretch sm:flex-col">
              <Input
                size="xs"
                variant="fill"
                colorScheme="blue_gray_900_03"
                placeholder="Email Address"
                className="flex-grow rounded-[14px] px-[30px] font-poppins sm:px-5"
              />
              <Button
                size="sm"
                // variant="fill"
                // colorScheme="deep_purple_100"
                className="w-full min-w-[174px] max-w-[174px] rounded-[14px] px-[34px] font-poppins sm:px-5"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}