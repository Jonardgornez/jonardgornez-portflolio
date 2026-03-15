import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="text-sm font-bold tracking-tight">
        <span className="text-[#ff6b00]">Jonard</span>
        <span className="text-white">Gornez</span>
      </div>

      <a
        href="mailto:gornezjonard@gmail.com"
        className="text-white text-xs font-medium tracking-widest uppercase hover:text-[#ff6b00] transition-colors duration-200"
      >
        CONTACT
      </a>
    </header>
  );
}
