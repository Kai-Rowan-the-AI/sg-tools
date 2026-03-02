"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollShadowProps {
  children: ReactNode;
  className?: string;
  shadowClassName?: string;
  maxHeight?: string;
}

export default function ScrollShadow({
  children,
  className,
  shadowClassName,
  maxHeight = "560px",
}: ScrollShadowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showShadow, setShowShadow] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkScroll = () => {
      const scrollable = container.scrollHeight > container.clientHeight;
      setIsScrollable(scrollable);
      
      if (scrollable) {
        const isAtBottom = 
          container.scrollHeight - container.scrollTop - container.clientHeight < 2;
        setShowShadow(!isAtBottom);
      } else {
        setShowShadow(false);
      }
    };

    // Initial check
    checkScroll();

    // Listen for scroll events
    container.addEventListener("scroll", checkScroll, { passive: true });
    
    // Also check on resize
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [children]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={cn("overflow-y-auto", className)}
        style={{ maxHeight }}
      >
        {children}
      </div>
      
      {/* Bottom shadow overlay - only shown when scrollable and not at bottom */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 right-0 h-12",
          "bg-gradient-to-t from-background to-transparent",
          "transition-opacity duration-200",
          showShadow ? "opacity-100" : "opacity-0",
          shadowClassName
        )}
        aria-hidden="true"
      />
    </div>
  );
}
