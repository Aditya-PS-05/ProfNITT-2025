import * as React from 'react';
import {cn} from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { text } from 'node:stream/consumers';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      tarOutlineBlack9003f: {
        'white-0': 'bg-white-0 shadow-xs',
      },
      tarOutlineWhite0: {
        'white-0': 'border-white-0 border-2 border-solid',
      },
      size: {
        sm: 'h-[284px] p-3 text-[25px]',
        xs: 'h-[210px] p-3 text-[14px]',
      },
      shape: {
        round: 'rounded-[24px]',
      },
    },
    defaultVariants: {},
  }
);

interface TextareaProps 
    extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants>{
        variant?: string;
    colorScheme?: string;
  };

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant = 'tarOutlineBlack9003f', size = 'sm', shape, colorScheme = 'white-0', className, ...props }, ref) => {
    return (
      <textarea
        className={cn(className, textareaVariants({ [variant]: colorScheme, shape, size }))}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'Textarea';

export { TextArea };