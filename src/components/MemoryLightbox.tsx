import { useEffect, useRef } from 'react';
import type { BirthdayPhoto } from '../data/birthdayContent';
interface P { photos: BirthdayPhoto[]; index: number; onClose: () => void; onNav: (i: number) => void }
export function MemoryLightbox({ photos, index, onClose, onNav }: P) {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const p = photos[index]; const n = photos.length;
  useEffect(() => {
    closeBtn.current?.focus();
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onNav((index + 1) % n);
      else if (e.key === 'ArrowLeft') onNav((index - 1 + n) % n);
      else if (e.key === 'Tab') { // simple focus trap
        const f = document.querySelectorAll<HTMLElement>('.lightbox button'); if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    addEventListener('keydown', k); return () => removeEventListener('keydown', k);
  }, [index, n, onClose, onNav]);
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label={p.caption ?? p.alt} onClick={e => e.stopPropagation()}>
        <button ref={closeBtn} className="icon-btn lb-close" onClick={onClose} aria-label="Close photo">✕</button>
        <img src={p.src} alt={p.alt} />
        {p.caption && <p className="hand">{p.caption}</p>}
        {n > 1 && <div className="lb-nav">
          <button className="icon-btn" onClick={() => onNav((index - 1 + n) % n)} aria-label="Previous photo">‹</button>
          <span aria-live="polite">{index + 1} / {n}</span>
          <button className="icon-btn" onClick={() => onNav((index + 1) % n)} aria-label="Next photo">›</button>
        </div>}
      </div>
    </div>
  );
}
