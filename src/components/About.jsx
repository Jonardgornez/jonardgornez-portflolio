import { useEffect, useRef } from "react";
import { ABOUT } from "../data/aboutData";

export default function About() {
  const headlineRef = useRef(null);
  const photosRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observers = [];

    const fadeUp = (el, delay = 0) => {
      if (!el) return;

      el.style.opacity = "0";
      el.style.transform = "translateY(48px)";
      el.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.disconnect();
          }
        },
        { threshold: 0.15 },
      );

      obs.observe(el);
      observers.push(obs);
    };

    fadeUp(headlineRef.current, 0);
    fadeUp(photosRef.current, 0.15);
    fadeUp(textRef.current, 0.25);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      className="relative bg-[#0d0d0d] overflow-hidden py-20 px-6 md:px-10"
      style={{ fontFamily: "'Inter Tight', sans-serif" }}
    >
      {/* Background big letters */}
      <div
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span
          className="font-black text-white/[0.03] leading-none"
          style={{ fontSize: "clamp(200px, 40vw, 600px)" }}
        >
          AB
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-black leading-tight mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          {ABOUT.headlineParts.map((part, i) => (
            <span key={i} style={{ color: part.color }}>
              {part.text}
            </span>
          ))}
        </h2>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Photos */}
          <div
            ref={photosRef}
            className="flex-none flex items-end gap-0 relative"
            style={{ width: "min(460px, 100%)", height: "420px" }}
          >
            {ABOUT.photos.map((src, i) => (
              <div
                key={i}
                className="absolute bottom-0 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                style={{
                  left: `${i * 28}%`,
                  width: "42%",
                  height: `${72 + i * 10}%`,
                  zIndex: i + 1,
                  boxShadow: "4px 0 24px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <div ref={textRef} className="flex-1 min-w-0">
            <div className="space-y-5 mb-12">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className="text-white/80 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Contact section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                  Contact
                </p>
                <a
                  href={`mailto:${ABOUT.contact.email}`}
                  className="text-white font-semibold text-sm hover:text-[#ff6b00] transition-colors duration-200"
                >
                  {ABOUT.contact.email}
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                  Location
                </p>
                <p className="text-white font-semibold text-sm">
                  {ABOUT.contact.location}
                </p>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                  Availability
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse shrink-0" />
                  <p className="text-white font-semibold text-sm">
                    {ABOUT.contact.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
