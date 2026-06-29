import { LeafA, BranchLeft, SprigRight } from "../icons/BotanicalIcons";

const HeroSection = ({ onDownload }) => (
  <section
    className="section-container hero-grid"
    style={{
      padding: "88px 48px 72px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Botanical decorations */}
    <LeafA
      style={{
        top: -30,
        right: "30%",
        width: 90,
        height: 130,
        color: "#5C7A5F",
        transform: "rotate(20deg)",
      }}
    />
    <BranchLeft
      style={{
        top: 0,
        right: "20%",
        width: 100,
        height: 160,
        color: "#3D5C40",
      }}
    />
    <SprigRight
      style={{
        bottom: 0,
        left: -10,
        width: 80,
        height: 130,
        color: "#5C7A5F",
        transform: "scaleX(-1)",
      }}
    />

    <div style={{ position: "relative", zIndex: 2 }}>
      {/* Eyebrow — live pulse dot instead of leaf icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 34,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            background: "#C4622D",
            borderRadius: "50%",
            animation: "heroDotPulse 2s ease-in-out infinite",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5C7A5F",
          }}
        >
          Capstone Project · DSSC · BSIT
        </span>
      </div>

      <style>{`
        @keyframes heroDotPulse {
          0%, 100% { opacity: 0.45; transform: scale(1);   }
          50%       { opacity: 1;    transform: scale(1.4); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0;   }
        }
        @keyframes pulseBar {
          0%, 100% { transform: scaleY(1);   opacity: 0.5; }
          50%       { transform: scaleY(2.6); opacity: 1;   }
        }
      `}</style>

      {/* Headline */}
      <h1
        className="serif"
        style={{
          fontSize: "clamp(42px, 6vw, 88px)",
          fontWeight: 900,
          lineHeight: 0.94,
          letterSpacing: "-0.04em",
          marginBottom: 36,
        }}
      >
        <span className="hl-clip">
          <span className="hl-mark">Your ears,</span>
        </span>
        <br />
        <span className="hl-clip">
          <span
            className="hl-mark"
            style={{ color: "#5C7A5F", fontStyle: "italic" }}
          >
            everywhere
          </span>
        </span>
        <br />
        <span className="hl-clip">
          <span className="hl-mark">you aren't.</span>
        </span>
      </h1>

      {/* Body */}
      <p
        className="hero-body"
        style={{
          fontSize: 15,
          lineHeight: 1.85,
          color: "rgba(26,39,24,0.58)",
          maxWidth: 460,
          marginBottom: 38,
          fontWeight: 300,
        }}
      >
        Developed by <strong>Joshua L. Cambronero</strong> and{" "}
        <strong>Jessa Mae H. Rubino</strong>. Snuzz uses edge AI to process
        audio strictly on your device for total privacy, syncing your activity
        thresholds securely via <strong>Google Auth &amp; Firebase</strong>.{" "}
        <span style={{ color: "#5C7A5F" }}>Version 1.0 now available.</span>
      </p>

      {/* CTAs */}
      <div
        className="hero-cta-row"
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: 52,
        }}
      >
        <button onClick={onDownload} className="dl-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v8M3 6l4 4 4-4M1 11h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download APK
        </button>
        <a href="#app-screenshots" className="ghost-btn">
          See the App →
        </a>
      </div>

      {/* Stats */}
      <div
        className="stats-grid"
        style={{
          borderTop: "1px solid rgba(26,39,24,0.13)",
          paddingTop: 26,
          display: "flex",
        }}
      >
        {[
          ["93%", "Accuracy"],
          ["27K", "Samples"],
          ["<40ms", "Latency"],
          ["Firebase", "Sync"],
        ].map(([v, l], i) => (
          <div
            key={l}
            className="hero-stat"
            style={{
              flex: 1,
              borderRight: i < 3 ? "1px solid rgba(26,39,24,0.1)" : "none",
              paddingLeft: i > 0 ? 12 : 0,
              paddingRight: i < 3 ? 12 : 0,
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: "clamp(16px, 2vw, 22px)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {v}
            </div>
            <div
              style={{
                fontSize: 9,
                color: "#5C7A5F",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 5,
              }}
            >
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Phone mockup */}
    <div
      className="hero-phone"
      style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="phone-float"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "320px",
        }}
      >
        <div className="pixel-9-frame">
          <div className="pixel-9-screen" style={{ position: "relative" }}>
            <div className="pixel-9-notch" />

            {/* Screenshot */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "#1A2718",
                overflow: "hidden",
              }}
            >
              <img
                src="home.png"
                alt="Snuzz Home Screen"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            </div>

            {/* Audio pulse overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  border: "2px solid rgba(196,98,45,0.4)",
                  animation:
                    "pulseRing 2s cubic-bezier(0.215,0.61,0.355,1) infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  border: "2px solid rgba(92,122,95,0.3)",
                  animation:
                    "pulseRing 2s cubic-bezier(0.215,0.61,0.355,1) infinite 0.6s",
                }}
              />

              <div style={{ position: "relative", width: 60, height: 60 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 4,
                      height: 12,
                      background: "#C4622D",
                      borderRadius: 2,
                      transformOrigin: "0 0",
                      transform: `rotate(${(i * 360) / 12}deg) translate(-2px, 15px)`,
                      animation: `pulseBar 1.2s ease-in-out infinite ${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
