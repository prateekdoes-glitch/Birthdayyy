import { useEffect, useRef, useState } from 'react';
import { invite } from '../data/memoryJourney';
import { useReducedMotion } from '../hooks/useReducedMotion';
export function MemoriesInvite() {
  const [diving, setDiving] = useState(false);
  const reduced = useReducedMotion();
  const t = useRef<number>(0);
  useEffect(() => () => clearTimeout(t.current), []);
  const dive = () => { setDiving(true); t.current = window.setTimeout(() => { location.hash = '#/memories'; setDiving(false); }, reduced ? 50 : 1600); };
  return (
    <section id="memories-invite" className="invite container" aria-labelledby="invite-h">
      <span className="spark sp1" aria-hidden="true">✦</span><span className="spark sp2" aria-hidden="true">✿</span><span className="spark sp3" aria-hidden="true">✧</span>
      <p className="hand">{invite.label}</p>
      <h2 id="invite-h">{invite.heading}</h2>
      <p className="hand invite-text">{invite.text}</p>
      <button className="btn dive-btn" onClick={dive} disabled={diving}>{invite.cta}</button>
      {diving && <div className="dive-veil" aria-hidden="true" />}
    </section>
  );
}
