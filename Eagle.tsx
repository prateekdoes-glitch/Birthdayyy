import { useReducedMotion } from '../hooks/useReducedMotion';
export function Eagle({ carrying }: { carrying: boolean }) {
  const reduced = useReducedMotion();
  const flap = (vals: string, begin: string) => reduced ? null : <animateTransform attributeName="transform" type="rotate" values={vals} dur=".95s" begin={begin} repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />;
  const wing = 'M96 60 C84 34 82 4 98 -30 C104 -14 116 2 134 14 C150 24 166 34 182 40 C150 42 126 52 108 64 Z';
  return (
    <svg className="eagle-svg" viewBox="0 -40 240 160" aria-hidden="true" focusable="false">
      <g fill="#C9D3EA" stroke="#9FB0D6" strokeWidth=".8"><g>{flap('-26 100 58;38 100 58;-26 100 58', '-.15s')}<path d={wing} /></g></g>
      <path d="M52 54 C68 46 104 48 150 60 C176 66 204 76 226 98 L200 94 L216 114 L180 98 C150 92 104 84 74 78 C58 74 50 66 52 54 Z" fill="#fff" stroke="#C5D0E8" strokeWidth=".9" />
      <path d="M150 62 C178 70 200 82 214 96 M140 66 C170 78 192 92 204 100" stroke="#DCE4F4" strokeWidth="1.2" fill="none" />
      <circle cx="50" cy="54" r="11" fill="#fff" stroke="#C5D0E8" strokeWidth=".9" />
      <path d="M41 50 L23 58 L41 63 Z" fill="#E8CB91" /><circle cx="46" cy="51" r="1.9" fill="#343650" />
      <path d="M104 84 L100 99 M112 85 L110 100" stroke="#E8CB91" strokeWidth="2.6" strokeLinecap="round" />
      <g fill="#fff" stroke="#9FB0D6" strokeWidth=".9"><g>{flap('-26 100 58;38 100 58;-26 100 58', '0s')}<path d={wing} />
        <path d="M100 -6 C108 20 110 40 106 58 M118 6 C128 24 132 38 130 52 M140 20 C150 30 160 36 170 40" stroke="#C9D3EA" fill="none" /></g></g>
      {carrying && <g transform="translate(88 92)"><rect width="30" height="20" rx="2" fill="#F7F0E6" stroke="#C17C91" strokeWidth="1" /><path d="M0 0 L15 11 L30 0" fill="none" stroke="#C17C91" /><circle cx="15" cy="11" r="3.4" fill="#C17C91" /></g>}
    </svg>
  );
}
