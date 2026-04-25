import { BranchLeft } from "../icons/BotanicalIcons";
import { FEATURES } from "../../data/content";

const FeaturesSection = () => (
  <section
    id="features"
    className="feat-section section-container"
    style={{ padding: "100px 48px", position: "relative" }}
  >
    <BranchLeft
      style={{
        bottom: 40,
        right: 0,
        width: 90,
        height: 150,
        color: "#5C7A5F",
        transform: "scaleX(-1) rotate(-10deg)",
      }}
    />
    <div
      className="header-grid"
      style={{
        marginBottom: 40,
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
        // Feature Set
      </div>
      <h2
        className="serif"
        style={{
          fontSize: "clamp(28px, 3.8vw, 48px)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          maxWidth: 520,
        }}
      >
        Engineered for ears that
        <br />
        <span style={{ color: "#5C7A5F", fontStyle: "italic" }}>
          can't always listen.
        </span>
      </h2>
    </div>
    <div>
      {FEATURES.map((f, i) => (
        <div key={i} className="feat-row">
          <div
            className="fn mono"
            style={{
              fontSize: 12,
              color: "rgba(26,39,24,0.4)",
              letterSpacing: "0.08em",
              paddingTop: 3,
            }}
          >
            {f.num}
          </div>
          <div
            className="hide-on-mobile"
            style={{
              background: "rgba(26,39,24,0.1)",
              width: 1,
              alignSelf: "stretch",
            }}
          />
          <div>
            <div
              className="serif"
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 9,
              }}
            >
              {f.label}
            </div>
            <div
              style={{
                fontSize: 13,
                lineHeight: 1.82,
                color: "rgba(26,39,24,0.56)",
                fontWeight: 300,
                maxWidth: 520,
              }}
            >
              {f.body}
            </div>
          </div>
          <div style={{ paddingTop: 4 }}>
            <div
              style={{
                width: 24,
                height: 1.5,
                background: "#5C7A5F",
                marginBottom: 6,
              }}
            />
            <div
              style={{
                fontSize: 10,
                color: "#5C7A5F",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {f.cat}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
