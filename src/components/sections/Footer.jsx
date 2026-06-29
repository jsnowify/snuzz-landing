import { LeafB } from "../icons/BotanicalIcons";

const Footer = () => (
  <footer
    style={{ borderTop: "1.5px solid #1A2718", padding: "80px 48px 40px" }}
    className="pad-mobile"
  >
    <div className="section-container">
      <div className="footer-grid" style={{ marginBottom: 60, gap: 40 }}>
        <div>
          <div
            className="serif"
            style={{
              fontSize: 28,
              fontWeight: 900,
              marginBottom: 12,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Snuzz: Android-Based Office's Noise Detection Application
          </div>
          <p
            style={{
              fontSize: 13,
              color: "rgba(26,39,24,0.55)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            A Bachelor of Science in Information Technology Capstone Project.
            <br />
            Davao del Sur State College.
          </p>
        </div>

        <div className="text-right-mobile">
          {/* Researchers */}
          <div
            style={{
              fontSize: 9,
              color: "#C4622D",
              marginBottom: 14,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Researchers
          </div>
          <div
            className="serif"
            style={{ fontSize: 22, color: "#1A2718", fontWeight: 700 }}
          >
            Joshua L. Cambronero
          </div>
          <div
            className="serif"
            style={{
              fontSize: 22,
              color: "#1A2718",
              fontWeight: 700,
              marginTop: 6,
            }}
          >
            Jessa Mae H. Rubino
          </div>

          {/* Adviser */}
          <div
            style={{
              marginTop: 28,
              paddingTop: 20,
              borderTop: "1px solid rgba(26,39,24,0.1)",
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: "#5C7A5F",
                marginBottom: 8,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Adviser
            </div>
            <div
              className="serif"
              style={{ fontSize: 18, color: "#1A2718", fontWeight: 700 }}
            >
              Rhea Mae L. Perito, MSIS
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(26,39,24,0.1)",
          paddingTop: 28,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LeafB style={{ width: 12, height: 18, color: "#5C7A5F" }} />
          <span
            className="serif"
            style={{ fontSize: 18, fontWeight: 900, fontStyle: "italic" }}
          >
            snuzz
          </span>
          <span
            style={{
              fontSize: 9,
              color: "#5C7A5F",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid rgba(92,122,95,0.3)",
              padding: "2px 8px",
            }}
          >
            v1.0
          </span>
        </div>

        <span
          style={{
            fontSize: 10,
            color: "rgba(26,39,24,0.35)",
            letterSpacing: "0.08em",
          }}
        >
          © {new Date().getFullYear()} Snowi · DSSC Capstone
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
