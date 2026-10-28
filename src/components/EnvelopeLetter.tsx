import { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { BirthdayContent } from '../data/birthdayContent';
export function EnvelopeLetter({ c, onOpened }: { c: BirthdayContent; onOpened: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useScrollReveal<HTMLElement>();
  const toggle = () => { const next = !open; setOpen(next); if (next) onOpened(); };
  return (
    <section id="letter" ref={ref} className="container reveal" aria-labelledby="let-h">
      <SectionHeading id="let-h" kicker="a little note for you">The Letter</SectionHeading>
      <div className={`envelope-wrap ${open ? 'is-open' : ''}`}>
        <div className="envelope">
          <div className="env-back" />
          <article className="letter" aria-hidden={!open} {...(!open ? { inert: true } : {})}>
            <p className="greeting">{c.letterGreeting}</p>
            {c.letterParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            <p className="hand signoff">{c.letterSignoff}<br />{c.senderName?.trim() || 'Your friend'}</p>
          </article>
          <div className="env-front" /><div className="flap" />
          <span className="seal" aria-hidden="true">♡</span>
        </div>
        <button className="btn" onClick={toggle} aria-expanded={open}>{open ? 'Close the letter' : 'Open the envelope ✉'}</button>
      </div>
    </section>
  );
}
