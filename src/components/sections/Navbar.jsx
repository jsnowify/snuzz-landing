import { useState, useEffect } from "react";
import { LeafB } from "../icons/BotanicalIcons";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#app-screenshots" },
  { label: "How It Works", href: "#how-it-works" },
];

const Navbar = ({ onDownload }) => {
  const [activeHref, setActiveHref] = useState("");

  /* Highlight the section currently in view */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHref(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,239,228,0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(26,39,24,0.1)",
        padding: "0 48px",
      }}
      className="nav-pad-mobile"
    >
      <div className="nav-container">
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <LeafB
            style={{
              width: 12,
              height: 17,
              color: "#5C7A5F",
              marginBottom: -2,
            }}
          />
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
            style={{ fontSize: 9, color: "#5C7A5F", letterSpacing: "0.12em" }}
          >
            CAPSTONE
          </span>
        </div>

        {/* Links */}
        <div
          className="nav-links hide-on-mobile"
          style={{ display: "flex", gap: 32 }}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeHref === href;
            return (
              <a
                key={href}
                href={href}
                className="nav-lnk"
                style={{
                  color: isActive ? "#1A2718" : undefined,
                  borderBottom: isActive
                    ? "1.5px solid #5C7A5F"
                    : "1.5px solid transparent",
                  paddingBottom: 2,
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Pulse dot — signals "coming soon" state */}
          <div
            title="APK coming soon"
            style={{
              width: 6,
              height: 6,
              background: "#C4622D",
              borderRadius: "50%",
              animation: "navDotPulse 2s ease-in-out infinite",
            }}
          />
          <button
            onClick={onDownload}
            className="dl-btn"
            style={{ padding: "9px 18px", fontSize: 10 }}
          >
            Get APK ↓
          </button>
        </div>
      </div>

      <style>{`
        @keyframes navDotPulse {
          0%, 100% { opacity: 0.45; transform: scale(1);   }
          50%       { opacity: 1;    transform: scale(1.35); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
