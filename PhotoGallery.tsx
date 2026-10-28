import { useCallback, useRef, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { MemoryLightbox } from './MemoryLightbox';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { BirthdayPhoto } from '../data/birthdayContent';
const ROT = [-2, 1.5, 3, -1.5, 2, -3];
export function PhotoGallery({ photos }: { photos: BirthdayPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const ref = useScrollReveal<HTMLElement>();
  const close = useCallback(() => { setOpen(null); trigger.current?.focus(); }, []);
  return (
    <section id="photos" ref={ref} className="container reveal" aria-labelledby="ph-h">
      <SectionHeading id="ph-h" kicker="exhibit A">Proof That We Have the Best Memories</SectionHeading>
      {photos.length === 0 ? (
        <p className="empty-state hand">No photos yet. Drop images into <code>public/images</code> and list them in <code>src/data/birthdayContent.ts</code> ✿</p>
      ) : (
        <ul className="collage">
          {photos.map((p, i) => (
            <li key={p.id} className={`collage-item c${i % 5}`} style={{ rotate: `${ROT[i % 6]}deg` }}>
              <button className="photo-btn" aria-label={`Open photo: ${p.alt}`} onClick={e => { trigger.current = e.currentTarget; setOpen(i); }}>
                <span className="tape" aria-hidden="true" />
                <img src={p.src} alt="" loading="lazy" onError={e => (e.currentTarget.style.visibility = 'hidden')} />
                {p.caption && <span className="hand cap">{p.caption}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
      {open !== null && <MemoryLightbox photos={photos} index={open} onClose={close} onNav={setOpen} />}
    </section>
  );
}
