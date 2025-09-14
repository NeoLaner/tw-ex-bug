import { cn } from "@neolaner/ui/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-background min-h-screen px-4 py-6", className)}>
      {children}
    </div>
  );
}
