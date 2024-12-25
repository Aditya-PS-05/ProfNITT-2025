import React from "react";

const sizes = {
  body_18px: "font-poppins text-[18px] font-normal",
  textxs: "text-[12px] font-normal",
  texts: "text-[14px] font-normal",
  textmd: "text-[16px] font-normal",
  textlg: "text-[18px] font-normal",
  textxl: "text-[19px] font-light",
  text2xl: "text-[20px] font-light",
  text3xl: "text-[25px] font-normal lg:text-[25px] md:text-[23px] sm:text-[21px]",
  text4xl: "text-[35px] font-normal lg:text-[35px] md:text-[33px] sm:text-[31px]",
  text5xl: "text-[36px] font-light lg:text-[36px] md:text-[34px] sm:text-[32px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "text3xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-white-0 font-montserrat ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
