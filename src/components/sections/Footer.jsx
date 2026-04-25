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
            style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}
          >
            Snuzz: Android-Based Office's Noise Detection Application
          </div>
          <p
            style={{
              fontSize: 14,
              color: "rgba(26,39,24,0.6)",
              lineHeight: 1.6,
            }}
          >
            A Bachelor of Science in Information Technology Capstone Project.
            <br />
            Davao del Sur State College.
          </p>
        </div>
        <div className="text-right-mobile">
          <div
            style={{
              fontSize: 11,
              color: "#C4622D",
              marginBottom: 12,
              letterSpacing: "0.1em",
            }}
          >
            RESEARCHERS
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
              marginTop: 4,
            }}
          >
            Jessa Mae H. Rubino
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(26,39,24,0.1)",
          paddingTop: 30,
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
        </div>
        <span
          style={{
            fontSize: 10,
            color: "rgba(26,39,24,0.4)",
            letterSpacing: "0.08em",
          }}
        >
          © 2026 Snowi
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
