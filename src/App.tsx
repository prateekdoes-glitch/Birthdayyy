import { useEffect, useRef, useState } from 'react';
import { NightSky } from './components/NightSky';
import { FinalScene } from './components/FinalScene';
const SONG = `${import.meta.env.BASE_URL}music/song.mp3`;
const VOLUME = 0.7;
export default function App() {
  const [started, setStarted] = useState(false);
  const [fading, setFading] = useState(false);
  const [muted, setMuted] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const fade = useRef<number>(0);
  useEffect(() => { document.title = 'Dive In'; }, []);
  useEffect(() => () => { clearInterval(fade.current); audio.current?.pause(); }, []);
  const playSong = () => { // runs inside the click, so browsers allow the audio
    const a = new Audio(SONG); a.loop = true; a.volume = 0; audio.current = a;
    a.play().catch(() => { /* blocked or file missing: stay silent */ });
    fade.current = window.setInterval(() => { // gentle 3s fade-in
      a.volume = Math.min(VOLUME, a.volume + VOLUME / 30);
      if (a.volume >= VOLUME) clearInterval(fade.current);
    }, 100);
  };
  const toggleMute = () => { const a = audio.current; if (!a) return; a.muted = !a.muted; setMuted(a.muted); };
  const dive = () => { if (fading || started) return; playSong(); setFading(true); window.setTimeout(() => setStarted(true), 1100); };
  return <>
    {!started && <section className={`dive-intro ${fading ? 'is-leaving' : ''}`} aria-label="Dive in">
      <button className="dive-button" onClick={dive} autoFocus>Dive In<span aria-hidden="true"> ✧</span></button>
    </section>}
    {started && <div className="dive-experience"><NightSky /><FinalScene /></div>}
    {fading && <button className="music-toggle" onClick={toggleMute} aria-label={muted ? 'Unmute music' : 'Mute music'}>{muted ? '🔇' : '🔊'}</button>}
  </>;
}
