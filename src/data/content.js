export const SCREENS = [
  {
    label: "Home",
    sublabel: "Live sound monitor",
    desc: "Real-time waveform, live dB reading, and instant detection log. The orb pulses when a sound event is classified above the trigger threshold.",
    src: "home.png",
    placeholder: "Home Screen",
    accent: "#5C7A5F",
  },
  {
    label: "Historical Logs",
    sublabel: "Detection timeline",
    desc: "Full chronological log of every detected event with class label, confidence score, timestamp, and dB level — secured with your Google account.",
    src: "historical-logs.png",
    placeholder: "Historical Logs",
    accent: "#C4622D",
  },
  {
    label: "Profile",
    sublabel: "Settings & calibration",
    desc: "Manage trigger sensitivity, sync thresholds to Firebase, and run a manual ambient calibration. Optimized across all Android 10+ display densities.",
    src: "profile.png",
    placeholder: "Profile Screen",
    accent: "#3D5C40",
  },
];

export const FEATURES = [
  {
    num: "01",
    label: "MobileNetV2 Classification",
    body: "Trained on a primary dataset of 27,000 samples using MobileNetV2 — a lightweight depthwise-separable CNN built for edge inference. 93% accuracy in both training and testing.",
    cat: "ML Core",
  },
  {
    num: "02",
    label: "Trigger-Based Alerting",
    body: "Snuzz fires an alarm only when a detected sound class crosses your configured confidence threshold. No false positives, no notification fatigue.",
    cat: "Alerting",
  },
  {
    num: "03",
    label: "Adaptive Noise Floor",
    body: "FFT-based fingerprinting builds an acoustic baseline of your space. Self-calibrates nightly so background noise never masks a real event.",
    cat: "Signal DSP",
  },
  {
    num: "04",
    label: "Local Inference, Cloud Sync",
    body: "Audio processing happens strictly on-device to protect your privacy. Your activity thresholds and app settings are securely synced via Firebase using Google Authentication.",
    cat: "Architecture",
  },
  {
    num: "05",
    label: "Display-Aware & Optimized",
    body: 'Adaptive layouts tested across Android 10–14 and a range of screen densities — from compact 5" budget phones to large foldables.',
    cat: "Compatibility",
  },
  {
    num: "06",
    label: "Sub-2% CPU Footprint",
    body: "Always-on background listening engineered for battery survival. The DSP pipeline is tuned to run indefinitely without noticeable drain.",
    cat: "Power",
  },
];
