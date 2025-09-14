import { cn } from "@neolaner/ui/lib/utils";
import type { ReactNode } from "react";

export function CardBlur({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border shadow-2xl backdrop-blur-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
