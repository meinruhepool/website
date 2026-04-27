import React, { useEffect, useRef, useState } from "react";

// ─── Cubic bezier evaluator ──────────────────────────────────────────────────
function cubicBezier(t, p0, p1, p2, p3) {
  const mt = 1 - t;
  return (
    mt * mt * mt * p0 +
    3 * mt * mt * t * p1 +
    3 * mt * t * t * p2 +
    t * t * t * p3
  );
}

// ─── Ease-in-out cubic ───────────────────────────────────────────────────────
function easeInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// ─── Inline SVG butterfly — side profile view ───────────────────────────────
// Composition: body on left edge (x≈30), wings extend rightward.
// Upper wing: large sail/teardrop pointing up-right, root at thorax (30,105).
// Lower wing: rounded fan, root at thorax, extends down-right.
// Antenna: single curve arching forward-up from head top.
function ButterflySVG({ phase }) {
  // phase: "flying" | "landing" | "resting"
  // Wing flap in side-profile = scaleX (wings open/close left-right from body)
  // transform-origin anchored at body attachment point (30, 105)
  return (
    <svg
      viewBox="0 0 200 200"
      width="56"
      height="56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <style>{`
        /* Side-profile flap: wings sweep back (scaleX collapse) and open */
        @keyframes wingFlapSide {
          0%   { transform: scaleX(1); }
          45%  { transform: scaleX(0.15); }
          50%  { transform: scaleX(0.10); }
          55%  { transform: scaleX(0.15); }
          100% { transform: scaleX(1); }
        }
        @keyframes wingFoldSide {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0.08); }
        }
        @keyframes breatheSide {
          0%, 100% { transform: scaleX(0.08); }
          50%       { transform: scaleX(0.13); }
        }
        @keyframes wingFlapLowerSide {
          0%   { transform: scaleX(1); }
          45%  { transform: scaleX(0.2); }
          50%  { transform: scaleX(0.14); }
          55%  { transform: scaleX(0.2); }
          100% { transform: scaleX(1); }
        }
        @keyframes wingFoldLowerSide {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0.1); }
        }
        @keyframes breatheLowerSide {
          0%, 100% { transform: scaleX(0.1); }
          50%       { transform: scaleX(0.16); }
        }

        /* Upper wing — origin at body/thorax join */
        .sp-wing-upper {
          transform-origin: 30px 105px;
          ${phase === "flying"  ? `animation: wingFlapSide 0.125s ease-in-out infinite;` : ""}
          ${phase === "landing" ? `animation: wingFoldSide 0.6s ease-in-out forwards;` : ""}
          ${phase === "resting" ? `animation: breatheSide 2s ease-in-out infinite;` : ""}
        }
        /* Lower wing — origin at body/thorax join */
        .sp-wing-lower {
          transform-origin: 30px 118px;
          ${phase === "flying"  ? `animation: wingFlapLowerSide 0.125s ease-in-out infinite;` : ""}
          ${phase === "landing" ? `animation: wingFoldLowerSide 0.6s ease-in-out forwards;` : ""}
          ${phase === "resting" ? `animation: breatheLowerSide 2s ease-in-out infinite;` : ""}
        }
      `}</style>

      {/*
        SIDE PROFILE LAYOUT (viewBox 0 0 200 200):
        Body: slim vertical capsule at x≈28-32, from y=55 (head) to y=160 (abdomen tip)
        Thorax (wing attachment): y≈95–120
        Upper wing root: (30, 105) — sail shape sweeps up and to the right, peak ~(145, 28)
        Lower wing root: (30, 118) — fan shape sweeps right and slightly down, peak ~(130, 168)
        Antenna: from head top (30, 58) curves forward-right, tip ~(70, 28)
      */}

      {/* ── Upper wing (sail / teardrop) ── */}
      {/* Outer shape: root at thorax, curves up-right to apex, returns along trailing edge */}
      <path
        className="sp-wing-upper"
        d="M30 105
           C 50 85,  90 30, 145 28
           C 160 28, 165 42, 150 62
           C 130 90, 75 108, 30 105 Z"
        fill="rgba(255,255,255,0.26)"
        stroke="rgba(255,255,255,0.80)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* Inner vein / highlight */}
      <path
        className="sp-wing-upper"
        d="M30 105
           C 55 92, 100 55, 138 42
           C 125 70, 85 100, 30 105 Z"
        fill="rgba(255,255,255,0.09)"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="0.6"
      />

      {/* ── Lower wing (rounded fan) ── */}
      <path
        className="sp-wing-lower"
        d="M30 118
           C 48 118, 90 115, 128 140
           C 140 150, 138 168, 120 172
           C 95 176, 55 158, 30 140
           C 28 132, 28 124, 30 118 Z"
        fill="rgba(255,255,255,0.19)"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Lower wing inner detail */}
      <path
        className="sp-wing-lower"
        d="M30 120
           C 55 120, 95 128, 118 148
           C 100 152, 65 148, 35 135 Z"
        fill="rgba(255,255,255,0.07)"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="0.5"
      />

      {/* ── Body: slim tapered capsule, thicker at thorax ── */}
      {/* Abdomen (lower, narrower) */}
      <path
        d="M27 118 C26 140, 27 155, 30 160 C33 155, 34 140, 33 118 Z"
        fill="rgba(255,255,255,0.55)"
      />
      {/* Thorax (upper, wider) */}
      <ellipse cx="30" cy="105" rx="4" ry="14"
        fill="rgba(255,255,255,0.70)" />
      {/* Head */}
      <circle cx="30" cy="62" r="5.5"
        fill="rgba(255,255,255,0.72)" />

      {/* ── Single antenna: curves forward (rightward) from head ── */}
      <path
        d="M32 58 C 42 44, 58 34, 70 28"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
      {/* Antenna tip knob */}
      <circle cx="70" cy="28" r="2.2" fill="rgba(255,255,255,0.45)" />
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function FlyingButterfly({ headlineRef }) {
  const elRef = useRef(null);
  const rafRef = useRef(null);
  const [phase, setPhase] = useState("flying"); // "flying" | "landing" | "resting"
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Wait for page to settle, then find the "R" in "Ruhepol"
    const startTimeout = setTimeout(() => {
      setVisible(true);
      launchFlight();
    }, 600);

    return () => {
      clearTimeout(startTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function findRLetterPosition() {
    if (!headlineRef?.current) return null;

    // Create a range to find character-level position of "R" in "Ruhepol"
    const el = headlineRef.current;
    const text = el.textContent || "";
    // Find "m" in "mein Ruhepol"
    const ruhepolIndex = text.indexOf("mein Ruhepol");
    if (ruhepolIndex === -1) return null;

    // Walk text nodes to find the right one
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    let offset = 0;
    let node = null;
    let nodeOffset = 0;

    while ((node = walker.nextNode())) {
      const len = node.textContent.length;
      if (offset + len > ruhepolIndex) {
        nodeOffset = ruhepolIndex - offset;
        break;
      }
      offset += len;
    }

    if (!node) return null;

    const range = document.createRange();
    range.setStart(node, nodeOffset);
    range.setEnd(node, nodeOffset + 1);
    const rect = range.getBoundingClientRect();

    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  function launchFlight() {
    const el = elRef.current;
    if (!el) return;

    // Source: top-left off-screen
    const x0 = -55;
    const y0 = -55;

    // Destination: "R" in Ruhepol
    const dest = findRLetterPosition();
    const x3 = dest ? dest.x - 26 : window.innerWidth / 2;
    const y3 = dest ? dest.y - 26 : window.innerHeight / 2 - 40;

    // Control points for a natural arc:
    // P1: drift right & slightly down from start
    const x1 = x0 + (x3 - x0) * 0.25 + 80;
    const y1 = y0 + 160;
    // P2: sweep wide then curve into headline from slightly above
    const x2 = x3 - (x3 - x0) * 0.15;
    const y2 = y3 - 120;

    const DURATION = 2800; // ms
    let startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const rawT = Math.min(elapsed / DURATION, 1);
      const t = easeInOut(rawT);

      const cx = cubicBezier(t, x0, x1, x2, x3);
      const cy = cubicBezier(t, y0, y1, y2, y3);

      // Compute tangent for rotation
      const dt = 0.01;
      const t2 = Math.min(t + dt, 1);
      const cx2 = cubicBezier(t2, x0, x1, x2, x3);
      const cy2 = cubicBezier(t2, y0, y1, y2, y3);
      const angle = Math.atan2(cy2 - cy, cx2 - cx) * (180 / Math.PI);

      // Clamp rotation to feel natural
      const rot = Math.max(-35, Math.min(35, angle));

      el.style.left = cx + "px";
      el.style.top = cy + "px";
      el.style.transform = `rotate(${rot}deg)`;

      if (rawT < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // Snap to exact landing position, level out
        el.style.left = x3 + "px";
        el.style.top = y3 + "px";
        el.style.transform = "rotate(-8deg)";
        setPhase("landing");
        setTimeout(() => setPhase("resting"), 700);
      }
    }

    rafRef.current = requestAnimationFrame(step);
  }

  if (!visible) return null;

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: -55,
        left: -55,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform, left, top",
        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.18))",
      }}
    >
      <ButterflySVG phase={phase} />
    </div>
  );
}