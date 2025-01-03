import React, { Suspense } from 'react';
import { Heading, Img, Text } from "@/components/Tools";
import { Button } from '../ui/button';
import LocationProfile from "../../components/profnitt-tools/LocationProfile";

const contactInfoList = [
  { locationTitle: "Location", locationDescription: "ProfNIIT Club NIT Trichy, Tamil Nadu, India" },
  { locationTitle: "Location", locationDescription: "ProfNIIT Club NIT Trichy, Tamil Nadu, India" },
  { locationTitle: "Location", locationDescription: "ProfNIIT Club NIT Trichy, Tamil Nadu, India" }
];

export default function ProfNIITToolsSection() {
  return (
    <div className="absolute bottom-2.5 left-0 right-0 mx-auto flex flex-1 flex-col items-center">
      <div className="flex w-full max-w-[1274px] flex-col gap-[88px] md:gap-[66px] md:px-5 sm:gap-11">
        <div className="relative h-[454px] content-center md:h-auto">
          <div className="flex flex-1 items-start justify-center md:flex-col">
            <Text
              size="text4xl"
              as="p"
              className="ml-[-107px] z-[1] mt-[122px] !font-ppsupplymono text-[35px] font-normal tracking-[-1.05px] md:text-[33px] sm:text-[31px]"
            >
              Finance and Investments club of NIT Trichy
            </Text>
            <div className="relative ml-[-88px] flex self-center rounded-bl-[226px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[100px] bg-black-900_21 p-3.5">
              <Img
                src="img_image_426x490.png"
                width={490}
                height={426}
                alt="Image"
                className="h-[426px] w-full rounded-bl-[212px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[100px] object-cover md:h-auto"
              />
            </div>
          </div>
          <div className="absolute mt-[40px] bottom-[0%] left-0 right-0 z-[2] mx-auto flex flex-1 flex-col gap-[120px] md:gap-[90px] sm:gap-[60px]">
            <Text
              as="p"
              className="!font-poppins text-[25px] font-normal leading-8 tracking-[-0.75px] md:text-[23px] sm:text-[21px]"
            >
              By <br />
              Finance & Investment club of NIT Trichy
            </Text>
            <div className="flex items-center gap-[11px]">
              <Button
                shape="round"
                // colorScheme="indigo_300_indigo_100"
                className="w-full min-w-[214px] max-w-[214px] rounded-[24px] px-[34px] font-bold sm:px-5 bg-gradient"
              >
                USE TOOLS
              </Button>
              <Img
                src="img_arrow_right.svg"
                width={100}
                height={100}
                alt="Arrowright"
                className="h-[100px] w-[8%] object-contain"
              />
            </div>
          </div>
        </div>
        <Heading
          size="heading3xl"
          as="h1"
          className="absolute left-30 top-[8%] z-[3] m-auto !font-poppins text-[50px] font-semibold md:text-[46px] sm:text-[40px]"
        >
          <span className="text-white-0">Prof</span>
          <span className="text-pink-500">NITT </span>
          <span className="text-white-0">Tools</span>
        </Heading>
        <div className="rounded-[82px] bg-gradient3 p-[22px] sm:p-5">
          <div className="mr-[38px] flex gap-[46px] md:mr-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {contactInfoList.map((d, index) => (
                <LocationProfile {...d} key={"listlocation" + index} className="w-[38%] md:w-full sm:flex-col" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}