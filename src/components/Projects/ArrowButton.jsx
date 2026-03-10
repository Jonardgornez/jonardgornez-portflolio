export default function ArrowButton({ direction, onClick, accentColor }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border-2"
      style={{
        borderColor: "rgba(255,255,255,0.35)",
        background: "rgba(0,0,0,0.35)",
        color: "#fff",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = accentColor;
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.color = "#000";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.35)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
        e.currentTarget.style.color = "#fff";
      }}
    >
      {direction === "prev" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
