import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gothicButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading text-sm tracking-widest uppercase transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-glow",
        sacred:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow",
        ghost:
          "text-foreground/70 hover:text-primary hover:bg-transparent",
        parchment:
          "bg-transparent border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 px-6 text-xs",
        lg: "h-14 px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GothicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gothicButtonVariants> {
  asChild?: boolean;
}

const GothicButton = React.forwardRef<HTMLButtonElement, GothicButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gothicButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GothicButton.displayName = "GothicButton";

export { GothicButton, gothicButtonVariants };
