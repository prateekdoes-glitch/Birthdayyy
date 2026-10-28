export function Footer({ name, onLetter }: { name: string; onLetter: () => void }) {
  return (
    <footer className="closing container">
      <hr className="divider" />
      <span className="doodle" aria-hidden="true">✿</span>
      <p className="hand big">And that is only a tiny piece of how much you mean to me.</p>
      <p className="closing-title">Happy Birthday, {name} ♡</p>
      <div className="closing-actions">
        <button className="btn btn-ghost" onClick={onLetter}>Revisit the letter</button>
        <button className="btn btn-ghost" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>Back to the start</button>
      </div>
    </footer>
  );
}
