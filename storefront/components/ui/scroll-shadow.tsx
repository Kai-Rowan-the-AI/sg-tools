"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollShadowProps {
  children: React.ReactNode;
  className?: string;
  shadowClassName?: string;
  scrollableClassName?: string;
}

export function ScrollShadow({
  children,
  className,
  shadowClassName,
  scrollableClassName,
}: ScrollShadowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const checkScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      // Show shadow if there's scrollable content and we're not at the bottom
      const hasOverflow = scrollHeight > clientHeight;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      setShowShadow(hasOverflow && !isAtBottom);
    };

    // Check initially
    checkScroll();

    // Listen for scroll events
    element.addEventListener("scroll", checkScroll, { passive: true });

    // Also check on resize
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener("scroll", checkScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollRef}
        className={cn("overflow-y-auto", scrollableClassName)}
      >
        {children}
      </div>
      {/* Bottom gradient shadow */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent transition-opacity duration-300",
          showShadow ? "opacity-100" : "opacity-0",
          shadowClassName
        )}
        aria-hidden="true"
      />
    </div>
  );
}
