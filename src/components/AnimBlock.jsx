import React, { useRef } from "react";
import useIntersection from "../hooks/useIntersection";

export default function AnimBlock({ children, className = "", animation = "fade-in", style = {}, delay = 0 }) {
  const ref = useRef();
  const visible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={`${animation} ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
