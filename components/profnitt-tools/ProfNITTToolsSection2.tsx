import React, { Suspense } from 'react';
import StrategyExplorer from "../../components/profnitt-tools/StrategyExplorer";
import { Img, Text, Heading } from "@/components/Tools";

const strategyStepsList = [
  { stepNumber: "01", exploreText: "Explore Strategies" },
  { stepNumber: "02", exploreText: "Set Parameters" },
  { stepNumber: "03", exploreText: "Test on Live Markets" },
  { stepNumber: "04", exploreText: "Analyze Results" },
];

export default function ProfNIITToolsSection2() {
  return (
    <>
      <div className="relative mt-[180px] h-[494px] content-end md:h-auto">
        <Img
          src="img_vector_15.png"
          width={1540}
          height={300}
          alt="Vectorfifteen"
          className="mx-auto mb-[70px] h-[230px] w-full flex-1 object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[94px] px-[46px] md:gap-[70px] md:px-5 sm:gap-[47px]">
          <div className="ml-[42px] md:ml-0">
            <div className="flex items-end justify-between md:flex-col">
              <div className="mb-6 flex flex-col items-start gap-3.5 self-start">
                <Heading as="h6" className="text-[36px] font-bold text-white-0 md:text-[34px] sm:text-[32px]">
                  HOW TO TRADE
                </Heading>
                <Text
                  size="text5xl"
                  as="p"
                  className="text-[36px] font-light text-white-0 md:text-[34px] sm:text-[32px]"
                >
                  WITH ProfNIT Tools?
                </Text>
              </div>
              {/* <div className="flex">
                <Img
                  src="img_arrow_right_indigo_100.svg"
                  width={590}
                  height={100}
                  alt="Arrowright"
                  className="h-[100px] w-[100%] object-contain"
                />
              </div> */}
              <Text
                size="textlg"
                as="p"
                className="mb-2.5 w-[52%] text-[16px] font-normal leading-[25px] text-white-0 md:w-full"
              >
                Using ProfNIT tools is simple and intuitive. Start by exploring or uploading your quant strategies, then
                customize parameters for testing. Run your strategies in live markets and analyze detailed performance
                reports. Refine and optimize based on insights to enhance your trading outcomes
              </Text>
            </div>
          </div>
          <div className="ml-[52px] mr-10 md:mx-0 mb-0">
            <div className="flex items-center md:flex-col">
              <div className="relative ml-[-24px] flex flex-1 flex-col items-end md:ml-0 md:self-stretch">
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex flex-col self-stretch">
                    <div className="flex gap-16 md:flex-col">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {strategyStepsList.map((d, index) => (
                          <StrategyExplorer {...d} key={"listone" + index} className="w-[24%]" />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}