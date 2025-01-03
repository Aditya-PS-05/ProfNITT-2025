import {Text, Heading, Img } from "@/components/Tools";
import { Button } from "../ui/button";
import React from "react";

export default function ProfNITTIntroductionSection() {
  return (
    <>
      <div className="relative mt-12 h-[750px] content-end md:h-auto">
        <div className="mx-auto mb-[38px] flex flex-1 flex-col gap-7">
          <Img src="img_vector_7.png" width={1440} height={256} alt="Vectorseven" className="h-[256px] object-cover" />
          <Img src="img_vector_8.png" width={1440} height={210} alt="Vectoreight" className="h-[210px] object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-10 px-[52px] md:px-5">
          <div className="ml-8 flex items-start justify-between gap-5 md:ml-0 md:flex-col">
            <div className="flex flex-col items-start gap-2.5">
              <Heading as="h2" className="text-[36px] font-bold text-white-0 md:text-[34px] sm:text-[32px]">
                INTRODUCTION
              </Heading>
              <Text size="text5xl" as="p" className="text-[36px] font-light text-white-0 md:text-[34px] sm:text-[32px]">
                TO ProfNITT Tools
              </Text>
            </div>
            <div className="mt-[26px] flex flex-1 items-start justify-between gap-5 self-end md:flex-col md:self-stretch">
              <Img
                src="img_arrow_right.svg"
                width={100}
                height={100}
                alt="Arrowright"
                className="ml-[70px] h-[100px] w-[12%] object-contain md:ml-0 md:w-full"
              />
              <Text
                size="textxl"
                as="p"
                className="mt-2.5 w-[76%] self-end text-[19px] font-normal leading-[29px] text-white-0 md:w-full"
              >
                Explore the world of quantitative finance with ease! Test cutting-edge trading strategies on live markets 
                and get detailed insights, including capital requirements for each approach. Empower your investment 
                decisions with our user-friendly platform. Start your journey toward smarter trading today!
              </Text>
            </div>
          </div>
          
          <div className="ml-[46px] mr-[58px] flex items-center justify-between gap-5 md:mx-0 md:flex-col">
            
                  <Img
                    src="img_iphones.svg"
                    width={276}
                    height={144}
                    alt="Buttons"
                    className="mt-[78px] h-[500px] flex-1 rounded-[72px]"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[536px] flex-1 content-center px-1 md:h-auto">
                    <Img
                      src="img_screen_replace.png"
                      width={286}
                      height={536}
                      alt="Screenreplace"
                      className="h-[536px] flex-1 rounded-bl-[142px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[142px] object-cover"
                    />
                    <div className="absolute left-[31%] top-[8.69px] m-auto h-[26px] w-[36%] rounded-[12px] bg-gray-900" />
                  </div> */}

            
            <div className="flex w-[48%] flex-col items-start gap-14 md:w-full sm:gap-7">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <Heading as="h3" className="text-[36px] font-bold text-white-0 md:text-[34px] sm:text-[32px]">
                  ABOUT
                </Heading>
                <Text size="text5xl" as="p" className="text-[36px] font-light text-white-a700_f2 md:text-[34px] sm:text-[32px]">
                  ProfNITT Club of NIT Trichy
                </Text>
              </div>
              <Text size="textxl" as="p" className="w-full text-[19px] font-normal leading-[29px] text-white-0">
                &quot;ProfNIT Club, NIT Trichy, is a hub for innovation in quantitative finance and technology. Our 
                mission is to bridge the gap between theory and real-world application by developing impactful projects 
                that empower users to explore live market strategies. Through hands-on learning and cutting-edge tools, 
                we aim to make a lasting impact in the financial technology space while nurturing the next generation of 
                finance and tech leaders
              </Text>
              <Button
                shape="round"
                // colorScheme="indigo_300_indigo_100"
                className="w-full min-w-[214px] max-w-[214px] rounded-[24px] px-[34px] font-bold sm:px-5 bg-gradient"
              >
                LET'S GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}