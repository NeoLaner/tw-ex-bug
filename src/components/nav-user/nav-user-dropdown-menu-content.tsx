"use client";

import { cn } from "@neolaner/ui/lib/utils";
import type { ReactNode } from "react";
import { DropdownMenuContent } from "../ui/dropdown-menu";
import { useSidebar } from "../ui/sidebar";

export default function NavUserDropdownMenuContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { isMobile } = useSidebar();
  return (
    <DropdownMenuContent
      className={cn(
        "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
        className
      )}
      side={isMobile ? "bottom" : "right"}
      align="end"
      sideOffset={4}
    >
      {children}
    </DropdownMenuContent>
  );
}
