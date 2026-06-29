const SnuzzAlert = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(26,39,24,0.72)",
          backdropFilter: "blur(6px)",
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          background: "#F4EFE4",
          border: "2px solid #1A2718",
          padding: "40px",
          maxWidth: "440px",
          width: "100%",
          boxShadow: "14px 14px 0px #5C7A5F",
          animation: "popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
        }}
      >
        {/* Corner accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderLeft: "22px solid transparent",
            borderTop: "22px solid #C4622D",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#C4622D",
            marginBottom: 14,
          }}
        >
          // Notice
        </div>

        <div
          className="serif"
          style={{
            fontSize: 26,
            fontWeight: 900,
            marginBottom: 18,
            color: "#1A2718",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          APK coming soon.
        </div>

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
            lineHeight: 1.75,
            color: "rgba(26,39,24,0.62)",
            marginBottom: 32,
            fontWeight: 300,
          }}
        >
          The{" "}
          <span style={{ color: "#C4622D", fontWeight: 500 }}>Snuzz APK</span>{" "}
          is in the final stages of Capstone deployment. The download will be
          live once the build is verified and signed.
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(26,39,24,0.1)",
            marginBottom: 24,
          }}
        />

        <button
          onClick={onClose}
          className="dl-btn"
          style={{ width: "100%", justifyContent: "center", fontSize: 13 }}
        >
          Understood
        </button>
      </div>
    </div>
  );
};

export default SnuzzAlert;
