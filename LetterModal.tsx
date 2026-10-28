import { useEffect, useRef, useState } from 'react';
import { letterBlocks } from '../data/letter';
type S = 'env' | 'flap' | 'rise' | 'read';
export function LetterModal({ onClose }: { onClose: () => void }) {
  const [s, setS] = useState<S>('env'); const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const ts = [window.setTimeout(() => setS('flap'), 500), window.setTimeout(() => setS('rise'), 1300), window.setTimeout(() => setS('read'), 2100)];
    close.current?.focus(); const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); }; addEventListener('keydown', k);
    return () => { ts.forEach(clearTimeout); removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [onClose]);
  return <div className="lm-backdrop" onClick={onClose}>
    <div className={`lm st-${s}`} role="dialog" aria-modal="true" aria-label="Open letter" onClick={e => e.stopPropagation()}>
      <button ref={close} className="icon-btn lm-close" onClick={onClose} aria-label="Close the letter">✕</button>
      <div className="lm-env" aria-hidden="true"><div className="lm-flap" /><span className="seal">♡</span></div>
      <article className="lm-paper" aria-label="Letter">
        {letterBlocks.map((b, i) => b.kind === 'quote' ? <blockquote key={i} className="lm-quote">{b.text}</blockquote>
          : b.kind === 'verse' ? <p key={i} className="lm-verse">{b.text}</p>
          : b.kind === 'end' ? <p key={i} className="lm-end hand">{b.text}</p>
          : <p key={i}>{b.text}</p>)}
      </article>
    </div>
  </div>;
}
