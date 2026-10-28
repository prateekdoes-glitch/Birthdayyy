import { useEffect, useRef } from 'react';
interface P { title: string; message: string; onOpen: () => void }
export function IntroOverlay({ title, message, onOpen }: P) {
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => { btn.current?.focus({ preventScroll: true }); }, []);
  return (
    <div className="intro" role="dialog" aria-modal="true" aria-labelledby="intro-title">
      <div className="cover">
        <span className="tape tape-top" aria-hidden="true" />
        <p className="label-tag">a little book of us</p>
        <p className="hand intro-note">{message}</p>
        <h1 id="intro-title">{title}</h1>
        <span className="doodle" aria-hidden="true">✿</span>
        <button ref={btn} className="btn" onClick={onOpen}>Open your scrapbook ✿</button>
        <button className="skip" onClick={onOpen}>Skip intro</button>
      </div>
    </div>
  );
}
