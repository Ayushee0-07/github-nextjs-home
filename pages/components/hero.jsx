import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const headlineRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const letters = headlineRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      statsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.6,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(imageRef.current, {
        y: scrollY * 0.3,
        ease: "none",
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "WELCOME ITZFIZZ";

  return (
    <section className="min-h-screen flex flex-col justify-center px-16 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Headline */}
      <h1
        ref={headlineRef}
        className="text-6xl tracking-widest font-semibold"
      >
        {text.split("").map((letter, index) => (
          <span key={index} className="inline-block">
            {letter}
          </span>
        ))}
      </h1>

      {/* Stats */}
      <div className="mt-12 flex gap-16">
        <div ref={(el) => (statsRef.current[0] = el)}>
          <h2 className="text-3xl font-semibold">85%</h2>
          <p className="text-gray-500">Performance Increase</p>
        </div>

        <div ref={(el) => (statsRef.current[1] = el)}>
          <h2 className="text-3xl font-semibold">120K</h2>
          <p className="text-gray-500">Active Users</p>
        </div>

        <div ref={(el) => (statsRef.current[2] = el)}>
          <h2 className="text-3xl font-semibold">24/7</h2>
          <p className="text-gray-500">Support Availability</p>
        </div>
      </div>

      {/* Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] pr-16">
      <img
      ref={imageRef}
      src="https://pngimg.com/uploads/audi/audi_PNG1766.png"
      alt="Car"
      className="w-full object-contain"
/>
      </div>
    </section>
  );
}