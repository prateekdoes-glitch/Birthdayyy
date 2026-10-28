import { useEffect } from 'react';
import { NightSky } from './NightSky';
import { JourneyPhotos } from './JourneyPhotos';
import { FinalScene } from './FinalScene';
import { useReducedMotion } from '../hooks/useReducedMotion';
export function MemoriesPage() {
  const reduced = useReducedMotion();
  useEffect(() => {
    document.documentElement.classList.add('night-root'); document.body.classList.add('night-body'); scrollTo(0, 0);
    return () => { document.documentElement.classList.remove('night-root'); document.body.classList.remove('night-body'); };
  }, []);
  useEffect(() => { // gentle auto-scroll; stops for good on any user input
    if (reduced) return;
    let raf = 0, y = 0, last = 0, stopped = false;
    const stop = () => { stopped = true; cancelAnimationFrame(raf); clearTimeout(start); };
    const evs = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
    evs.forEach(e => addEventListener(e, stop, { passive: true, once: true }));
    const step = (t: number) => {
      if (stopped) return;
      if (Math.abs(scrollY - y) > 3) { stop(); return; }
      y += (t - last) * 0.055; last = t;
      const limit = (document.getElementById('final-scene')?.offsetTop ?? 1e9) - innerHeight * 0.3;
      if (y >= limit) { stop(); return; }
      scrollTo(0, y); raf = requestAnimationFrame(step);
    };
    const start = window.setTimeout(() => { y = scrollY; last = performance.now(); raf = requestAnimationFrame(step); }, 4000);
    return () => { stop(); evs.forEach(e => removeEventListener(e, stop)); };
  }, [reduced]);
  return (
    <div className="night">
      <NightSky />
      <a className="night-back" href="#/">← back to the scrapbook</a>
      <main className="night-main">
        <header className="night-intro"><p className="hand">somewhere under the moon…</p><h1>Memories That Don&apos;t Exist Yet</h1><p className="scroll-cue" aria-hidden="true">scroll gently ↓</p></header>
        <JourneyPhotos />
        <FinalScene />
      </main>
    </div>
  );
}
