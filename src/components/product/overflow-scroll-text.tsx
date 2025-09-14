// components/ui/overflow-scroll-text.tsx (Corrected)

"use client";

import { cn } from "@neolaner/ui/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface OverflowScrollTextProps {
  children: React.ReactNode;
  className?: string;
}

export const OverflowScrollText = ({
  children,
  className,
}: OverflowScrollTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const element = textRef.current;
      if (element) {
        const hasOverflow = element.scrollWidth > element.clientWidth;
        setIsOverflowing(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [children]);

  return (
    <div className="w-full overflow-hidden">
      <p
        ref={textRef}
        className={cn(
          // CHANGE HERE: Replaced `truncate` with `whitespace-nowrap`.
          // The parent `div`'s `overflow-hidden` now handles all clipping.
          "whitespace-nowrap transition-transform duration-500 ease-in-out",

          // This logic remains the same
          isOverflowing && "hover:-translate-x-[var(--scroll-x)]",
          className
        )}
        style={
          {
            "--scroll-x": textRef.current
              ? `${textRef.current.scrollWidth - textRef.current.clientWidth}px`
              : "0px",
          } as React.CSSProperties
        }
      >
        {children}
      </p>
    </div>
  );
};
