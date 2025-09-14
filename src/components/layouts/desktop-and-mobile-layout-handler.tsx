"use client";
import { useIsMobile } from "@neolaner/ui/hooks/use-mobile";
import { type ReactNode } from "react";

export function DesktopAndMobileLayoutHandler({
  mobileLayout,
  desktopLayout,
}: {
  mobileLayout: ReactNode;
  desktopLayout: ReactNode;
}) {
  const isMobile = useIsMobile();
  if (isMobile) return mobileLayout;
  return desktopLayout;
}
