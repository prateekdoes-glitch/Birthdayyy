import { useEffect, useRef, useState } from 'react';
type S = 'checking' | 'unavailable' | 'paused' | 'playing';
export function MusicPlayer({ src }: { src?: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [s, setS] = useState<S>(src ? 'checking' : 'unavailable');
  useEffect(() => {
    const a = ref.current; if (!a || !src) return;
    const on = (st: S) => () => setS(st);
    const h = { canplay: () => setS(p => (p === 'checking' ? 'paused' : p)), play: on('playing'), pause: on('paused'), error: on('unavailable') };
    Object.entries(h).forEach(([k, f]) => a.addEventListener(k, f));
    return () => { Object.entries(h).forEach(([k, f]) => a.removeEventListener(k, f)); a.pause(); };
  }, [src]);
  if (!src || s === 'unavailable') return <p className="music-note hand" role="status">music not added yet ♪</p>;
  const toggle = async () => {
    const a = ref.current!;
    try { if (a.paused) await a.play(); else a.pause(); } catch { setS('paused'); }
  };
  return (
    <div className="music">
      <audio ref={ref} src={src} loop preload="none" onLoadStart={() => {}} />
      <button className="icon-btn" onClick={toggle} aria-pressed={s === 'playing'} aria-label={s === 'playing' ? 'Pause music' : 'Play music'}>{s === 'playing' ? '❚❚' : '♪'}</button>
      <span className="visually-hidden" role="status">{s === 'playing' ? 'Music playing' : 'Music paused'}</span>
    </div>
  );
}
