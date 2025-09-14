import type { ReactNode } from "react";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function NavUserDropdownMenuTrigger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <DropdownMenuTrigger className={className} asChild>
      {children}
    </DropdownMenuTrigger>
  );
}
