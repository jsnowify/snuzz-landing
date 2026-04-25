import { useEffect, useState } from "react";
import CustomCursor from "./components/common/CustomCursor";
import SnuzzAlert from "./components/common/SnuzzAlert";
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ScreenshotSection from "./components/sections/ScreenshotSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ProcessSection from "./components/sections/ProcessSection";
import Footer from "./components/sections/Footer";

export default function SnuzzLanding() {
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    setTimeout(() => {
      if (document.querySelector(".hl-mark")) {
        gsap.fromTo(
          ".hl-mark",
          { y: "105%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.08,
          },
        );
      }
    }, 100);
  }, []);

  return (
    <div
      style={{
        background: "#F4EFE4",
        color: "#1A2718",
        fontFamily: "'DM Mono', monospace",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* GLOBAL RESPONSIVE CSS INJECTIONS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #5C7A5F; color: #F4EFE4; }
        
        @media (pointer: fine) { body, a, button { cursor: none !important; } }
        @media (pointer: coarse) { .hide-on-mobile { display: none !important; } }

        .custom-cursor { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999; transition: transform 0.1s ease-out; }
        .cursor-dot { width: 12px; height: 12px; border-radius: 50%; transition: transform 0.2s, background 0.2s; }

        body::after {
          content: ''; position: fixed; inset: 0; z-index: 9998; pointer-events: none; opacity: 0.032;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .mono  { font-family: 'DM Mono', monospace; }
        .hl-clip { overflow: hidden; display: inline-block; line-height: 1.05; }
        .hl-mark { display: inline-block; }

        .dl-btn { display: inline-flex; align-items: center; gap: 12px; background: #1A2718; color: #F4EFE4; font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 28px; border: none; transition: 0.22s; text-decoration: none; }
        .dl-btn:hover { background: #5C7A5F; transform: translateY(-2px); }
        .ghost-btn { display: inline-flex; align-items: center; gap: 10px; background: transparent; color: #1A2718; font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 400; letter-spacing: 0.08em; text-transform: uppercase; padding: 13px 24px; border: 1.5px solid #1A2718; transition: 0.22s; text-decoration: none; }
        .ghost-btn:hover { background: #1A2718; color: #F4EFE4; }

        .section-container { max-width: 1280px; margin: 0 auto; width: 100%; }
        .nav-container { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 56px; }
        
        .hero-grid { display: grid; grid-template-columns: 1fr 380px; gap: 64px; align-items: start; }
        .header-grid { display: grid; grid-template-columns: 180px 1fr; gap: 56px; }
        .screenshot-grid { display: grid; grid-template-columns: 320px 1fr; gap: 80px; align-items: center; }
        .feat-row { display: grid; grid-template-columns: 160px 1px 1fr 148px; gap: 0 36px; padding: 26px 0; align-items: start; border-bottom: 1px solid rgba(26,39,24,0.13); transition: background 0.2s; }
        .feat-row:hover { background: rgba(92,122,95,0.07); }
        .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .footer-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .text-right-mobile { text-align: right; }

        .nav-lnk { color: rgba(26,39,24,0.48); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; transition: 0.15s; }
        .nav-lnk:hover { color: #1A2718; }
        .screen-tab { cursor: none; border: 1.5px solid rgba(26,39,24,0.18); padding: 9px 18px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; transition: 0.2s; background: transparent; font-family: 'DM Mono', monospace; }
        .screen-tab.active { background: #1A2718; color: #F4EFE4; border-color: #1A2718; }

        .pixel-9-frame {
          aspect-ratio: 9 / 20;
          background: #cec8bc;
          border-radius: 44px;
          padding: 10px;
          box-shadow: 16px 32px 80px rgba(26,39,24,0.2), -6px -6px 20px rgba(255,255,255,0.6);
          border: 1px solid rgba(26,39,24,0.2);
        }
        .pixel-9-screen { width: 100%; height: 100%; background: #1A2718; border-radius: 34px; overflow: hidden; position: relative; }
        .pixel-9-notch { position: absolute; top: 14px; left: 50%; transform: translateX(-50%); width: 72px; height: 22px; background: #000; border-radius: 12px; z-index: 10; }

        @keyframes wb { 0%,100% { transform: scaleY(1); } 50% { transform: scaleY(2.8); } }
        @keyframes tilt-float { 0%,100% { transform: rotate(-3.5deg) translateY(0px); } 50% { transform: rotate(-3.5deg) translateY(-10px); } }
        @keyframes popIn { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .phone-float { animation: tilt-float 6.5s ease-in-out infinite; }
        .leaf-deco { pointer-events: none; position: absolute; }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .screenshot-grid { grid-template-columns: 1fr; gap: 48px; }
          .process-grid { grid-template-columns: 1fr; }
          .header-grid { grid-template-columns: 1fr; gap: 16px; }
          .feat-row { grid-template-columns: 1fr; gap: 12px; padding: 32px 0; }
          .hide-on-mobile { display: none !important; }
        }
        
        @media (max-width: 768px) {
          .section-container { padding-left: 24px !important; padding-right: 24px !important; }
          .nav-pad-mobile { padding: 0 24px !important; }
          .pad-mobile { padding: 60px 24px 30px !important; }
          h1.serif { font-size: 42px !important; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .text-right-mobile { text-align: left; }
          .pixel-9-frame { max-width: 280px; }
        }
      `}</style>

      <CustomCursor />
      <SnuzzAlert
        isOpen={alertVisible}
        onClose={() => setAlertVisible(false)}
      />

      <Navbar onDownload={() => setAlertVisible(true)} />
      <HeroSection onDownload={() => setAlertVisible(true)} />
      <ScreenshotSection />
      <FeaturesSection />
      <ProcessSection />
      <Footer />
    </div>
  );
}
