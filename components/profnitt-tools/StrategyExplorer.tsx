import { Heading } from "@/components/Tools";
import React from 'react';

interface Props {
  className?: string;
  stepNumber?: React.ReactNode;
  exploreText?: React.ReactNode;
}

export default function StrategyExplorer({ stepNumber = "01", exploreText = "Explore Strategies", ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start md:w-full gap-[22px]`}>
      <div className="flex w-[80%] flex-col items-center justify-center rounded-[98px] bg-black-900-51-01 p-[18px]">
        <div className="flex h-[158px] w-[158px] flex-col items-center justify-center rounded-[78px] bg-gradient1">
          <Heading size="heading4xl" as="h1" className="text-[64px] font-bold text-blue-gray-900-02">
            {stepNumber}
          </Heading>
        </div>
      </div>
      <div className="ml-12">
        <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-0 m-auto">
          {exploreText}
        </Heading>
      </div>
    </div>
  );
}
