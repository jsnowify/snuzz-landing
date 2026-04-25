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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(26, 39, 24, 0.7)",
          backdropFilter: "blur(6px)",
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: "relative",
          background: "#F4EFE4",
          border: "2px solid #1A2718",
          padding: "40px",
          maxWidth: "450px",
          width: "100%",
          boxShadow: "16px 16px 0px #5C7A5F",
          animation: "popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        <div
          className="serif"
          style={{
            fontSize: 28,
            fontWeight: 900,
            marginBottom: 16,
            color: "#1A2718",
          }}
        >
          Notice
        </div>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 14,
            lineHeight: 1.6,
            color: "#1A2718",
            marginBottom: 32,
          }}
        >
          The{" "}
          <span style={{ color: "#C4622D", fontWeight: "bold" }}>
            Snuzz APK
          </span>{" "}
          is currently in the final stages of the Capstone deployment. The
          download link will be made active once the final build is verified.
        </p>
        <button
          onClick={onClose}
          className="dl-btn"
          style={{ width: "100%", justifyContent: "center", fontSize: 14 }}
        >
          Understood
        </button>
      </div>
    </div>
  );
};

export default SnuzzAlert;
