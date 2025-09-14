import { cn } from "@neolaner/ui/lib/utils";
import type { ReactNode } from "react";

export function SectionTittle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-6", className)}>
      <div>
        <h2 className="text-foreground text-xl font-semibold">{children}</h2>
      </div>
    </div>
  );
}
