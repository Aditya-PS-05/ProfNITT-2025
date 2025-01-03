import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import "@/styles/font.css";
import "@/styles/tailwind.css";
import "@/styles/index.css";

import Footer from "@/components/profnitt-tools/Footer";
import Header from "@/components/profnitt-tools/Header";
import EmpowermentSection from "../components/profnitt-tools/EmpowermentSection";
import ProfNITTIntroductionSection from "../components/profnitt-tools/ProfNITTIntroductionSection";
import ProfNITTToolsSection from "../components/profnitt-tools/ProfNITTToolsSection";
import ProfNITTToolsSection1 from "../components/profnitt-tools/ProfNITTToolsSection1";
import ProfNITTToolsSection2 from "../components/profnitt-tools/ProfNITTToolsSection2";
import { Img } from "@/components/Tools/Img";
import { Button } from "@/components/ui/button";
import { TextArea } from "@/components/Tools/Textarea";
import { Input } from "@/components/Tools/Input";
import { Text } from "@/components/Tools/Text";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/Tools/Heading";

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (

    <div className="w-full bg-blue_gray-900_01 py-9 sm:py-5">
      <div className="mb-1">
        <Header user={session?.user ?? null} />
        <div className="relative h-[844px]">
          <Img
            src="img_vector_1.png"
            width={414}
            height={668}
            alt="Vectorone"
            className="absolute right-[3px] top-2 m-auto h-[668px] w-[28%] object-contain"
          />
          <Img
            src="img_vector_3.png"
            width={732}
            height={418}
            alt="Vectorthree"
            className="absolute bottom-[20%] right-[0.53px] m-auto h-[418px] w-[56%] object-contain"
          />
          <Img
            src="img_vector_2.png"
            width={376}
            height={844}
            alt="Vectortwo"
            className="absolute bottom-0 right-[9%] top-0 my-auto h-[844px] w-[28%] object-contain"
          />
          <Img
            src="img_vector_4.png"
            width={238}
            height={560}
            alt="Vectorfour"
            className="absolute left-[2.50px] top-[13%] m-auto h-[560px] w-[16%] object-contain"
          />
          <ProfNITTToolsSection />
        </div>
        <ProfNITTIntroductionSection />
        <div className="relative mt-28 h-[1310px] content-center md:h-auto">
          <Img
            src="img_vector_14.png"
            width={1438}
            height={814}
            alt="Vectorfourteen"
            className="m-auto h-[814px] flex-1 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[242px] md:gap-[181px] sm:gap-[121px]">
            <ProfNITTToolsSection1 />
            <EmpowermentSection />
          </div>
        </div>
        <ProfNITTToolsSection2 />
        <div className="mt-[164px] flex flex-col items-center">
          <div className="flex flex-col items-center self-stretch">
            <div className="relative z-[6] mx-auto w-full max-w-[1274px] md:px-5">
              <div className="rounded-[100px] bg-gradient4 py-[84px] shadow-sm md:py-5">
                <div className="mt-3.5 flex flex-col items-center px-14 md:px-5">
                  <Heading as="h1" className="text-[36px] font-bold md:text-[34px] sm:text-[32px]">
                    JOIN ProfNITT Tools NOW!
                  </Heading>
                  <Separator orientation="horizontal" className="mt-5 h-px w-[134%] bg-gradient5" />
                  <Text size="text5xl" as="p" className="mt-5 text-[36px] font-light md:text-[34px] sm:text-[32px]">
                    Let's Build Your Trading Strategy with ProfNITT Tools
                  </Text>
                  <div className="ml-2 mt-16 flex w-[90%] justify-center md:ml-0 md:w-full">
                    <div className="flex w-full flex-col gap-[38px]">
                      <div className="flex gap-2.5 md:flex-col">
                        <Input
                          shape="round"
                          type="text"
                          placeholder="First Name"
                          className="w-full rounded-[36px] !border-2 px-3"
                        />
                        <Input
                          shape="round"
                          type="text"
                          placeholder="Last Name"
                          className="w-full rounded-[36px] !border-2 px-3"
                        />
                      </div>
                      <div className="flex gap-3 md:flex-col">
                        <Input
                          shape="round"
                          type="email"
                          placeholder="Email"
                          className="w-full rounded-[36px] !border-2 px-3"
                        />
                        <Input
                          shape="round"
                          type="number"
                          placeholder="Phone Number"
                          className="w-full rounded-[36px] !border-2 px-3"
                        />
                      </div>
                    </div>
                  </div>
                  <Input
                    shape="round"
                    placeholder="Subject"
                    className="ml-2 mt-8 w-[90%] rounded-[36px] !border-2 px-3 md:ml-0"
                  />
                  <TextArea
                    placeholder="Tell Us Something..."
                    size="xs"
                    variant="tarOutlineWhite0"
                    className="ml-2 mt-8 w-[90%] rounded-[40px] !border-2 !border-white-0 px-3 text-white-0 md:ml-0 sm:pt-5"
                  />
                  <Button
                    shape="round"
                    // colorScheme="indigo_300_indigo_100"
                    className="mt-[50px] w-full min-w-[214px] max-w-[214px] rounded-[24px] px-[34px] font-bold sm:px-5"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-[-90px] w-full max-w-[1274px] md:px-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}