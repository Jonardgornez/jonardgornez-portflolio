import { useEffect, useRef } from "react";
import Header from "./Header";

const marqueeItems = [
  "Web Development",
  "★",
  "Web Applications",
  "★",
  "API Development",
  "★",
];

export default function Hero() {
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    [subtitleRef.current, headlineRef.current].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(60px)";
      el.style.transition = `opacity .8s ease ${i * 0.15}s, transform .8s ease ${i * 0.15}s`;

      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 100);
      });
    });
  }, []);

  return (
    <section
      style={{ fontFamily: "'Inter Tight', sans-serif" }}
      className="relative bg-black min-h-screen flex flex-col overflow-hidden"
    >
      <Header />

      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 pt-24 pb-0">
        <p
          ref={subtitleRef}
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-tight"
        >
          Websites & Applications
        </p>

        <h1
          ref={headlineRef}
          className="font-black tracking-tight leading-[0.88]"
          style={{ fontSize: "clamp(2.5rem, 12vw, 18rem)" }}
        >
          <span className="text-[#ff6b00]">Developed &</span>
          <br />
          <span className="text-[#ff6b00]">Delivered</span>
        </h1>
      </div>

      <div className="relative bg-[#3dd6d0] overflow-hidden mt-8 mb-16 h-[80px]">
        <div className="marquee-track flex items-center whitespace-nowrap h-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center shrink-0"
              style={{ animation: "marquee 18s linear infinite" }}
            >
              {marqueeItems.map((item, j) => (
                <span
                  key={j}
                  className="text-black font-black text-lg md:text-2xl uppercase tracking-tight px-4"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
