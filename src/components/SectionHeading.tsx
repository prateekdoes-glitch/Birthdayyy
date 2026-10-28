export function SectionHeading({ id, kicker, children }: { id: string; kicker?: string; children: string }) {
  return <header className="section-heading">{kicker && <p className="hand kicker">{kicker}</p>}<h2 id={id}>{children}</h2></header>;
}
