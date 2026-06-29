import { useEffect, useRef } from "react";

const SnuzzLoader = () => {
  const rectRef = useRef(null);

  useEffect(() => {
    let raf;
    let start = null;
    const duration = 2400;

    const animate = (ts) => {
      if (!start) start = ts;
      const t = ((ts - start) % duration) / duration;
      let fill;
      if (t < 0.6) fill = t / 0.6;
      else if (t < 0.85) fill = 1;
      else fill = 1 - (t - 0.85) / 0.15;

      if (rectRef.current) {
        const h = fill * 120;
        rectRef.current.setAttribute("y", 120 - h);
        rectRef.current.setAttribute("height", h);
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#F4EFE4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        zIndex: 9999,
        fontFamily: "'DM Mono', monospace",
      }}
    >
      <style>{`
        @keyframes loaderPulseOut {
          0%   { transform: scale(0.3); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes loaderWaveBar {
          0%, 100% { height: 4px;  opacity: 0.3; }
          50%       { height: 20px; opacity: 1;   }
        }
        @keyframes loaderFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      {/* Pulse rings behind the leaf */}
      <div
        style={{
          position: "relative",
          width: 80,
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[0, 0.8, 1.6].map((delay, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 110,
              height: 110,
              borderRadius: "50%",
              border: "1px solid rgba(196,98,45,0.22)",
              animation: `loaderPulseOut 2.4s ease-out ${delay}s infinite`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Leaf SVG with animated fill */}
        <svg
          width="80"
          height="120"
          viewBox="0 0 80 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", zIndex: 2 }}
        >
          <defs>
            <clipPath id="loaderLeafClip">
              <path d="M40 110 C40 110 10 80 8 50 C6 20 30 5 40 5 C50 5 74 20 72 50 C70 80 40 110 40 110Z" />
            </clipPath>
          </defs>

          {/* Leaf shell */}
          <path
            d="M40 110 C40 110 10 80 8 50 C6 20 30 5 40 5 C50 5 74 20 72 50 C70 80 40 110 40 110Z"
            fill="rgba(92,122,95,0.07)"
            stroke="rgba(92,122,95,0.38)"
            strokeWidth="1.5"
          />

          {/* Animated fill */}
          <rect
            ref={rectRef}
            x="0"
            y="120"
            width="80"
            height="0"
            fill="rgba(92,122,95,0.32)"
            clipPath="url(#loaderLeafClip)"
          />

          {/* Veins on top */}
          <path
            d="M40 10 L40 108"
            stroke="rgba(92,122,95,0.28)"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M40 30 C30 35 18 42 12 52"
            stroke="rgba(92,122,95,0.22)"
            strokeWidth="0.7"
            fill="none"
          />
          <path
            d="M40 45 C50 50 62 57 68 67"
            stroke="rgba(92,122,95,0.22)"
            strokeWidth="0.7"
            fill="none"
          />
          <path
            d="M40 60 C30 65 20 70 15 78"
            stroke="rgba(92,122,95,0.22)"
            strokeWidth="0.7"
            fill="none"
          />
        </svg>
      </div>

      {/* Brand + waveform + label */}
      <div
        style={{
          textAlign: "center",
          animation: "loaderFadeIn 0.6s ease-out both",
          animationDelay: "0.2s",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 28,
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.04em",
            color: "#1A2718",
            marginBottom: 14,
          }}
        >
          snuzz
        </div>

        {/* Waveform bars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            height: 28,
            marginBottom: 12,
          }}
        >
          {[0, 0.1, 0.2, 0.3, 0.2, 0.1, 0].map((delay, i) => (
            <div
              key={i}
              style={{
                width: 3,
                height: 4,
                background: "#C4622D",
                borderRadius: 2,
                animation: `loaderWaveBar 1.2s ease-in-out ${delay}s infinite`,
              }}
            />
          ))}
        </div>

        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(26,39,24,0.38)",
          }}
        >
          Initializing audio engine
        </div>
      </div>

      {/* Bottom badge */}
      <div
        style={{
          fontSize: 9,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#5C7A5F",
          border: "1px solid rgba(92,122,95,0.28)",
          padding: "5px 14px",
          animation: "loaderFadeIn 0.6s ease-out 0.5s both",
        }}
      >
        Edge AI · On-Device · Private
      </div>
    </div>
  );
};

export default SnuzzLoader;
