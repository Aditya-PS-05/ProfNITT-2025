"use client";

import React from "react";
import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

const radioVariants = cva("", {
  variants: {
    primary: {
      selected: "text-pink-a200 fill-[#ed37a5]",
      unselected: "",
    },
    size: {
      xs: "h-[14px] w-[14px]",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof Item>, VariantProps<typeof radioVariants> {
  variant?: string;
  label?: string;
}

const RadioGroup = React.forwardRef<React.ElementRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root>>((
  { className, ...props }, ref) => {
  return <Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});

RadioGroup.displayName = Root.displayName;

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof Item>, RadioGroupItemProps>((
  { className, variant = "primary", label = "", id, size, ...props }, ref) => {
  return (
    <div className={cn("flex items-center gap-[5px] cursor-pointer", className)}>
      <Item
        ref={ref}
        className={cn(
          "aspect-square h-full w-full rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex justify-center items-center",
          radioVariants({ [variant]: "unselected", size })
        )}
        id={id}
        {...props}
      >
        <Indicator className="flex items-center justify-center h-4/5 w-4/5">
          <Circle 
            className={cn("h-full w-full fill-current text-current", radioVariants({ [variant]: "selected" }))}
          />
        </Indicator>
      </Item>
      <label htmlFor={id}> {label} </label>
    </div>
  );
});

RadioGroupItem.displayName = Item.displayName;

export { RadioGroup, RadioGroupItem };