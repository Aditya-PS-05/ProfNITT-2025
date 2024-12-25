import React from "react";

const sizes = {
  body_bold_18px: "font-poppins text-[18px] font-semibold",
  headingxs: "text-[12px] font-bold",
  headings: "text-[24px] font-bold lg:text-[24px] md:text-[22px]",
  headingmd: "text-[26px] font-bold lg:text-[25px] md:text-[23px] sm:text-[21px]",
  headinglg: "text-[36px] font-bold lg:text-[36px] md:text-[34px] sm:text-[32px]",
  headingxl: "text-[40px] font-bold lg:text-[40px] md:text-[38px] sm:text-[36px]",
  heading2xl: "text-[45px] font-bold lg:text-[45px] md:text-[41px] sm:text-[35px]",
  heading3xl: "text-[50px] font-semibold lg:text-[50px] md:text-[46px] sm:text-[40px]",
  heading4xl: "text-[64px] font-bold lg:text-[64px] md:text-[48px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headinglg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-white-0 font-montserrat ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
