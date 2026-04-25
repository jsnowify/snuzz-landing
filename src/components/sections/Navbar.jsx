const Navbar = ({ onDownload }) => (
  <nav
    style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(244,239,228,0.94)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(26,39,24,0.1)",
      padding: "0 48px",
    }}
    className="nav-pad-mobile"
  >
    <div className="nav-container">
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span
          className="serif"
          style={{
            fontSize: 22,
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.04em",
          }}
        >
          snuzz
        </span>
        <span
          style={{ fontSize: 10, color: "#5C7A5F", letterSpacing: "0.1em" }}
        >
          CAPSTONE
        </span>
      </div>
      <div
        className="nav-links hide-on-mobile"
        style={{ display: "flex", gap: 36 }}
      >
        {["Features", "App Screenshots", "How It Works"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(/ /g, "-")}`}
            className="nav-lnk"
          >
            {l}
          </a>
        ))}
      </div>
      <button
        onClick={onDownload}
        className="dl-btn"
        style={{ padding: "9px 20px", fontSize: 11 }}
      >
        Get APK ↓
      </button>
    </div>
  </nav>
);

export default Navbar;
