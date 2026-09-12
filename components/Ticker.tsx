export default function Ticker({ items }: { items: string[] }) {
  // Duplicate the list so the CSS marquee can loop seamlessly.
  const loop = [...items, ...items];

  return (
    <>
      <p className="visually-hidden">Spécialités : {items.join(", ")}.</p>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {loop.map((item, i) => (
            <span className="ticker-item" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
