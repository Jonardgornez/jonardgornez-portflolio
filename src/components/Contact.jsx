import { useState } from "react";
import ContactFooter from "../components/ContactFooter";

const inputBase =
  "w-full bg-transparent border-b border-white/20 text-white placeholder-white/30 text-sm py-3 outline-none focus:border-[#ff6b00] transition-colors duration-200";

const labelBase = "block text-white text-sm font-semibold mb-2";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const resetForm = () => {
    setSubmitted(false);
    setForm(initialForm);
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) return;

    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section
      className="bg-[#0d0d0d] min-h-screen flex flex-col"
      style={{ fontFamily: "'Inter Tight', sans-serif" }}
    >
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-10 pt-20 pb-0">
        {submitted ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#ff6b00" }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M5 14l7 7L23 7"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="text-white font-black text-4xl">Message sent!</h2>

            <p className="text-white/50 text-base max-w-sm">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>

            <button
              onClick={resetForm}
              className="mt-2 text-[#ff6b00] text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4"
            >
              Send another
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className={labelBase}>
                  Name <span className="text-[#ff6b00]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={set("name")}
                  className={inputBase}
                />
              </div>

              <div>
                <label className={labelBase}>
                  Email <span className="text-[#ff6b00]">*</span>
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={set("email")}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelBase}>Message</label>

              <textarea
                rows={5}
                placeholder="Write your message here"
                value={form.message}
                onChange={set("message")}
                className={`${inputBase} resize-none`}
              />
            </div>

            <div className="border-t border-white/10 pt-0" />
          </div>
        )}
      </div>

      {!submitted && (
        <div className="flex flex-wrap gap-4 px-6 md:px-10 mt-6">
          {/* Clear Button */}
          <button
            onClick={resetForm}
            className="w-full md:flex-1 py-6 font-black text-2xl uppercase tracking-tight bg-[#1a1a1a] text-white hover:bg-[#333] transition-all duration-300"
          >
            Clear
          </button>

          {/* Send Button */}
          <button
            onClick={handleSubmit}
            disabled={!form.name || !form.email}
            className="w-full md:flex-1 py-6 font-black text-2xl uppercase tracking-tight transition-all duration-300"
            style={{
              backgroundColor: form.name && form.email ? "#ffffff" : "#1a1a1a",
              color: form.name && form.email ? "#000000" : "#333",
              cursor: form.name && form.email ? "pointer" : "not-allowed",
            }}
            onMouseEnter={(e) => {
              if (!form.name || !form.email) return;
              e.currentTarget.style.backgroundColor = "#ff6b00";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              if (!form.name || !form.email) return;
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#000";
            }}
          >
            Send
          </button>
        </div>
      )}

      <ContactFooter />
    </section>
  );
}
