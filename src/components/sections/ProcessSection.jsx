import { LeafA } from "../icons/BotanicalIcons";

const ProcessSection = () => (
  <section
    id="how-it-works"
    className="how-section section-container-full"
    style={{
      background: "#1A2718",
      padding: "100px 48px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <LeafA
      style={{
        top: -20,
        right: 80,
        width: 110,
        height: 160,
        color: "#5C7A5F",
        transform: "rotate(25deg)",
        opacity: 0.25,
      }}
    />

    <div
      className="section-container"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div
        className="header-grid"
        style={{
          marginBottom: 60,
          borderTop: "1px solid rgba(244,239,228,0.1)",
          paddingTop: 24,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(143,175,130,0.6)",
            paddingTop: 2,
          }}
        >
          // Process
        </div>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#F4EFE4",
          }}
        >
          Running in 3 minutes.
          <br />
          <span style={{ color: "#8FAF82", fontStyle: "italic" }}>
            Silent for life.
          </span>
        </h2>
      </div>

      <div className="process-grid">
        {[
          {
            n: "I",
            title: "Authenticate & Calibrate",
            body: "Sign in with Google and grant mic access. Run the 30-second ambient scan. Snuzz builds your noise floor profile automatically.",
          },
          {
            n: "II",
            title: "Set Your Triggers",
            body: "Choose sound classes and confidence thresholds that matter. Your custom profiles are securely backed up and synced via Firebase.",
          },
          {
            n: "III",
            title: "Forget It's There",
            body: "It runs silently. The moment a sound hits threshold, you get a haptic burst and an instant lock-screen alert. Every time.",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="how-item"
            style={{
              padding: "40px 32px",
              borderLeft: "1px solid rgba(244,239,228,0.07)",
              borderBottom: "1px solid rgba(244,239,228,0.07)",
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: 56,
                fontWeight: 900,
                color: "rgba(244,239,228,0.05)",
                lineHeight: 1,
                marginBottom: 28,
                fontStyle: "italic",
              }}
            >
              {s.n}
            </div>
            <div
              className="serif"
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: "#F4EFE4",
                letterSpacing: "-0.02em",
                marginBottom: 14,
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontSize: 13,
                lineHeight: 1.85,
                color: "rgba(244,239,228,0.42)",
                fontWeight: 300,
              }}
            >
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
