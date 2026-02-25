import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
    <DialogPrimitive.Content
      ref={ref}
      className={`fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 ${className}`}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 text-white/60 hover:text-white">
        <X />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
