import { useEffect, useMemo, useRef } from 'react';
function rng(seed: number) { return () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296; }
export function NightSky() {
  const cv = useRef<HTMLCanvasElement>(null);
  const twinkles = useMemo(() => { const r = rng(7); return Array.from({ length: 34 }, (_, i) => ({ id: i, x: r() * 100, y: r() * 100, s: 2 + r() * 3, d: 2 + r() * 4, b: -r() * 6 })); }, []);
  useEffect(() => {
    const c = cv.current!; const ctx = c.getContext('2d')!; const r = rng(42);
    const stars = Array.from({ length: 340 }, () => ({ x: r(), y: r(), s: 0.4 + r() * 1.1, a: 0.25 + r() * 0.7 }));
    const draw = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2); c.width = innerWidth * dpr; c.height = innerHeight * dpr;
      ctx.scale(dpr, dpr); stars.forEach(s => { ctx.globalAlpha = s.a; ctx.fillStyle = '#DDE5F5'; ctx.beginPath(); ctx.arc(s.x * innerWidth, s.y * innerHeight, s.s, 0, 7); ctx.fill(); });
    };
    draw(); let to = 0; const onR = () => { clearTimeout(to); to = window.setTimeout(draw, 200); };
    addEventListener('resize', onR); return () => { removeEventListener('resize', onR); clearTimeout(to); };
  }, []);
  return (
    <div className="sky" aria-hidden="true">
      <canvas ref={cv} className="sky-stars" />
      {twinkles.map(t => <i key={t.id} className="twinkle" style={{ left: `${t.x}%`, top: `${t.y}%`, width: t.s, height: t.s, animationDuration: `${t.d}s`, animationDelay: `${t.b}s` }} />)}
      <i className="shoot sh1" /><i className="shoot sh2" /><i className="shoot sh3" />
      <div className="moon"><div className="moon-face" /></div>
    </div>
  );
}
