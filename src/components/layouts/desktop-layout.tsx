import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from "@neolaner/ui/components/ui/sidebar";
import type { ReactNode } from "react";

export function DesktopLayout({
  mainContent,
  header,
  sidebarHeader,
  sidebarContent,
  sidebarFooter,
}: {
  mainContent: ReactNode;
  header?: ReactNode;
  sidebarHeader: ReactNode;
  sidebarContent: ReactNode;
  sidebarFooter: ReactNode;
}) {
  return (
    <SidebarProvider open={false}>
      <Sidebar collapsible="icon">
        <SidebarHeader>{sidebarHeader}</SidebarHeader>
        <SidebarContent>{sidebarContent}</SidebarContent>
        <SidebarFooter>{sidebarFooter}</SidebarFooter>
      </Sidebar>
      <SidebarInset className="overflow-x-hidden">
        <div>
          {header}
          <div>{mainContent}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
