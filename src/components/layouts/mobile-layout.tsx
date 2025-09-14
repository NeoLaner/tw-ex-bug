import type { ReactNode } from "react";

export function MobileLayout({
  children,
  logo,
}: {
  children: ReactNode;
  logo: ReactNode;
}) {
  return (
    <div className="flex h-svh flex-col">
      <div className="flex w-full justify-between bg-blue-400">{logo}</div>
      <div className="relative flex-1">{children}</div>
      <div className="w-full bg-red-500">footer</div>
    </div>
  );
}
