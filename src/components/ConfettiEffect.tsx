import { useEffect, useRef } from 'react';
const COLOURS = ['#E9B8C5', '#C77D91', '#B8C6A5', '#E8CB91', '#D8CDE8'];
export function ConfettiEffect({ burst }: { burst: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!burst || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cv = ref.current!; const ctx = cv.getContext('2d')!;
    cv.width = innerWidth; cv.height = innerHeight;
    const ps = Array.from({ length: 70 }, () => ({ x: cv.width / 2, y: cv.height * 0.55, vx: (Math.random() - 0.5) * 12, vy: -Math.random() * 12 - 3, s: 5 + Math.random() * 5, c: COLOURS[Math.floor(Math.random() * 5)], r: Math.random() * 6 }));
    let f = 0, raf = 0;
    const tick = () => { ctx.clearRect(0, 0, cv.width, cv.height); ps.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.3; p.r += 0.1; ctx.fillStyle = p.c; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); });
      if (++f < 110) raf = requestAnimationFrame(tick); else ctx.clearRect(0, 0, cv.width, cv.height); };
    tick(); return () => cancelAnimationFrame(raf);
  }, [burst]);
  return <canvas ref={ref} className="confetti" aria-hidden="true" />;
}
