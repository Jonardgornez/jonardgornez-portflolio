import { useEffect, useRef } from "react";
import ImageSlider from "./ImageSlider";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onScroll = () => {
      const rect = card.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / rect.height, 1);

      const scale = 1 - (1 - 0.93) * progress;
      const ty = -progress * 36;

      card.style.transform = `scale(${scale}) translateY(${ty}px)`;
      card.style.opacity = String(1 - progress * 0.3);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 min-h-screen flex items-center justify-center"
      style={{
        zIndex: index + 1,
        paddingTop: `${index * 10}px`,
        transition: "transform 0.08s linear, opacity 0.08s linear",
      }}
    >
      <div
        className="w-full min-h-screen flex flex-col lg:flex-row"
        style={{ backgroundColor: project.bgColor }}
      >
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col"
            style={{
              backgroundColor: project.cardBg,
              height: "520px",
              padding: "20px 20px 16px",
            }}
          >
            <div className="flex-1 flex flex-col min-h-0">
              <ImageSlider
                images={project.images}
                accentColor={project.bgColor}
              />
            </div>

            <div className="pt-4 flex items-end justify-between">
              <div>
                <h3 className="text-white font-black text-xl">
                  {project.productTitle}
                </h3>
                <p className="text-white/50 text-xs">
                  {project.productSubtitle}
                </p>
              </div>

              <button
                className="ml-4 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border-2 lg:hidden"
                style={{ borderColor: project.bgColor, color: project.bgColor }}
              >
                {project.ctaLabel}
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-none lg:w-96 xl:w-[440px] flex-col justify-center p-8 lg:p-12">
          <h2 className="font-black text-white text-4xl">{project.title}</h2>
          <p className="text-white/80 mb-6">— {project.type}</p>

          <p className="text-white mb-4">{project.description}</p>
          <p className="text-white mb-8">{project.detail}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-bold uppercase rounded-full border-2 border-white/40 text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm"
          >
            VIEW WEBSITE
          </a>
        </div>
      </div>
    </div>
  );
}
