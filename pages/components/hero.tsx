'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from('.letter', {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Stats reveal
      gsap.from('.stat', {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5,
        duration: 0.8,
      });

      // Scroll animation
      gsap.to(visualRef.current, {
        y: -200,
        scrollTrigger: {
          trigger: visualRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const text = 'WELCOME ITZFIZZ';

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-white overflow-hidden">
      {/* Headline */}
      <h1
        ref={headlineRef}
        className="text-5xl md:text-7xl tracking-[0.6em] font-light text-gray-900 text-center"
      >
        {text.split('').map((char, i) => (
          <span key={i} className="letter inline-block">
            {char}
          </span>
        ))}
      </h1>

      {/* Stats */}
      <div ref={statsRef} className="flex gap-12 mt-12 text-center">
        <div className="stat">
          <h2 className="text-3xl font-semibold text-gray-900">85%</h2>
          <p className="text-gray-500 text-sm">Performance Increase</p>
        </div>

        <div className="stat">
          <h2 className="text-3xl font-semibold text-gray-900">120K</h2>
          <p className="text-gray-500 text-sm">Active Users</p>
        </div>

        <div className="stat">
          <h2 className="text-3xl font-semibold text-gray-900">24/7</h2>
          <p className="text-gray-500 text-sm">Global Support</p>
        </div>
      </div>

      {/* Main Visual */}
      <div
        ref={visualRef}
        className="absolute bottom-0 w-full flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Corporate Visual"
          className="w-[600px] object-contain opacity-90"
        />
      </div>
    </section>
  );
}
