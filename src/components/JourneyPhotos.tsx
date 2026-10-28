import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { journeyPhotos, type JourneyPhoto } from '../data/memoryJourney';
const ROT = [-2.5, 2, -1.5, 2.5, -1];
const SIDE = ['left', 'right', 'left', 'right', 'center'];
function Card({ p, i }: { p: JourneyPhoto; i: number }) {
  const ref = useScrollReveal<HTMLElement>(); const [bad, setBad] = useState(false);
  return (
    <section ref={ref} className={`jphoto ${SIDE[i]}`} aria-label={`Memory ${i + 1} of 5`}>
      <figure style={{ rotate: `${ROT[i]}deg` }}>
        {p.src && !bad ? <img src={p.src} alt={p.alt} loading={i ? 'lazy' : 'eager'} onError={() => setBad(true)} />
          : <div className="jph-empty" role="img" aria-label={p.alt}>photo {i + 1}<small>add yours in src/data/memoryJourney.ts</small></div>}
        <figcaption>{p.label && <span className="jlabel">{p.label}</span>}{p.caption && <span className="hand">{p.caption}</span>}</figcaption>
      </figure>
    </section>
  );
}
export function JourneyPhotos() { return <div className="jphotos">{journeyPhotos.slice(0, 5).map((p, i) => <Card key={p.id} p={p} i={i} />)}</div>; }
