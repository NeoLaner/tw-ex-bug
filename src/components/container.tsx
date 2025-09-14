import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full sm:w-[90%] sm:max-w-[1152px] sm:px-0 ">
      {children}
    </div>
  );
}
