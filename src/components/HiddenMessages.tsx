import { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { HiddenMessage } from '../data/birthdayContent';
const ICONS = ['✉', '❀', '❤', '🎁'];
export function HiddenMessages({ items }: { items: HiddenMessage[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useScrollReveal<HTMLElement>();
  if (!items.length) return null;
  return (
    <section ref={ref} className="container reveal surprise" aria-labelledby="sur-h">
      <SectionHeading id="sur-h" kicker="tap one">Psst... there is more.</SectionHeading>
      <ul className="surprises">
        {items.map((m, i) => {
          const isOpen = openId === m.id;
          return (
            <li key={m.id}>
              <button className="sticker-btn" aria-expanded={isOpen} aria-controls={`msg-${m.id}`} onClick={() => setOpenId(isOpen ? null : m.id)}>
                <span className="sticker-icon" aria-hidden="true">{ICONS[i % 4]}</span>
                <span>{m.label}</span><span className="hand tap">{isOpen ? 'close' : 'tap to open'}</span>
              </button>
              <p id={`msg-${m.id}`} className={`secret hand ${isOpen ? 'open' : ''}`} hidden={!isOpen}>{m.message}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
