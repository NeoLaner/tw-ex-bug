"use client";

import { DropdownMenu } from "@neolaner/ui/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@neolaner/ui/components/ui/sidebar";

import type { ReactNode } from "react";

export function NavUser({
  dir = "ltr",
  children,
}: {
  dir?: "ltr" | "rtl";
  children: ReactNode;
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu dir={dir}>{children}</DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
