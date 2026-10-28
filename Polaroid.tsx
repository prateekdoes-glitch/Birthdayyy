import { useRef, useState } from 'react';
import type { HeroNote } from '../data/birthdayContent';
interface P { src?: string; alt: string; caption?: string; rotate?: number; className?: string; note?: HeroNote }

export function Polaroid({ src, alt, caption, rotate = 0, className = '', note }: P) {
  const [failed, setFailed] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const pointer = useRef('');

  const front = (
    <span className="polaroid">
      <span className="tape" aria-hidden="true" />
      {src && !failed
        ? <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
        : <span className="photo-empty" role="img" aria-label="Empty photo frame">add a photo ✿</span>}
      {caption && <span className="hand cap">{caption}</span>}
    </span>
  );
  if (!note) return <figure className={`flip-card ${className}`} style={{ rotate: `${rotate}deg` }}>{front}</figure>;

  // Mouse users flip by hovering (CSS). Touch, pen and keyboard users toggle with a tap / Enter / Space.
  const onClick = () => { if (pointer.current === 'mouse') return; setFlipped(f => !f); };
  const label = flipped
    ? `Note: ${note.heading} ${note.message} ${note.signature}. Press to flip back to the photo.`
    : `Photo${caption ? `: ${caption}` : ''}. Press to flip and read the note.`;

  return (
    <figure className={`flip-card ${flipped ? 'is-flipped' : ''} ${className}`} style={{ rotate: `${rotate}deg` }}>
      <button type="button" className="flip-inner" aria-label={label}
        onPointerDown={e => { pointer.current = e.pointerType; }}
        onKeyDown={() => { pointer.current = 'key'; }}
        onClick={onClick}>
        {front}
        <span className="note-back" aria-hidden="true">
          <span className="tape" />
          <span className="nb-head">{note.heading}</span>
          <span className="nb-deco">✦</span>
          <span className="nb-msg">{note.message}</span>
          <span className="nb-sign">{note.signature}</span>
        </span>
      </button>
    </figure>
  );
}
