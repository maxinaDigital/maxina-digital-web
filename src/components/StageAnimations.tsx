'use client';

// NOTE: All 6 animations mount simultaneously (for the crossfade scroll effect),
// so every class/keyframe name is prefixed per-stage (s1-, s2', etc.) to avoid
// global CSS collisions between the inline <style> blocks.
//
// Every "reveal" keyframe below is a 4-stop loop (appear -> hold -> fade out
// -> hidden) driven with `infinite`, rather than a 2-stop from/to driven with
// `forwards` — so each stage's animation keeps replaying instead of running
// once and freezing on its final frame.

// Rounds trig-derived coordinates so server/client renders stringify identically
// (raw Math.cos/sin float output can differ in the last digit between engines,
// which otherwise triggers a hydration mismatch).
const r2 = (n: number) => Math.round(n * 100) / 100;

const Stage1Animation = () => (
  <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes s1-line {
          0% { stroke-dashoffset: 90; opacity: 0; }
          16% { stroke-dashoffset: 0; opacity: 1; }
          82% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 90; opacity: 0; }
        }
        @keyframes s1-hexPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px #00BCD4); }
          50% { transform: scale(1.06); filter: drop-shadow(0 0 24px #00BCD4); }
        }
        @keyframes s1-coreGlow {
          0%, 30% { opacity: 0.4; }
          50%, 90% { opacity: 1; }
          100% { opacity: 0.4; }
        }
        @keyframes s1-float1 { 0%,100% { transform: translateY(0); opacity: .5;} 50% { transform: translateY(-14px); opacity: 1;} }
        @keyframes s1-float2 { 0%,100% { transform: translateY(0); opacity: .4;} 50% { transform: translateY(12px); opacity: .9;} }
        @keyframes s1-float3 { 0%,100% { transform: translateY(0); opacity: .5;} 50% { transform: translateY(-10px); opacity: 1;} }
        @keyframes s1-float4 { 0%,100% { transform: translateY(0); opacity: .4;} 50% { transform: translateY(10px); opacity: .9;} }
        .s1-l0 { animation: s1-line 4.5s ease-in-out 0.1s infinite; }
        .s1-l1 { animation: s1-line 4.5s ease-in-out 0.35s infinite; }
        .s1-l2 { animation: s1-line 4.5s ease-in-out 0.6s infinite; }
        .s1-l3 { animation: s1-line 4.5s ease-in-out 0.85s infinite; }
        .s1-l4 { animation: s1-line 4.5s ease-in-out 1.1s infinite; }
        .s1-hex { animation: s1-hexPulse 3s ease-in-out infinite; transform-origin: 160px 160px; }
        .s1-core { animation: s1-coreGlow 3s ease-in-out infinite; }
        .s1-p1 { animation: s1-float1 4s ease-in-out infinite; }
        .s1-p2 { animation: s1-float2 5s ease-in-out infinite; }
        .s1-p3 { animation: s1-float3 4.5s ease-in-out infinite; }
        .s1-p4 { animation: s1-float4 5.5s ease-in-out infinite; }
      `}</style>
      <filter id="s1glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    {[0, 72, 144, 216, 288].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = r2(160 + Math.cos(rad) * 110);
      const y1 = r2(160 + Math.sin(rad) * 110);
      const x2 = r2(160 + Math.cos(rad) * 48);
      const y2 = r2(160 + Math.sin(rad) * 48);
      return (
        <g key={deg}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0066CC" strokeWidth="3" strokeLinecap="round" className={`s1-l${i}`}/>
          <circle cx={x1} cy={y1} r="5" fill="#00BCD4" opacity="0.9"/>
        </g>
      );
    })}

    <g className="s1-hex">
      <polygon points="160,120 194,140 194,180 160,200 126,180 126,140" fill="rgba(0,102,204,0.15)" stroke="#0066CC" strokeWidth="2.5"/>
      <line x1="160" y1="145" x2="160" y2="175" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" className="s1-core"/>
      <line x1="145" y1="160" x2="175" y2="160" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" className="s1-core"/>
      <circle cx="160" cy="160" r="10" fill="#0066CC" filter="url(#s1glow)"/>
    </g>

    <circle cx="60" cy="70" r="4" fill="#00BCD4" className="s1-p1"/>
    <circle cx="260" cy="90" r="3" fill="#0066CC" className="s1-p2"/>
    <circle cx="70" cy="250" r="3.5" fill="#00BCD4" className="s1-p3"/>
    <circle cx="255" cy="245" r="4" fill="#0066CC" className="s1-p4"/>
  </svg>
);

const Stage2Animation = () => (
  <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes s2-node {
          0% { r: 0; opacity: 0; }
          12% { opacity: 1; }
          85% { opacity: 1; }
          100% { r: 0; opacity: 0; }
        }
        @keyframes s2-line {
          0% { stroke-dashoffset: 140; opacity: 1; }
          15% { stroke-dashoffset: 0; opacity: 1; }
          85% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 140; opacity: 0; }
        }
        @keyframes s2-glow { 0%,100% { filter: drop-shadow(0 0 0px #00BCD4);} 50% { filter: drop-shadow(0 0 18px #00BCD4);} }
        @keyframes s2-drift { 0%,100% { transform: translate(0,0);} 50% { transform: translate(6px,-8px);} }
        .s2-net { animation: s2-glow 3.4s ease-in-out infinite; }
        .s2-drift { animation: s2-drift 6s ease-in-out infinite; }
        ${[0,1,2,3,4,5].map(i => `.s2-node${i} { animation: s2-node 4s ease-in-out ${0.15 * i + 0.1}s infinite; }`).join('\n')}
        ${[0,1,2,3,4,5].map(i => `.s2-edge${i} { animation: s2-line 4s ease-in-out ${0.15 * i + 0.3}s infinite; stroke-dasharray: 140; }`).join('\n')}
      `}</style>
      <filter id="s2glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    <g className="s2-net s2-drift">
      {(() => {
        const hub = { x: 160, y: 160 };
        const nodes = [0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return { x: r2(hub.x + Math.cos(rad) * 95), y: r2(hub.y + Math.sin(rad) * 95) };
        });
        return (
          <>
            {nodes.map((n, i) => (
              <line key={`e${i}`} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y} stroke="#0066CC" strokeWidth="2" className={`s2-edge${i}`}/>
            ))}
            {nodes.map((n, i) => (
              <line key={`o${i}`} x1={n.x} y1={n.y} x2={nodes[(i + 1) % nodes.length].x} y2={nodes[(i + 1) % nodes.length].y} stroke="#0066CC" strokeWidth="1" opacity="0.35" className={`s2-edge${i}`}/>
            ))}
            {nodes.map((n, i) => (
              <circle key={`n${i}`} cx={n.x} cy={n.y} r="7" fill={i % 2 === 0 ? '#00BCD4' : '#0066CC'} className={`s2-node${i}`} filter="url(#s2glow)"/>
            ))}
            <circle cx={hub.x} cy={hub.y} r="11" fill="#00BCD4" filter="url(#s2glow)"/>
          </>
        );
      })()}
    </g>
  </svg>
);

const Stage3Animation = () => (
  <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes s3-scale {
          0% { transform: scale(0) translateY(24px); opacity: 0; }
          10% { transform: scale(1) translateY(0); opacity: 1; }
          80% { transform: scale(1) translateY(0); opacity: 1; }
          100% { transform: scale(0) translateY(24px); opacity: 0; }
        }
        @keyframes s3-color {
          0% { fill: #3d4a58; }
          20% { fill: rgba(0,102,204,0.18); }
          80% { fill: rgba(0,102,204,0.18); }
          100% { fill: #3d4a58; }
        }
        @keyframes s3-stroke {
          0% { stroke: #3d4a58; }
          20% { stroke: #00BCD4; }
          80% { stroke: #00BCD4; }
          100% { stroke: #3d4a58; }
        }
        @keyframes s3-border {
          0% { stroke-dashoffset: 140; opacity: 0; }
          12% { stroke-dashoffset: 0; opacity: 1; }
          80% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 140; opacity: 0; }
        }
        @keyframes s3-lineGrow {
          0% { opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes s3-glow { 0%,100% { filter: drop-shadow(0 0 0px #00BCD4);} 50% { filter: drop-shadow(0 0 16px #00BCD4);} }
        @keyframes s3-swatch { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-6px);} }
        .s3-card1 { animation: s3-scale 5s ease-in-out .1s infinite, s3-color 5s ease-in-out .5s infinite; transform-origin: center; }
        .s3-card2 { animation: s3-scale 5s ease-in-out .35s infinite, s3-color 5s ease-in-out .75s infinite; transform-origin: center; }
        .s3-card3 { animation: s3-scale 5s ease-in-out .6s infinite, s3-color 5s ease-in-out 1s infinite; transform-origin: center; }
        .s3-card4 { animation: s3-scale 5s ease-in-out .85s infinite, s3-color 5s ease-in-out 1.25s infinite; transform-origin: center; }
        .s3-b1 { animation: s3-border 5s ease-in-out .1s infinite, s3-stroke 5s ease-in-out .5s infinite; stroke-dasharray: 140; }
        .s3-b2 { animation: s3-border 5s ease-in-out .35s infinite, s3-stroke 5s ease-in-out .75s infinite; stroke-dasharray: 140; }
        .s3-b3 { animation: s3-border 5s ease-in-out .6s infinite, s3-stroke 5s ease-in-out 1s infinite; stroke-dasharray: 140; }
        .s3-b4 { animation: s3-border 5s ease-in-out .85s infinite, s3-stroke 5s ease-in-out 1.25s infinite; stroke-dasharray: 140; }
        .s3-line { animation: s3-lineGrow 5s ease-in-out infinite; }
        .s3-wrap { animation: s3-glow 3s ease-in-out 1.6s infinite; }
        .s3-sw1 { animation: s3-swatch 3.5s ease-in-out infinite; }
        .s3-sw2 { animation: s3-swatch 4s ease-in-out .3s infinite; }
        .s3-sw3 { animation: s3-swatch 3.2s ease-in-out .6s infinite; }
      `}</style>
      <filter id="s3glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    <g className="s3-wrap">
      <rect x="35" y="35" width="105" height="90" rx="8" className="s3-card1" fill="#3d4a58"/>
      <rect x="35" y="35" width="105" height="90" rx="8" className="s3-b1" fill="none" strokeWidth="2"/>
      <rect x="55" y="55" width="55" height="6" rx="3" fill="#00BCD4" className="s3-line" style={{ animationDelay: '0.9s' }}/>
      <rect x="55" y="70" width="70" height="4" rx="2" fill="#8A92A6" opacity="0.6" className="s3-line" style={{ animationDelay: '1s' }}/>
      <rect x="55" y="82" width="40" height="4" rx="2" fill="#8A92A6" opacity="0.6" className="s3-line" style={{ animationDelay: '1.1s' }}/>

      <rect x="180" y="35" width="105" height="90" rx="8" className="s3-card2" fill="#3d4a58"/>
      <rect x="180" y="35" width="105" height="90" rx="8" className="s3-b2" fill="none" strokeWidth="2"/>
      <circle cx="200" cy="58" r="10" fill="#0066CC" className="s3-line" style={{ animationDelay: '1.1s' }}/>
      <rect x="220" y="53" width="50" height="5" rx="2.5" fill="#8A92A6" opacity="0.6" className="s3-line" style={{ animationDelay: '1.2s' }}/>
      <rect x="200" y="80" width="70" height="4" rx="2" fill="#8A92A6" opacity="0.5" className="s3-line" style={{ animationDelay: '1.3s' }}/>

      <rect x="35" y="150" width="250" height="70" rx="8" className="s3-card3" fill="#3d4a58"/>
      <rect x="35" y="150" width="250" height="70" rx="8" className="s3-b3" fill="none" strokeWidth="2"/>
      <rect x="55" y="170" width="90" height="6" rx="3" fill="#00BCD4" className="s3-line" style={{ animationDelay: '1.4s' }}/>
      <rect x="55" y="185" width="140" height="4" rx="2" fill="#8A92A6" opacity="0.6" className="s3-line" style={{ animationDelay: '1.5s' }}/>
      <rect x="230" y="170" width="35" height="35" rx="6" fill="#0066CC" opacity="0.5" className="s3-line" style={{ animationDelay: '1.6s' }}/>

      <rect x="35" y="240" width="70" height="45" rx="8" className="s3-card4" fill="#3d4a58"/>
      <rect x="35" y="240" width="70" height="45" rx="8" className="s3-b4" fill="none" strokeWidth="2"/>

      <circle cx="140" cy="255" r="8" fill="#0066CC" className="s3-sw1" filter="url(#s3glow)"/>
      <circle cx="165" cy="262" r="8" fill="#00BCD4" className="s3-sw2" filter="url(#s3glow)"/>
      <circle cx="190" cy="255" r="8" fill="#FFFFFF" opacity="0.85" className="s3-sw3"/>
    </g>
  </svg>
);

const Stage4Animation = () => (
  <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes s4-type {
          0% { stroke-dashoffset: 340; opacity: 1; }
          25% { stroke-dashoffset: 0; opacity: 1; }
          80% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 340; opacity: 0; }
        }
        @keyframes s4-bar {
          0% { width: 0; opacity: 1; }
          18% { width: 170px; opacity: 1; }
          80% { width: 170px; opacity: 1; }
          100% { width: 0; opacity: 1; }
        }
        @keyframes s4-blink { 0%,49% { opacity: 1;} 50%,100% { opacity: 0;} }
        @keyframes s4-glow { 0%,100% { filter: drop-shadow(0 0 0px #0066CC);} 50% { filter: drop-shadow(0 0 14px #0066CC);} }
        @keyframes s4-pop { 0%,100% { opacity: 0.4; transform: scale(1);} 50% { opacity: 1; transform: scale(1.25);} }
        @keyframes s4-packet {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .s4-term { animation: s4-glow 3.2s ease-in-out infinite; }
        .s4-l1 { animation: s4-type 6s ease-in-out 0.1s infinite; stroke-dasharray: 340; }
        .s4-l2 { animation: s4-type 6s ease-in-out 0.9s infinite; stroke-dasharray: 340; }
        .s4-l3 { animation: s4-type 6s ease-in-out 1.7s infinite; stroke-dasharray: 340; }
        .s4-cursor { animation: s4-blink .8s ease-in-out 2.6s infinite; }
        .s4-bar { animation: s4-bar 6s ease-in-out 2.7s infinite; }
        .s4-api1 { animation: s4-pop 2.4s ease-in-out infinite; }
        .s4-api2 { animation: s4-pop 2.4s ease-in-out .5s infinite; }
        .s4-api3 { animation: s4-pop 2.4s ease-in-out 1s infinite; }
        .s4-pk1 { offset-path: path('M 60 90 Q 100 60 160 100'); animation: s4-packet 2s linear 3s infinite; }
        .s4-pk2 { offset-path: path('M 260 90 Q 220 60 160 100'); animation: s4-packet 2.3s linear 3.3s infinite; }
        .s4-pk3 { offset-path: path('M 160 260 Q 160 220 160 200'); animation: s4-packet 1.8s linear 3.6s infinite; }
      `}</style>
      <filter id="s4glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    <circle cx="60" cy="90" r="10" fill="#00BCD4" className="s4-api1" filter="url(#s4glow)"/>
    <circle cx="260" cy="90" r="10" fill="#0066CC" className="s4-api2" filter="url(#s4glow)"/>
    <circle cx="160" cy="270" r="10" fill="#00BCD4" className="s4-api3" filter="url(#s4glow)"/>
    <circle r="3.5" fill="#FFFFFF" className="s4-pk1"/>
    <circle r="3.5" fill="#FFFFFF" className="s4-pk2"/>
    <circle r="3.5" fill="#FFFFFF" className="s4-pk3"/>

    <g className="s4-term">
      <rect x="60" y="70" width="200" height="150" rx="10" fill="rgba(0,102,204,0.06)" stroke="#0066CC" strokeWidth="2"/>
      <circle cx="78" cy="88" r="3.5" fill="#00BCD4" opacity="0.7"/>
      <circle cx="90" cy="88" r="3.5" fill="#0066CC" opacity="0.7"/>
      <circle cx="102" cy="88" r="3.5" fill="#8A92A6" opacity="0.5"/>

      <path d="M 78 112 h 130" stroke="#0066CC" strokeWidth="4" strokeLinecap="round" fill="none" className="s4-l1"/>
      <path d="M 78 132 h 100" stroke="#00BCD4" strokeWidth="4" strokeLinecap="round" fill="none" className="s4-l2"/>
      <path d="M 78 152 h 150" stroke="#0066CC" strokeWidth="4" strokeLinecap="round" fill="none" className="s4-l3"/>
      <rect x="80" y="163" width="3" height="14" fill="#00BCD4" className="s4-cursor"/>

      <rect x="78" y="188" width="170" height="8" rx="4" fill="none" stroke="#0066CC" strokeWidth="1.5" opacity="0.5"/>
      <rect x="78" y="188" width="0" height="8" rx="4" fill="#00BCD4" className="s4-bar"/>
    </g>
  </svg>
);

const Stage5Animation = () => (
  <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes s5-item {
          0% { opacity: 0; transform: translateX(-16px); }
          8% { opacity: 1; transform: translateX(0); }
          85% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-16px); }
        }
        @keyframes s5-check {
          0% { stroke-dashoffset: 24; opacity: 0; }
          8% { stroke-dashoffset: 0; opacity: 1; }
          85% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 24; opacity: 0; }
        }
        @keyframes s5-ring {
          0% { stroke-dashoffset: 251; }
          28% { stroke-dashoffset: 50; }
          85% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 251; }
        }
        @keyframes s5-pulse { 0%,100% { filter: drop-shadow(0 0 0px #00BCD4);} 50% { filter: drop-shadow(0 0 16px #00BCD4);} }
        @keyframes s5-confetti {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          40% { opacity: 1; transform: translateY(-18px) scale(1); }
          100% { transform: translateY(-34px) scale(0.6); opacity: 0; }
        }
        .s5-wrap { animation: s5-pulse 3s ease-in-out 2.6s infinite; }
        ${[0,1,2,3,4].map(i => `.s5-item${i} { animation: s5-item 5s ease-in-out ${0.1 * i + 0.1}s infinite; }`).join('\n')}
        ${[0,1,2,3,4].map(i => `.s5-chk${i} { animation: s5-check 5s ease-in-out ${0.1 * i + 0.35}s infinite; stroke-dasharray: 24; }`).join('\n')}
        .s5-ring-fill { animation: s5-ring 5s ease-in-out 1s infinite; stroke-dasharray: 251; stroke-dashoffset: 251; }
        .s5-c1 { animation: s5-confetti 1.8s ease-out 2.9s infinite; }
        .s5-c2 { animation: s5-confetti 1.8s ease-out 3.2s infinite; }
        .s5-c3 { animation: s5-confetti 1.8s ease-out 3.5s infinite; }
      `}</style>
      <filter id="s5glow"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    <g className="s5-wrap">
      {['Funcionalidad', 'Seguridad', 'Velocidad', 'Facilidad de uso', 'Experiencia final'].map((label, i) => (
        <g key={label} className={`s5-item${i}`}>
          <line x1="30" y1={55 + i * 34} x2="175" y2={55 + i * 34} stroke="#0066CC" strokeWidth="1" opacity="0.25"/>
          <path d={`M 35 ${52 + i * 34} L 40 ${57 + i * 34} L 50 ${45 + i * 34}`} className={`s5-chk${i}`} stroke="#00BCD4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#s5glow)"/>
          <text x="60" y={60 + i * 34} fontFamily="sans-serif" fontSize="13" fill="#c7cdd8">{label}</text>
        </g>
      ))}

      <circle cx="245" cy="130" r="40" fill="none" stroke="#0066CC" strokeWidth="8" opacity="0.25"/>
      <circle cx="245" cy="130" r="40" fill="none" stroke="#00BCD4" strokeWidth="8" strokeLinecap="round" className="s5-ring-fill" transform="rotate(-90 245 130)" filter="url(#s5glow)"/>
      <text x="245" y="136" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#00BCD4" textAnchor="middle">80%</text>

      <circle cx="210" cy="230" r="4" fill="#00BCD4" className="s5-c1"/>
      <circle cx="245" cy="235" r="3.5" fill="#0066CC" className="s5-c2"/>
      <circle cx="280" cy="228" r="4" fill="#00BCD4" className="s5-c3"/>
    </g>
  </svg>
);

const Stage6Animation = () => (
  <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <style>{`
        @keyframes s6-baseline {
          0% { stroke-dashoffset: 260; opacity: 0; }
          9% { stroke-dashoffset: 0; opacity: 1; }
          85% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 260; opacity: 0; }
        }
        @keyframes s6-graph {
          0% { stroke-dashoffset: 300; opacity: 0; }
          25% { stroke-dashoffset: 0; opacity: 1; }
          85% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 300; opacity: 0; }
        }
        @keyframes s6-barGrow {
          0% { transform: scaleY(0); }
          9% { transform: scaleY(1); }
          85% { transform: scaleY(1); }
          100% { transform: scaleY(0); }
        }
        @keyframes s6-rocket {
          0% { transform: translate(0,0); opacity: 0; }
          20% { transform: translate(26px,-110px); opacity: 1; }
          85% { transform: translate(26px,-110px); opacity: 1; }
          100% { transform: translate(0,0); opacity: 0; }
        }
        @keyframes s6-fire { 0% { r: 7; opacity: .9;} 100% { r: 1; opacity: 0;} }
        @keyframes s6-star {
          0% { r: 0; opacity: 0; }
          8% { opacity: 1; }
          85% { opacity: 1; }
          100% { r: 0; opacity: 0; }
        }
        @keyframes s6-glow { 0%,100% { filter: drop-shadow(0 0 0px #00BCD4);} 50% { filter: drop-shadow(0 0 22px #00BCD4);} }
        @keyframes s6-burst { from { stroke-dashoffset: 20; opacity: 0.9; } to { stroke-dashoffset: 20; opacity: 0; } }
        .s6-wrap { animation: s6-glow 2.6s ease-in-out 2.8s infinite; }
        .s6-base { animation: s6-baseline 6.5s ease-in-out .2s infinite; stroke-dasharray: 260; }
        .s6-line { animation: s6-graph 6.5s ease-in-out .8s infinite; stroke-dasharray: 300; }
        .s6-bar1 { animation: s6-barGrow 6.5s ease-in-out .3s infinite; transform-origin: 90px 230px; }
        .s6-bar2 { animation: s6-barGrow 6.5s ease-in-out .5s infinite; transform-origin: 130px 230px; }
        .s6-bar3 { animation: s6-barGrow 6.5s ease-in-out .7s infinite; transform-origin: 170px 230px; }
        .s6-bar4 { animation: s6-barGrow 6.5s ease-in-out .9s infinite; transform-origin: 210px 230px; }
        .s6-rocket { animation: s6-rocket 6.5s cubic-bezier(.34,1.56,.64,1) 1.7s infinite; }
        .s6-fire1 { animation: s6-fire .55s ease-out 1.7s infinite; }
        .s6-fire2 { animation: s6-fire .55s ease-out 1.85s infinite; }
        .s6-fire3 { animation: s6-fire .55s ease-out 2s infinite; }
        ${[0,1,2,3,4,5].map(i => `.s6-star${i} { animation: s6-star 6.5s ease-in-out ${2.5 + i * 0.15}s infinite; }`).join('\n')}
        .s6-burst { animation: s6-burst 1.4s ease-out 2.6s infinite; }
      `}</style>
      <filter id="s6glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    <g className="s6-wrap">
      <rect x="80" y="190" width="20" height="40" fill="#0066CC" opacity="0.35" className="s6-bar1"/>
      <rect x="120" y="160" width="20" height="70" fill="#0066CC" opacity="0.35" className="s6-bar2"/>
      <rect x="160" y="130" width="20" height="100" fill="#0066CC" opacity="0.35" className="s6-bar3"/>
      <rect x="200" y="100" width="20" height="130" fill="#0066CC" opacity="0.35" className="s6-bar4"/>

      <line x1="55" y1="230" x2="265" y2="230" className="s6-base" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
      <path d="M 55 220 L 105 175 L 155 120 L 205 85 L 255 55" className="s6-line" stroke="#00BCD4" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#s6glow)"/>

      <g className="s6-rocket" transform="translate(150,150)">
        <circle cx="0" cy="0" r="10" fill="#0066CC" filter="url(#s6glow)"/>
        <polygon points="0,-15 -7,-2 7,-2" fill="#00BCD4"/>
        <polygon points="-8,4 -14,14 -3,7" fill="#0066CC" opacity="0.8"/>
        <polygon points="8,4 14,14 3,7" fill="#0066CC" opacity="0.8"/>
        <circle cx="-4" cy="10" r="6" fill="#00BCD4" className="s6-fire1" opacity="0.85"/>
        <circle cx="4" cy="10" r="6" fill="#0066CC" className="s6-fire2" opacity="0.85"/>
        <circle cx="0" cy="14" r="6" fill="#00BCD4" className="s6-fire3" opacity="0.85"/>
      </g>

      {[[70,60],[250,45],[45,110],[275,140],[95,45],[230,175]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill={i % 2 === 0 ? '#00BCD4' : '#0066CC'} className={`s6-star${i}`} filter="url(#s6glow)"/>
      ))}

      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = r2(150 + Math.cos(rad) * 16);
        const y1 = r2(150 + Math.sin(rad) * 16 - 40);
        const x2 = r2(150 + Math.cos(rad) * 32);
        const y2 = r2(150 + Math.sin(rad) * 32 - 40);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00BCD4" strokeWidth="2" strokeDasharray="20" className="s6-burst" strokeLinecap="round"/>;
      })}
    </g>
  </svg>
);

export const ProcessStageAnimation = ({ stage }: { stage: number }) => {
  const animations = {
    1: Stage1Animation,
    2: Stage2Animation,
    3: Stage3Animation,
    4: Stage4Animation,
    5: Stage5Animation,
    6: Stage6Animation,
  };

  const AnimationComponent = animations[stage as keyof typeof animations];
  return AnimationComponent ? <AnimationComponent /> : null;
};
