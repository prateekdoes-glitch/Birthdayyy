import { useRef, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { BirthdayMemory } from '../data/birthdayContent';

function Entry({ m, i }: { m: BirthdayMemory; i: number }) {
  const ref = useScrollReveal<HTMLLIElement>();
  const [open, setOpen] = useState(false);
  const pointer = useRef('');
  const noteId = `memnote-${m.id}`;
  // Mouse users reveal the note by hovering (CSS). Touch, pen and keyboard users toggle it.
  const onClick = () => { if (pointer.current !== 'mouse') setOpen(o => !o); };
  return (
    <li ref={ref} className={`memory reveal ${i % 2 ? 'right' : 'left'}`}>
      <span className="marker" aria-hidden="true">✦</span>
      <div className={`memory-card ${m.note ? 'has-note' : ''} ${open ? 'is-open' : ''}`}>
        {m.date && <p className="hand date">{m.date}</p>}
        <h3>
          {m.note ? (
            <button type="button" className="card-toggle" aria-expanded={open} aria-controls={noteId}
              onPointerDown={e => { pointer.current = e.pointerType; }}
              onKeyDown={() => { pointer.current = 'key'; }}
              onClick={onClick}>{m.title}<span className="visually-hidden">, press to {open ? 'hide' : 'read'} the hidden note</span></button>
          ) : m.title}
        </h3>
        <p>{m.description}</p>
        {m.image && <img src={m.image} alt="" loading="lazy" onError={e => (e.currentTarget.hidden = true)} />}
        {m.note && (
          <div id={noteId} className="memory-note" role="note">
            <span className="note-deco" aria-hidden="true">✦</span>
            <p className="hand note-label">tucked inside</p>
            <p className="note-text">{m.note}</p>
          </div>
        )}
      </div>
    </li>
  );
}
export function MemoryTimeline({ memories }: { memories: BirthdayMemory[] }) {
  if (!memories.length) return null;
  return (
    <section id="memories" className="container" aria-labelledby="mem-h">
      <SectionHeading id="mem-h" kicker="chapter two">Our Little Memory Lane</SectionHeading>
      <ol className="timeline">{memories.map((m, i) => <Entry key={m.id} m={m} i={i} />)}</ol>
    </section>
  );
}
