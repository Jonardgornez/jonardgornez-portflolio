import { CONTACT } from "../data/contactData";

export default function ContactFooter() {
  return (
    <div className="flex flex-col px-6 md:px-10 pt-10 pb-10 gap-10">
      <h2
        className="font-black text-[#ff6b00] leading-none"
        style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
      >
        Get in touch
      </h2>

      <div className="flex flex-col md:items-end md:text-right">
        <p className="text-white font-bold text-xl md:text-2xl leading-tight">
          Prefer email? Sounds good.
        </p>

        <p className="text-white font-bold text-xl md:text-2xl leading-tight">
          I'm over at{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-[#ff6b00] hover:underline underline-offset-4 transition-all"
          >
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
}
