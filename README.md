# 🌱 Snuzz Landing Page

![Snuzz Capstone Project](https://img.shields.io/badge/Status-Beta-C4622D?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

> **Snuzz: Android-Based Office Noise Detection Application**
> A Bachelor of Science in Information Technology Capstone Project for Davao del Sur State College.

## 📖 Overview

This repository contains the official landing page for **Snuzz**, a privacy-first, Android-based environmental sound monitor. The landing page features a custom **Organic Brutalist** design system with a botanical field guide aesthetic, responsive layouts, a CSS-based Pixel 9 mockup, and GSAP-powered animations.

**About the App:** Snuzz leverages edge AI (MobileNetV2) trained on 27,000 audio samples to monitor critical environmental sounds entirely on-device. It secures and syncs user profiles, configurations, and detection thresholds using **Google Authentication** and **Firebase**.

## ✨ Key Features

- **📱 Pixel 9 Interactive Mockup:** Custom CSS-based floating phone displaying an animated audio waveform over your real app screenshots.
- **🎨 Organic Brutalism UI:** Unique design system combining deep ink (`#1A2718`), sage greens (`#5C7A5F`), and rust accents (`#C4622D`).
- **✨ GSAP Animations:** Smooth entrance animations, infinite marquees, and dynamic waveform visualizers.
- **🧩 Modular Architecture:** Clean, maintainable component-based React structure.
- **🖱️ Custom Cursor:** Interactive brutalist cursor with difference blending for desktop users.

## 🛠️ App Tech Stack (Showcased)

- **Machine Learning:** MobileNetV2, TensorFlow Lite
- **Backend & Auth:** Firebase, Google Authentication
- **Platform:** Android 10+ (Native)
- **Performance:** Sub-2% CPU footprint with adaptive FFT noise floor processing.

## 📂 Landing Page Project Structure

```text
src/
├── data/
│   └── content.js              # Copy, features, and screen data
├── components/
│   ├── icons/
│   │   └── BotanicalIcons.jsx  # SVG leaf and branch decorations
│   ├── common/
│   │   ├── CustomCursor.jsx    # Desktop custom pointer
│   │   └── SnuzzAlert.jsx      # Download intercept modal
│   └── sections/
│       ├── Navbar.jsx          # Sticky navigation
│       ├── HeroSection.jsx     # Main hero with Pixel 9 mockup
│       ├── ScreenshotSection.jsx # App showcase carousel
│       ├── FeaturesSection.jsx # ML/App features grid
│       ├── ProcessSection.jsx  # 3-step installation guide
│       └── Footer.jsx          # Capstone credits & links
└── App.jsx                     # Main composition & global CSS
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/snuzz-landing.git](https://github.com/yourusername/snuzz-landing.git)
   cd snuzz-landing
   ```
2. **Install dependencies** (Make sure GSAP is included)
   ```bash
   npm install gsap
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```

## 👨‍💻 Researchers & Developers

This project was developed as a Capstone Project by:

- **Joshua L. Cambronero**
- **Jessa Mae H. Rubino**

_Davao del Sur State College — BS Information Technology_

## 📄 License

This project was built for educational and research purposes. © 2026 Android Sound Intelligence · Philippines.
