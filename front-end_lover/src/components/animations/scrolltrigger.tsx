"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export const ScrollAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current, {
        opacity: 0,
        x: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen flex justify-center items-center"
    >
      <p className="text-4xl font-[Uncage]">
        Andrea Victoria Palacios Aguilera
      </p>
    </div>
  );
};
