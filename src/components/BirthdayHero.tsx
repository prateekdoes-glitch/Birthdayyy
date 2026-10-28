import { Polaroid } from './Polaroid';
import type { BirthdayContent } from '../data/birthdayContent';
export function BirthdayHero({ c }: { c: BirthdayContent }) {
  const [a, b] = c.photos; const [n1, n2] = c.heroNotes;
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-text">
        {c.birthdayDate && <p className="date-label">{c.birthdayDate}</p>}
        <h1 id="hero-title">{c.heroTitle ?? <>Happy Birthday, <em>{c.friendName}</em>!</>}</h1>
        <p className="hand sub">{c.heroMessage}</p>
        <p className="hand made">made with love ♡</p>
      </div>
      <div className="hero-collage">
        <Polaroid src={a?.src} alt={a?.alt ?? ''} caption={a?.caption ?? 'let the show begin'} rotate={-3} note={n1} className="p1" />
        <Polaroid src={b?.src} alt={b?.alt ?? ''} caption={b?.caption ?? 'let the show begin'} rotate={3} note={n2} className="p2" />
        <span className="star s1" aria-hidden="true">✦</span><span className="star s2" aria-hidden="true">✧</span>
      </div>
    </section>
  );
}
