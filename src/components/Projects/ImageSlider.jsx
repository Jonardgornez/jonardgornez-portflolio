import { useEffect, useRef, useState, useCallback } from "react";
import ArrowButton from "./ArrowButton";

const AUTO_INTERVAL = 3500;

export default function ImageSlider({ images, accentColor }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  const goTo = useCallback(
    (nextIndex, dir = "next") => {
      if (animating) return;

      setDirection(dir);
      setAnimating(true);

      setTimeout(() => {
        setCurrent(nextIndex);
        setAnimating(false);
      }, 350);
    },
    [animating],
  );

  const prev = useCallback(() => {
    const idx = (current - 1 + images.length) % images.length;
    goTo(idx, "prev");
  }, [current, images.length, goTo]);

  const next = useCallback(() => {
    const idx = (current + 1) % images.length;
    goTo(idx, "next");
  }, [current, images.length, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_INTERVAL);
  };

  const handlePrev = () => {
    prev();
    resetTimer();
  };

  const handleNext = () => {
    next();
    resetTimer();
  };

  const handleDot = (i) => {
    goTo(i, i > current ? "next" : "prev");
    resetTimer();
  };

  /* Mobile swipe support */

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) < 40) return;

    if (diff > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <div
        className="relative flex-1 overflow-hidden rounded-xl flex items-center justify-center p-2 sm:p-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={current}
          src={images[current]}
          alt=""
          className="max-w-full max-h-full object-contain"
          style={{
            animation: animating
              ? direction === "next"
                ? "slideOutLeft 0.35s ease forwards"
                : "slideOutRight 0.35s ease forwards"
              : direction === "next"
                ? "slideInRight 0.35s ease forwards"
                : "slideInLeft 0.35s ease forwards",
          }}
        />

        {/* arrows */}

        <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10">
          <ArrowButton
            direction="prev"
            onClick={handlePrev}
            accentColor={accentColor}
          />
        </div>

        <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10">
          <ArrowButton
            direction="next"
            onClick={handleNext}
            accentColor={accentColor}
          />
        </div>

        {/* progress bar */}

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20">
          <div
            key={`${current}-bar`}
            className="h-full"
            style={{
              backgroundColor: accentColor,
              animation: `progressBar ${AUTO_INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </div>

      {/* dots */}

      <div className="flex justify-center gap-2 pt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === i ? "24px" : "8px",
              height: "8px",
              background:
                current === i ? accentColor : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(60px); opacity:0;}
          to {transform:translateX(0);opacity:1;}
        }

        @keyframes slideInLeft {
          from { transform: translateX(-60px); opacity:0;}
          to {transform:translateX(0);opacity:1;}
        }

        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity:1;}
          to {transform:translateX(-60px);opacity:0;}
        }

        @keyframes slideOutRight {
          from { transform: translateX(0); opacity:1;}
          to {transform:translateX(60px);opacity:0;}
        }

        @keyframes progressBar {
          from { width:0%; }
          to { width:100%; }
        }
      `}</style>
    </div>
  );
}
