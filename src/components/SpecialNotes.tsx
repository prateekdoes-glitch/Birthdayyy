import { SectionHeading } from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { BirthdayNote } from '../data/birthdayContent';
const ROT = [-2.5, 1.5, -1, 2.5, -2, 1];
export function SpecialNotes({ notes }: { notes: BirthdayNote[] }) {
  const ref = useScrollReveal<HTMLElement>();
  if (!notes.length) return null;
  return (
    <section id="notes" ref={ref} className="container reveal" aria-labelledby="notes-h">
      <SectionHeading id="notes-h" kicker="a few things">Little Things I Love About You</SectionHeading>
      <ul className="notes">
        {notes.map((n, i) => (
          <li key={n.id} className={`note note-${n.colour} ${i % 3 === 1 ? 'note-tall' : ''}`} style={{ rotate: `${ROT[i % 6]}deg` }}>
            <h3 className="hand">{n.title}</h3><p>{n.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
