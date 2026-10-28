import { useEffect, useRef, useState } from 'react';
import { Girl } from './Girl';
import { Eagle } from './Eagle';
import { LetterModal } from './LetterModal';
import { useReducedMotion } from '../hooks/useReducedMotion';
type Stage = 'idle' | 'wait' | 'enter' | 'deliver' | 'depart' | 'done';
export function FinalScene() {
  const ref = useRef<HTMLElement>(null); const btn = useRef<HTMLButtonElement>(null);
  const [stage, setStage] = useState<Stage>('idle'); const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = ref.current!; const ts: number[] = [];
    const run = () => {
      if (reduced) { setStage('done'); return; }
      setStage('wait'); let t = 2200;
      for (const [s, d] of [['enter', 3600], ['deliver', 2000], ['depart', 3200], ['done', 0]] as const) { const at = t; ts.push(window.setTimeout(() => setStage(s), at)); t += d; }
    };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); run(); } }, { threshold: 0.55 });
    io.observe(el); return () => { io.disconnect(); ts.forEach(clearTimeout); };
  }, [reduced]);
  const hasLetter = stage === 'deliver' || stage === 'depart' || stage === 'done';
  const closeLetter = () => { setOpen(false); setTimeout(() => btn.current?.focus(), 0); };
  return (
    <section id="final-scene" ref={ref} className="final-scene" aria-label="The final scene">
      <div className="moon-pool" aria-hidden="true" />
      <svg className="hills" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true"><path d="M0 8 C15 2 30 6 45 7 C62 9 78 2 100 6 L100 20 L0 20Z" fill="#03040A" /></svg>
      <Girl />
      {!reduced && stage !== 'idle' && stage !== 'done' && <div className={`eagle st-${stage}`}><Eagle carrying={stage === 'wait' || stage === 'enter'} /></div>}
      {hasLetter && (
        <svg className={`letter-item ${stage === 'deliver' ? 'travel' : 'held'}`} viewBox="0 0 30 20" aria-hidden="true">
          <rect width="30" height="20" rx="2" fill="#F7F0E6" stroke="#C17C91" /><path d="M0 0 L15 11 L30 0" fill="none" stroke="#C17C91" /><circle cx="15" cy="11" r="3.4" fill="#C17C91" />
        </svg>
      )}
      {stage === 'done' && <button ref={btn} className="btn letter-cta" onClick={() => setOpen(true)}>A Letter for You ✉</button>}
      {open && <LetterModal onClose={closeLetter} />}
    </section>
  );
}
