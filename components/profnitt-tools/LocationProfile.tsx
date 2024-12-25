import { Separator, Text, Heading, Img } from "@/components/Tools";
import React from "react";

interface Props {
  className?: string;
  locationTitle?: React.ReactNode;
  locationDescription?: React.ReactNode;
}

export default function LocationProfile({
  locationTitle = "Location",
  locationDescription = "ProfNITT Club NIT Trichy, Tamil Nadu, India",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center`}>
      <Img
        src="img_location_icon.svg"
        width={70}
        height={70}
        alt="Location"
        className="h-[70px] w-[18%] object-contain"
      />
      <div className="mt-[22px] flex flex-1 flex-col items-start gap-2 self-start sm:self-stretch">
        <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-0">
          {locationTitle}
        </Heading>
        <Text size="texts" as="p" className="text-[14px] font-normal text-white-0">
          {locationDescription}
        </Text>
      </div>
      <Separator orientation="vertical" className="ml-[126px] h-[116px] w-px bg-indigo-100_54" />
    </div>
  );
}