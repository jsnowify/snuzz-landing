import { LeafA, LeafB, BranchLeft, SprigRight } from "../icons/BotanicalIcons";

const HeroSection = ({ onDownload }) => (
  <section
    className="section-container hero-grid"
    style={{
      padding: "88px 48px 72px",
      position: "relative",
      overflow: "hidden",
    }}
  >
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 34,
        }}
      >
        <LeafB style={{ width: 16, height: 22, color: "#5C7A5F" }} />
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5C7A5F",
          }}
        >
          Capstone Project · DSSC
        </span>
      </div>

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

      <p
        className="hero-body"
        style={{
          fontSize: 15,
          lineHeight: 1.85,
          color: "rgba(26,39,24,0.6)",
          maxWidth: 460,
          marginBottom: 38,
          fontWeight: 300,
        }}
      >
        Developed by <strong>Joshua L. Cambronero</strong> and{" "}
        <strong>Jessa Mae H. Rubino</strong>. Snuzz uses edge AI to process
        audio strictly on your device for total privacy, while securely syncing
        your activity thresholds using <strong>Google Auth & Firebase</strong>.
      </p>

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
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: "clamp(18px, 2vw, 22px)",
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

            {/* The Actual Screenshot */}
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

            {/* Overlay: Pulse Audio Waveform */}
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
              {/* Outer Pulse Rings */}
              <div
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  border: "2px solid rgba(196, 98, 45, 0.4)", // Rust color
                  animation:
                    "pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  border: "2px solid rgba(92, 122, 95, 0.3)", // Sage color
                  animation:
                    "pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite 0.6s",
                }}
              />

              {/* Inner Dynamic Bars (Circular layout) */}
              <div style={{ position: "relative", width: 60, height: 60 }}>
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 360) / 12;
                  const delay = i * 0.1;
                  return (
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
                        transform: `rotate(${angle}deg) translate(-2px, 15px)`,
                        animation: `pulseBar 1.2s ease-in-out infinite ${delay}s`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
