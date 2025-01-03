import {Img, Text, Heading } from "@/components/Tools";
import { Button } from "../ui/button";
import React from "react";

export default function EmpowermentSection() {
  return (
    <>
      <div className="px-[52px] md:px-5">
        <div className="flex flex-col items-center">
          <div className="ml-14 flex h-[302px] items-start justify-center self-stretch rounded-[150px] bg-[url(/images/img_mask_group.png)] bg-cover bg-no-repeat px-14 py-[88px] md:ml-0">
            <div className="mb-[18px] flex flex-col items-center gap-[18px]">
              <Heading as="h5" className="text-[36px] font-bold text-white-0 md:text-[34px] sm:text-[32px]">
                Empowering innovation in quantitative finance
              </Heading>
              <Text size="text5xl" as="p" className="text-[36px] font-light text-white-0 md:text-[34px] sm:text-[32px]">
                BY ProfNITT.
              </Text>
            </div>
          </div>
          <Button
            size="lg"
            // variant="fill"
            shape="circle"
            // colorScheme="black_900_51"
            className="relative mt-[-50px] w-[80px] h-[80px] rounded-[50%] px-5 bg-gradient1"
          >
            <Img src="img_checkmark.svg" width={60} height={60} />
          </Button>
        </div>
      </div>
    </>
  );
}