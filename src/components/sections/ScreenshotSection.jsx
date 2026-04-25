import { useState, useEffect } from "react";
import { LeafA, SprigRight } from "../icons/BotanicalIcons";
import { SCREENS } from "../../data/content";

const ScreenshotSection = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveScreen((p) => (p + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="app-screenshots"
      className="showcase-section section-container"
      style={{
        padding: "100px 48px",
        background: "#F0EBE0",
        borderBottom: "1px solid rgba(26,39,24,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LeafA
        style={{
          top: -20,
          left: -10,
          width: 100,
          height: 148,
          color: "#5C7A5F",
          transform: "rotate(-10deg)",
        }}
      />
      <SprigRight
        style={{ top: 40, right: 48, width: 70, height: 110, color: "#8FAF82" }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          className="header-grid"
          style={{
            marginBottom: 60,
            borderTop: "1.5px solid #1A2718",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5C7A5F",
              paddingTop: 2,
            }}
          >
            // App Screenshots
          </div>
          <div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(28px, 3.5vw, 46px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}
            >
              See it in action.
              <br />
              <span style={{ color: "#5C7A5F", fontStyle: "italic" }}>
                Three screens. One purpose.
              </span>
            </h2>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.8,
                color: "rgba(26,39,24,0.55)",
                maxWidth: 480,
                fontWeight: 300,
              }}
            >
              Snuzz is built for clarity under pressure. Every screen is
              optimized across Android 10+ display sizes and densities, built
              for the Pixel 9 aesthetic.
            </p>
          </div>
        </div>

        <div className="screenshot-grid">
          <div
            className="screen-item"
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              className="pixel-9-frame"
              style={{ width: "100%", maxWidth: "300px" }}
            >
              <div className="pixel-9-screen">
                <div className="pixel-9-notch" />
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    background: "#1A2718",
                    overflow: "hidden",
                  }}
                >
                  {SCREENS[activeScreen].src ? (
                    <img
                      src={SCREENS[activeScreen].src}
                      alt={SCREENS[activeScreen].label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        padding: 24,
                        paddingTop: 60,
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          border: "2px dashed rgba(92,122,95,0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 14,
                            height: 14,
                            border: "1.5px solid #5C7A5F",
                            borderRadius: 2,
                          }}
                        />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div
                          className="serif"
                          style={{
                            color: "#5C7A5F",
                            fontSize: 16,
                            fontWeight: 700,
                            fontStyle: "italic",
                            marginBottom: 6,
                          }}
                        >
                          {SCREENS[activeScreen].placeholder}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "rgba(92,122,95,0.6)",
                            letterSpacing: "0.08em",
                            lineHeight: 1.6,
                          }}
                        >
                          Pixel 9 Aspect Ratio
                          <br />
                          (9:20)
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -16,
                left: "50%",
                transform: "translateX(-50%)",
                background: SCREENS[activeScreen].accent,
                color: "#F4EFE4",
                padding: "6px 20px",
                borderRadius: 100,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                zIndex: 10,
              }}
            >
              {SCREENS[activeScreen].label}
            </div>
          </div>

          <div className="screen-item" style={{ paddingTop: "24px" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
              {SCREENS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreen(i)}
                  style={{
                    width: i === activeScreen ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background:
                      i === activeScreen ? "#1A2718" : "rgba(26,39,24,0.18)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 1.5,
                  background: SCREENS[activeScreen].accent,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: SCREENS[activeScreen].accent,
                }}
              >
                {SCREENS[activeScreen].sublabel}
              </span>
            </div>

            <h3
              className="serif"
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              {SCREENS[activeScreen].label}
            </h3>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(26,39,24,0.58)",
                maxWidth: 440,
                fontWeight: 300,
                marginBottom: 32,
              }}
            >
              {SCREENS[activeScreen].desc}
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setActiveScreen((p) => (p + 2) % 3)}
                className="ghost-btn"
                style={{ fontSize: 12, padding: "10px 20px" }}
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveScreen((p) => (p + 1) % 3)}
                className="ghost-btn"
                style={{ fontSize: 12, padding: "10px 20px" }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
