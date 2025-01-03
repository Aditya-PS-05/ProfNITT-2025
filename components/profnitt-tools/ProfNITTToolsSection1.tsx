import React, { Suspense } from 'react';
import LiveMarketProfile from "../../components/profnitt-tools/LiveMarketProfile";
import { Text, Img, Heading } from "@/components/Tools";

const marketOptionsList = [
  {
    userImage: "img_image_202x202.png",
    marketTitle: "Live Market Testing",
    descriptionText: "Experiment with advanced quant strategies directly on live markets to see real-time results.",
    actionButtonText: "TRY IT NOW",
  },
  {
    userImage: "img_image_202x202.png",
    marketTitle: "Live Market Testing",
    descriptionText: "Experiment with advanced quant strategies directly on live markets to see real-time results.",
    actionButtonText: "TRY IT NOW",
  },
  {
    userImage: "img_image_182x152.png",
    marketTitle: "Performance Metrics",
    descriptionText: "Access comprehensive reports to evaluate strategy performance and optimize outcomes.",
    actionButtonText: "TRY IT NOW",
  },
  {
    userImage: "img_image_164x190.png",
    marketTitle: "User-Friendly Interface",
    descriptionText: "Enjoy a seamless, intuitive platform designed for both beginners and experts in finance.",
    actionButtonText: "TRY IT NOW",
  },
];

export default function ProfNIITToolsSection1() {
  return (
    <div className="px-[54px] md:px-5">
      <div className="flex flex-col items-center gap-[74px] md:gap-[55px] sm:gap-[37px]">
        <div className="flex w-[96%] items-start justify-center md:w-full md:flex-col">
          <div className="relative h-[130px] w-[48%] self-center md:w-full">
            <Heading
              size="heading2xl"
              as="h4"
              className="absolute left-0 top-0 m-auto text-[45px] font-bold text-white-0 md:text-[41px] sm:text-[35px]"
            >
              What You Get With{" "}
            </Heading>
            <Text
              size="text5xl"
              as="p"
              className="absolute bottom-[27px] left-0 m-auto text-[36px] font-light text-white-0 md:text-[34px] sm:text-[32px]"
            >
              <span className="font-thin">ProfNIIT</span>
              <span className="font-bold">&nbsp;</span>
              <span className="font-thin">Tools</span>
            </Text>
            {/* <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex">
              <Img
                src="img_arrow_right.svg"
                width={100}
                height={100}
                alt="Arrowright"
                className="h-[100px] w-[26%] object-contain"
              />
            </div> */}
          </div>
          <Text
            size="textlg"
            as="p"
            className="w-[52%] text-[16px] font-normal leading-[25px] text-white-0 md:w-full"
          >
            With ProFNIT tools, you gain access to powerful quantitative finance strategies that you can test on live
            markets. Our platform provides detailed insights, including performance metrics and capital requirements,
            helping you make informed decisions. Whether you&#39;re an aspiring quant or a seasoned investor, ProFNIT
            tools empower you to explore, analyze, and optimize trading strategies with ease.
          </Text>
        </div>
        <div className="mx-auto w-full max-w-[1274px] md:px-5">
          <div className="flex gap-4 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {marketOptionsList.map((d, index) => (
                <LiveMarketProfile {...d} key={"listlivemarket" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}