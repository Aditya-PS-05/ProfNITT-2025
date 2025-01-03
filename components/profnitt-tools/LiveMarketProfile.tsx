import {Text, Separator, Heading, Img } from "@/components/Tools";
import { Button } from "../ui/button";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  marketTitle?: React.ReactNode;
  descriptionText?: React.ReactNode;
  actionButtonText?: string;
}

export default function LiveMarketProfile({
  userImage = "img_image_202x202.png",
  marketTitle = "Live Market Testing",
  descriptionText = "Experiment with advanced quant strategies directly on live markets to see real-time results.",
  actionButtonText = "TRY IT NOW",
  ...props
}: Props) {
  return (
    <div 
      {...props}
      className={`${props.className} flex flex-col items-center w-[24%] md:w-full p-[22px] sm:p-5 rounded-[40px] bg-gradient6 mb-20`}
    >
      <div className="mx-5 self-stretch rounded-[100px] bg-black-900_51">
        <Img
          src={userImage}
          width={202}
          height={202}
          alt="Live Market"
          className="mt-2 h-[202px] w-full rounded-[100px] object-cover"
        />
      </div>
      <Heading size="headings" as="h4" className="mt-[18px] text-[24px] font-bold text-white-0">
        {marketTitle}
      </Heading>
      <Separator orientation="horizontal" className="mt-3 h-px w-[50%] bg-indigo-100_54" />
      <Text 
      // size="txtxs" 
      as="p" className="mt-5 w-full text-[12px] font-normal leading-5 text-white-0">
        {descriptionText}
      </Text>
      <Button
        shape="round"
        // colorScheme="indigo_300_indigo_100"
        className="mb-4 mt-[46px] w-full min-w-[154px] max-w-[154px] rounded-[24px] px-[34px] font-bold sm:px-5"
      >
        {actionButtonText}
      </Button>
    </div>
  );
}