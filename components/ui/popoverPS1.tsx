"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover1 = PopoverPrimitive.Root;

const PopoverTrigger1 = PopoverPrimitive.Trigger;

const PopoverContent1 = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none fixed inset-0 m-auto flex items-center justify-center h-auto max-h-[90vh]",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent1.displayName = PopoverPrimitive.Content.displayName;

export { Popover1, PopoverTrigger1, PopoverContent1 };
