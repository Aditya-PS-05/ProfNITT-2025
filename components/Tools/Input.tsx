import React from 'react';
import {cn} from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
    variant?: string;
    colorScheme?: string;
  };

interface IconProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const inputVariants = cva('w-full flex items-center justify-center cursor-text', {
  variants: {
    fill: {
      'blue-gray-900-03': 'bg-blue-gray-900-03 text-white-2',
    },
    outline: {
      'white-0': 'border-white-0 border-2 border-solid text-white-0',
    },
    size: {
      xs: 'h-[30px] px-[36px] text-[18px]',
      sm: 'h-[72px] px-3 text-[14px]',
    },
    shape: {
      round: 'rounded-[36px]',
    },
  },
  defaultVariants: {},
});

const Input = React.forwardRef<HTMLInputElement, InputProps>((
  { variant = "outline", colorScheme = 'white-0', shape, size = 'sm', className, type, ...props }, ref
) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ [variant]: colorScheme, size, shape, className }))}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((
  { className, children, ...props }, ref
) => {
  return (
    <div
      className={cn('relative flex w-full', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

InputGroup.displayName = 'InputGroup';

const InputLeftElement = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((
  { className, children, ...props }, ref
) => {
  return (
    <div
      className={cn('absolute aspect-square h-full left-0 justify-center flex items-center', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

InputLeftElement.displayName = 'InputLeftElement';

const InputRightElement = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((
  { className, children, ...props }, ref
) => {
  return (
    <div
      className={cn('absolute aspect-square h-full right-0 justify-center flex items-center', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

InputRightElement.displayName = 'InputRightElement';

export { Input, InputGroup, InputLeftElement, InputRightElement };
