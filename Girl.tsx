import { useReducedMotion } from '../hooks/useReducedMotion';
export function Girl() {
  const reduced = useReducedMotion();
  const sway = (v: string, d: string) => reduced ? null : <animateTransform attributeName="transform" type="rotate" values={v} dur={d} repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".4 0 .6 1;.4 0 .6 1" />;
  const body = '#0b1230', rim = 'rgba(176,196,255,.6)';
  return (
    <svg className="girl" viewBox="0 0 100 200" role="img" aria-label="A girl in a long dress standing under the moon, one hand held out">
      <g fill={body} stroke={rim} strokeWidth=".8" strokeLinejoin="round">
        <g>{sway('-1.2 50 192;1.2 50 192;-1.2 50 192', '5s')}<path d="M44 42 L56 42 L58 66 C68 100 88 150 97 193 L3 193 C12 150 32 100 42 66 Z" /></g>
        <g>{sway('-2.5 50 20;3 50 20;-2.5 50 20', '4s')}<path d="M39 22 C36 2 64 0 63 24 C72 36 79 56 76 80 C68 66 61 56 59 42 C47 38 39 36 39 22Z" /></g>
        <circle cx="50" cy="27" r="10.5" /><rect x="46" y="36" width="8" height="9" stroke="none" />
      </g>
      <path d="M57 47 C68 70 76 92 81 109" fill="none" stroke={rim} strokeWidth="6.4" strokeLinecap="round" />
      <path d="M57 47 C68 70 76 92 81 109" fill="none" stroke={body} strokeWidth="5" strokeLinecap="round" />
      <path d="M43 47 C38 68 36 86 40 102" fill="none" stroke={rim} strokeWidth="6.4" strokeLinecap="round" />
      <path d="M43 47 C38 68 36 86 40 102" fill="none" stroke={body} strokeWidth="5" strokeLinecap="round" />
      <circle cx="81.5" cy="111" r="3.4" fill={body} stroke={rim} strokeWidth=".7" />
    </svg>
  );
}
